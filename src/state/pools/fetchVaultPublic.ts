import BigNumber from 'bignumber.js'
import { convertSharesToCham } from 'views/Pools/helpers'
import { multicallv2 } from 'utils/multicall'
import chamVaultAbi from 'config/abi/chamVault.json'
import { getChamVaultAddress } from 'utils/addressHelpers'
import { BIG_ZERO } from 'utils/bigNumber'

export const fetchPublicVaultData = async () => {
  try {
    const calls = [
      'getPricePerFullShare',
      'totalShares',
      'calculateHarvestChamRewards',
      'calculateTotalPendingChamRewards',
    ].map((method) => ({
      address: getChamVaultAddress(),
      name: method,
    }))

    const [[sharePrice], [shares], [estimatedChamBountyReward], [totalPendingChamHarvest]] = await multicallv2(
      chamVaultAbi,
      calls,
    )

    const totalSharesAsBigNumber = shares ? new BigNumber(shares.toString()) : BIG_ZERO
    const sharePriceAsBigNumber = sharePrice ? new BigNumber(sharePrice.toString()) : BIG_ZERO
    const totalChamInVaultEstimate = convertSharesToCham(totalSharesAsBigNumber, sharePriceAsBigNumber)
    return {
      totalShares: totalSharesAsBigNumber.toJSON(),
      pricePerFullShare: sharePriceAsBigNumber.toJSON(),
      totalChamInVault: totalChamInVaultEstimate.chamAsBigNumber.toJSON(),
      estimatedChamBountyReward: new BigNumber(estimatedChamBountyReward.toString()).toJSON(),
      totalPendingChamHarvest: new BigNumber(totalPendingChamHarvest.toString()).toJSON(),
    }
  } catch (error) {
    return {
      totalShares: null,
      pricePerFullShare: null,
      totalChamInVault: null,
      estimatedChamBountyReward: null,
      totalPendingChamHarvest: null,
    }
  }
}

export const fetchVaultFees = async () => {
  try {
    const calls = ['performanceFee', 'callFee', 'withdrawFee', 'withdrawFeePeriod'].map((method) => ({
      address: getChamVaultAddress(),
      name: method,
    }))

    const [[performanceFee], [callFee], [withdrawalFee], [withdrawalFeePeriod]] = await multicallv2(chamVaultAbi, calls)

    return {
      performanceFee: performanceFee.toNumber(),
      callFee: callFee.toNumber(),
      withdrawalFee: withdrawalFee.toNumber(),
      withdrawalFeePeriod: withdrawalFeePeriod.toNumber(),
    }
  } catch (error) {
    return {
      performanceFee: null,
      callFee: null,
      withdrawalFee: null,
      withdrawalFeePeriod: null,
    }
  }
}

export default fetchPublicVaultData
