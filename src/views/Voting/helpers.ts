import snapshot from '@snapshot-labs/snapshot.js'
import BigNumber from 'bignumber.js'
import { SNAPSHOT_HUB_API } from 'config/constants/endpoints'
import tokens from 'config/constants/tokens'
import { Proposal, ProposalState, ProposalType, Vote } from 'state/types'
import { snapshotStrategies, createPoolStrategy } from 'config/constants/snapshot'
import { ADMINS, CHAMPAGNE_SPACE, SNAPSHOT_VERSION } from './config'

export const isCoreProposal = (proposal: Proposal) => {
  return ADMINS.includes(proposal.author.toLowerCase())
}

export const filterProposalsByType = (proposals: Proposal[], proposalType: ProposalType) => {
  if (proposals) {
    switch (proposalType) {
      case ProposalType.COMMUNITY:
        return proposals.filter((proposal) => !isCoreProposal(proposal))
      case ProposalType.CORE:
        return proposals.filter((proposal) => isCoreProposal(proposal))
      case ProposalType.ALL:
      default:
        return proposals
    }
  } else {
    return []
  }
}

export const filterProposalsByState = (proposals: Proposal[], state: ProposalState) => {
  return proposals.filter((proposal) => proposal.state === state)
}

export interface Message {
  address: string
  msg: string
  sig: string
}

/**
 * Generates metadata required by snapshot to validate payload
 */
export const generateMetaData = () => {
  return {
    plugins: {},
    network: 56,
    strategies: [{ name: 'cham', params: { symbol: 'CHAM', address: tokens.cham.address, decimals: 18 } }],
  }
}

/**
 * Returns data that is required on all snapshot payloads
 */
export const generatePayloadData = () => {
  return {
    version: SNAPSHOT_VERSION,
    timestamp: (Date.now() / 1e3).toFixed(),
    space: CHAMPAGNE_SPACE,
  }
}

/**
 * General function to send commands to the snapshot api
 */
export const sendSnapshotData = async (message: Message) => {
  const response = await fetch(SNAPSHOT_HUB_API, {
    method: 'post',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  })

  if (!response.ok) {
    const error = await response.json()
    throw new Error(error?.error_description)
  }

  const data = await response.json()
  return data
}

export const getVotingPower = async (account: string, poolAddresses: string[], blockNumber?: number) => {
  const votingPowerList = await getVotingPowerList([account], poolAddresses, blockNumber)
  return votingPowerList[0]
}

export const calculateVoteResults = (votes: Vote[]): { [key: string]: Vote[] } => {
  if (votes) {
    return votes.reduce((accum, vote) => {
      const choiceText = vote.proposal.choices[vote.choice - 1]

      return {
        ...accum,
        [choiceText]: accum[choiceText] ? [...accum[choiceText], vote] : [vote],
      }
    }, {})
  }
  return {}
}

export const getTotalFromVotes = (votes: Vote[]) => {
  if (votes) {
    return votes.reduce((accum, vote) => {
      let power = parseFloat(vote.metadata?.votingPower)

      if (!power) {
        power = 0
      }

      return accum + power
    }, 0)
  }
  return 0
}

type ScoresResponseByAddress = {
  [address: string]: number
}

const TEN_POW_18 = new BigNumber(10).pow(18)

type GetScoresResponse = ScoresResponseByAddress[]
type ScoresListIndex = {
  chamBalances: number
  chamVaultShares: number
  chamVaultPricePerFullShares: number
  ifoPoolShares: number
  ifoPoolPricePerFullShares: number
  userStakeInChamPools: number
  chamBnbLpTotalSupplies: number
  chamBnbLpReserve0s: number
  chamBnbLpChamBnbBalances: number
  poolStart: number
}

function calculateVotingPower(scoresList: GetScoresResponse, voters: string[], scoresListIndex: ScoresListIndex) {
  let [
    chamBalances,
    chamVaultShares,
    chamVaultPricePerFullShares,
    ifoPoolShares,
    ifoPoolPricePerFullShares,
    userStakeInChamPools,
    chamBnbLpTotalSupplies,
    chamBnbLpReserve0s,
    chamBnbLpChamBnbBalances,
  ] = new Array(9)
  const defaultScore = {}
  for (let i = 0; i < voters.length; i++) {
    defaultScore[voters[i]] = 0
  }
  chamBalances = scoresListIndex.chamBalances > -1 ? scoresList[scoresListIndex.chamBalances] : defaultScore
  chamVaultShares = scoresListIndex.chamVaultShares > -1 ? scoresList[scoresListIndex.chamVaultShares] : defaultScore
  chamVaultPricePerFullShares =
    scoresListIndex.chamVaultPricePerFullShares > -1
      ? scoresList[scoresListIndex.chamVaultPricePerFullShares]
      : defaultScore
  ifoPoolShares = scoresListIndex.ifoPoolShares > -1 ? scoresList[scoresListIndex.ifoPoolShares] : defaultScore
  ifoPoolPricePerFullShares =
    scoresListIndex.ifoPoolPricePerFullShares > -1
      ? scoresList[scoresListIndex.ifoPoolPricePerFullShares]
      : defaultScore
  userStakeInChamPools =
    scoresListIndex.userStakeInChamPools > -1 ? scoresList[scoresListIndex.userStakeInChamPools] : defaultScore
  chamBnbLpTotalSupplies =
    scoresListIndex.chamBnbLpTotalSupplies > -1 ? scoresList[scoresListIndex.chamBnbLpTotalSupplies] : defaultScore
  chamBnbLpReserve0s =
    scoresListIndex.chamBnbLpReserve0s > -1 ? scoresList[scoresListIndex.chamBnbLpReserve0s] : defaultScore
  chamBnbLpChamBnbBalances =
    scoresListIndex.chamBnbLpChamBnbBalances > -1 ? scoresList[scoresListIndex.chamBnbLpChamBnbBalances] : defaultScore

  const result = voters.map((address) => {
    const chamBalance = new BigNumber(chamBalances[address])
    // calculate chamVaultBalance
    const sharePrice = new BigNumber(chamVaultPricePerFullShares[address]).div(TEN_POW_18)
    const chamVaultBalance = new BigNumber(chamVaultShares[address]).times(sharePrice)

    // calculate ifoPoolBalance
    const IFOPoolsharePrice = new BigNumber(ifoPoolPricePerFullShares[address]).div(TEN_POW_18)
    const IFOPoolBalance = new BigNumber(ifoPoolShares[address]).times(IFOPoolsharePrice)

    const chamPoolBalance = new BigNumber(userStakeInChamPools[address])
    // calculate chamBnbLpBalance
    const totalSupplyLP = new BigNumber(chamBnbLpTotalSupplies[address])
    const chamBnbLpReserve0 = new BigNumber(chamBnbLpReserve0s[address])
    const chamBnbLpChamBnbBalance = new BigNumber(chamBnbLpChamBnbBalances[address])
    const chamBnbLpBalance = chamBnbLpChamBnbBalance.times(chamBnbLpReserve0).div(totalSupplyLP)

    // calculate poolsBalance
    const poolStartIndex = scoresListIndex.poolStart
    let poolsBalance = new BigNumber(0)
    for (let i = poolStartIndex; i < scoresList.length; i++) {
      const currentPoolBalance = new BigNumber(scoresList[i][address])
      poolsBalance = poolsBalance.plus(currentPoolBalance)
    }

    const total = chamBalance
      .plus(chamVaultBalance)
      .plus(chamPoolBalance)
      .plus(IFOPoolBalance)
      .plus(chamBnbLpBalance)
      .plus(poolsBalance)
      .div(TEN_POW_18)
      .toFixed(18)
    return {
      chamBalance: chamBalance.div(TEN_POW_18).toFixed(18),
      chamVaultBalance: chamVaultBalance.div(TEN_POW_18).toFixed(18),
      IFOPoolBalance: IFOPoolBalance.div(TEN_POW_18).toFixed(18),
      chamPoolBalance: chamPoolBalance.div(TEN_POW_18).toFixed(18),
      chamBnbLpBalance: chamBnbLpBalance.div(TEN_POW_18).toFixed(18),
      poolsBalance: poolsBalance.div(TEN_POW_18).toFixed(18),
      total,
      voter: address,
    }
  })
  return result
}

const ContractDeployedNumber = {
  Cham: 693963,
  ChamVault: 6975840,
  IFOPool: 13463954,
  MasterChef: 699498,
  ChamLp: 6810706,
}

function verifyDefaultContract(blockNumber: number) {
  return {
    Cham: ContractDeployedNumber.Cham < blockNumber,
    ChamVault: ContractDeployedNumber.ChamVault < blockNumber,
    IFOPool: ContractDeployedNumber.IFOPool < blockNumber,
    MasterChef: ContractDeployedNumber.MasterChef < blockNumber,
    ChamLp: ContractDeployedNumber.ChamLp < blockNumber,
  }
}

export async function getVotingPowerList(voters: string[], poolAddresses: string[], blockNumber: number) {
  const poolsStrategyList = poolAddresses.map((address) => createPoolStrategy(address))
  const contractsValid = verifyDefaultContract(blockNumber)
  const scoresListIndex = {
    chamBalances: -1,
    chamVaultShares: -1,
    chamVaultPricePerFullShares: -1,
    ifoPoolShares: -1,
    ifoPoolPricePerFullShares: -1,
    userStakeInChamPools: -1,
    chamBnbLpTotalSupplies: -1,
    chamBnbLpReserve0s: -1,
    chamBnbLpChamBnbBalances: -1,
    poolStart: 0,
  }
  const defaultStrategy = []
  let indexCounter = 0
  if (contractsValid.Cham) {
    defaultStrategy.push(snapshotStrategies[0])
    scoresListIndex.chamBalances = indexCounter++
  }
  if (contractsValid.ChamVault) {
    defaultStrategy.push(snapshotStrategies[1])
    scoresListIndex.chamVaultShares = indexCounter++
    defaultStrategy.push(snapshotStrategies[2])
    scoresListIndex.chamVaultPricePerFullShares = indexCounter++
  }
  if (contractsValid.IFOPool) {
    defaultStrategy.push(snapshotStrategies[3])
    scoresListIndex.ifoPoolShares = indexCounter++
    defaultStrategy.push(snapshotStrategies[4])
    scoresListIndex.ifoPoolPricePerFullShares = indexCounter++
  }
  if (contractsValid.MasterChef) {
    defaultStrategy.push(snapshotStrategies[5])
    scoresListIndex.userStakeInChamPools = indexCounter++
  }
  if (contractsValid.ChamLp) {
    defaultStrategy.push(snapshotStrategies[6])
    scoresListIndex.chamBnbLpTotalSupplies = indexCounter++
    defaultStrategy.push(snapshotStrategies[7])
    scoresListIndex.chamBnbLpReserve0s = indexCounter++
    defaultStrategy.push(snapshotStrategies[8])
    scoresListIndex.chamBnbLpChamBnbBalances = indexCounter++
  }
  scoresListIndex.poolStart = indexCounter

  const strategies = [...defaultStrategy, ...poolsStrategyList]
  const network = '56'
  const strategyResponse = await snapshot.utils.getScores(CHAMPAGNE_SPACE, strategies, network, voters, blockNumber)
  const votingPowerList = calculateVotingPower(strategyResponse, voters, scoresListIndex)
  return votingPowerList
}
