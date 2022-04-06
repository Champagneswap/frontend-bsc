import BigNumber from 'bignumber.js'
import { BigNumber as EthersBigNumber } from '@ethersproject/bignumber'
import { LotteryStatus, LotteryTicket } from 'config/constants/types'
import lotteryV2Abi from 'config/abi/lotteryV2.json'
import { getLotteryV2Address } from 'utils/addressHelpers'
import { multicallv2 } from 'utils/multicall'
import { LotteryRound, LotteryRoundUserTickets, LotteryResponse } from 'state/types'
import { getLotteryV2Contract } from 'utils/contractHelpers'
import { useMemo } from 'react'
import { ethersToSerializedBigNumber } from 'utils/bigNumber'
import { NUM_ROUNDS_TO_FETCH_FROM_NODES } from 'config/constants/lottery'

const lotteryContract = getLotteryV2Contract()

const processViewLotterySuccessResponse = (response, lotteryId: string): LotteryResponse => {
  const {
    status,
    startTime,
    endTime,
    priceTicketInCham,
    discountDivisor,
    treasuryFee,
    firstTicketId,
    lastTicketId,
    amountCollectedInCham,
    finalNumber,
    chamPerBracket,
    countWinnersPerBracket,
    rewardsBreakdown,
  } = response

  const statusKey = Object.keys(LotteryStatus)[status]
  const serializedChamPerBracket = chamPerBracket.map((chamInBracket) => ethersToSerializedBigNumber(chamInBracket))
  const serializedCountWinnersPerBracket = countWinnersPerBracket.map((winnersInBracket) =>
    ethersToSerializedBigNumber(winnersInBracket),
  )
  const serializedRewardsBreakdown = rewardsBreakdown.map((reward) => ethersToSerializedBigNumber(reward))

  return {
    isLoading: false,
    lotteryId,
    status: LotteryStatus[statusKey],
    startTime: startTime?.toString(),
    endTime: endTime?.toString(),
    priceTicketInCham: ethersToSerializedBigNumber(priceTicketInCham),
    discountDivisor: discountDivisor?.toString(),
    treasuryFee: treasuryFee?.toString(),
    firstTicketId: firstTicketId?.toString(),
    lastTicketId: lastTicketId?.toString(),
    amountCollectedInCham: ethersToSerializedBigNumber(amountCollectedInCham),
    finalNumber,
    chamPerBracket: serializedChamPerBracket,
    countWinnersPerBracket: serializedCountWinnersPerBracket,
    rewardsBreakdown: serializedRewardsBreakdown,
  }
}

const processViewLotteryErrorResponse = (lotteryId: string): LotteryResponse => {
  return {
    isLoading: true,
    lotteryId,
    status: LotteryStatus.PENDING,
    startTime: '',
    endTime: '',
    priceTicketInCham: '',
    discountDivisor: '',
    treasuryFee: '',
    firstTicketId: '',
    lastTicketId: '',
    amountCollectedInCham: '',
    finalNumber: null,
    chamPerBracket: [],
    countWinnersPerBracket: [],
    rewardsBreakdown: [],
  }
}

export const fetchLottery = async (lotteryId: string): Promise<LotteryResponse> => {
  try {
    const lotteryData = await lotteryContract.viewLottery(lotteryId)
    return processViewLotterySuccessResponse(lotteryData, lotteryId)
  } catch (error) {
    return processViewLotteryErrorResponse(lotteryId)
  }
}

export const fetchMultipleLotteries = async (lotteryIds: string[]): Promise<LotteryResponse[]> => {
  const calls = lotteryIds.map((id) => ({
    name: 'viewLottery',
    address: getLotteryV2Address(),
    params: [id],
  }))
  try {
    const multicallRes = await multicallv2(lotteryV2Abi, calls, { requireSuccess: false })
    const processedResponses = multicallRes.map((res, index) =>
      processViewLotterySuccessResponse(res[0], lotteryIds[index]),
    )
    return processedResponses
  } catch (error) {
    console.error(error)
    return calls.map((call, index) => processViewLotteryErrorResponse(lotteryIds[index]))
  }
}

export const fetchCurrentLotteryIdAndMaxBuy = async () => {
  try {
    const calls = ['currentLotteryId', 'maxNumberTicketsPerBuyOrClaim'].map((method) => ({
      address: getLotteryV2Address(),
      name: method,
    }))
    const [[currentLotteryId], [maxNumberTicketsPerBuyOrClaim]] = (await multicallv2(
      lotteryV2Abi,
      calls,
    )) as EthersBigNumber[][]

    return {
      currentLotteryId: currentLotteryId ? currentLotteryId.toString() : null,
      maxNumberTicketsPerBuyOrClaim: maxNumberTicketsPerBuyOrClaim ? maxNumberTicketsPerBuyOrClaim.toString() : null,
    }
  } catch (error) {
    return {
      currentLotteryId: null,
      maxNumberTicketsPerBuyOrClaim: null,
    }
  }
}

export const getRoundIdsArray = (currentLotteryId: string): string[] => {
  const currentIdAsInt = parseInt(currentLotteryId, 10)
  const roundIds = []
  for (let i = 0; i < NUM_ROUNDS_TO_FETCH_FROM_NODES; i++) {
    roundIds.push(currentIdAsInt - i)
  }
  return roundIds.map((roundId) => roundId.toString())
}

export const useProcessLotteryResponse = (
  lotteryData: LotteryResponse & { userTickets?: LotteryRoundUserTickets },
): LotteryRound => {
  const {
    priceTicketInCham: priceTicketInChamAsString,
    discountDivisor: discountDivisorAsString,
    amountCollectedInCham: amountCollectedInChamAsString,
  } = lotteryData

  const discountDivisor = useMemo(() => {
    return new BigNumber(discountDivisorAsString)
  }, [discountDivisorAsString])

  const priceTicketInCham = useMemo(() => {
    return new BigNumber(priceTicketInChamAsString)
  }, [priceTicketInChamAsString])

  const amountCollectedInCham = useMemo(() => {
    return new BigNumber(amountCollectedInChamAsString)
  }, [amountCollectedInChamAsString])

  return {
    isLoading: lotteryData.isLoading,
    lotteryId: lotteryData.lotteryId,
    userTickets: lotteryData.userTickets,
    status: lotteryData.status,
    startTime: lotteryData.startTime,
    endTime: lotteryData.endTime,
    priceTicketInCham,
    discountDivisor,
    treasuryFee: lotteryData.treasuryFee,
    firstTicketId: lotteryData.firstTicketId,
    lastTicketId: lotteryData.lastTicketId,
    amountCollectedInCham,
    finalNumber: lotteryData.finalNumber,
    chamPerBracket: lotteryData.chamPerBracket,
    countWinnersPerBracket: lotteryData.countWinnersPerBracket,
    rewardsBreakdown: lotteryData.rewardsBreakdown,
  }
}

export const hasRoundBeenClaimed = (tickets: LotteryTicket[]): boolean => {
  const claimedTickets = tickets.filter((ticket) => ticket.status)
  return claimedTickets.length > 0
}
