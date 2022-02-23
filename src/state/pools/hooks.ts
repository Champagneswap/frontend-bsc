import { useEffect, useMemo } from 'react'
import BigNumber from 'bignumber.js'
import { useWeb3React } from '@web3-react/core'
import { batch, useSelector } from 'react-redux'
import { useAppDispatch } from 'state'
import { BIG_ZERO } from 'utils/bigNumber'
import { getAprData } from 'views/Pools/helpers'
import { useFastRefreshEffect, useSlowRefreshEffect } from 'hooks/useRefreshEffect'
import {
  fetchPoolsPublicDataAsync,
  fetchPoolsUserDataAsync,
  fetchChamVaultPublicData,
  fetchChamVaultUserData,
  fetchChamVaultFees,
  fetchPoolsStakingLimitsAsync,
  fetchIfoPoolFees,
  fetchIfoPoolPublicData,
  fetchIfoPoolUserAndCredit,
  initialPoolVaultState,
  fetchChamPoolPublicDataAsync,
  fetchChamPoolUserDataAsync,
} from '.'
import { State, DeserializedPool, VaultKey } from '../types'
import { transformPool } from './helpers'
import { fetchFarmsPublicDataAsync, nonArchivedFarms } from '../farms'

export const useFetchPublicPoolsData = () => {
  const dispatch = useAppDispatch()

  useSlowRefreshEffect(() => {
    const fetchPoolsDataWithFarms = async () => {
      const activeFarms = nonArchivedFarms.filter((farm) => farm.pid !== 0)
      await dispatch(fetchFarmsPublicDataAsync(activeFarms.map((farm) => farm.pid)))
      batch(() => {
        dispatch(fetchPoolsPublicDataAsync())
        dispatch(fetchPoolsStakingLimitsAsync())
      })
    }

    fetchPoolsDataWithFarms()
  }, [dispatch])
}

export const useFetchUserPools = (account) => {
  const dispatch = useAppDispatch()

  useFastRefreshEffect(() => {
    if (account) {
      dispatch(fetchPoolsUserDataAsync(account))
    }
  }, [account, dispatch])
}

export const usePools = (): { pools: DeserializedPool[]; userDataLoaded: boolean } => {
  const { pools, userDataLoaded } = useSelector((state: State) => ({
    pools: state.pools.data,
    userDataLoaded: state.pools.userDataLoaded,
  }))
  return { pools: pools.map(transformPool), userDataLoaded }
}

export const usePool = (sousId: number): { pool: DeserializedPool; userDataLoaded: boolean } => {
  const { pool, userDataLoaded } = useSelector((state: State) => ({
    pool: state.pools.data.find((p) => p.sousId === sousId),
    userDataLoaded: state.pools.userDataLoaded,
  }))
  return { pool: transformPool(pool), userDataLoaded }
}

export const useFetchChamVault = () => {
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()

  useFastRefreshEffect(() => {
    dispatch(fetchChamVaultPublicData())
  }, [dispatch])

  useFastRefreshEffect(() => {
    dispatch(fetchChamVaultUserData({ account }))
  }, [dispatch, account])

  useEffect(() => {
    dispatch(fetchChamVaultFees())
  }, [dispatch])
}

export const useFetchIfoPool = (fetchChamPool = true) => {
  const { account } = useWeb3React()
  const dispatch = useAppDispatch()

  useFastRefreshEffect(() => {
    batch(() => {
      if (fetchChamPool) {
        dispatch(fetchChamPoolPublicDataAsync())
      }
      dispatch(fetchIfoPoolPublicData())
    })
  }, [dispatch, fetchChamPool])

  useFastRefreshEffect(() => {
    if (account) {
      batch(() => {
        dispatch(fetchIfoPoolUserAndCredit({ account }))
        if (fetchChamPool) {
          dispatch(fetchChamPoolUserDataAsync(account))
        }
      })
    }
  }, [dispatch, account, fetchChamPool])

  useEffect(() => {
    dispatch(fetchIfoPoolFees())
  }, [dispatch])
}

export const useChamVault = () => {
  return useVaultPoolByKey(VaultKey.ChamVault)
}

export const useVaultPools = () => {
  return {
    [VaultKey.ChamVault]: useVaultPoolByKey(VaultKey.ChamVault),
    [VaultKey.IfoPool]: useVaultPoolByKey(VaultKey.IfoPool),
  }
}

export const useVaultPoolByKey = (key: VaultKey) => {
  const {
    totalShares: totalSharesAsString,
    pricePerFullShare: pricePerFullShareAsString,
    totalChamInVault: totalChamInVaultAsString,
    estimatedChamBountyReward: estimatedChamBountyRewardAsString,
    totalPendingChamHarvest: totalPendingChamHarvestAsString,
    fees: { performanceFee, callFee, withdrawalFee, withdrawalFeePeriod },
    userData: {
      isLoading,
      userShares: userSharesAsString,
      chamAtLastUserAction: chamAtLastUserActionAsString,
      lastDepositedTime,
      lastUserActionTime,
    },
  } = useSelector((state: State) => (key ? state.pools[key] : initialPoolVaultState))

  const estimatedChamBountyReward = useMemo(() => {
    return new BigNumber(estimatedChamBountyRewardAsString)
  }, [estimatedChamBountyRewardAsString])

  const totalPendingChamHarvest = useMemo(() => {
    return new BigNumber(totalPendingChamHarvestAsString)
  }, [totalPendingChamHarvestAsString])

  const totalShares = useMemo(() => {
    return new BigNumber(totalSharesAsString)
  }, [totalSharesAsString])

  const pricePerFullShare = useMemo(() => {
    return new BigNumber(pricePerFullShareAsString)
  }, [pricePerFullShareAsString])

  const totalChamInVault = useMemo(() => {
    return new BigNumber(totalChamInVaultAsString)
  }, [totalChamInVaultAsString])

  const userShares = useMemo(() => {
    return new BigNumber(userSharesAsString)
  }, [userSharesAsString])

  const chamAtLastUserAction = useMemo(() => {
    return new BigNumber(chamAtLastUserActionAsString)
  }, [chamAtLastUserActionAsString])

  const performanceFeeAsDecimal = performanceFee && performanceFee / 100

  return {
    totalShares,
    pricePerFullShare,
    totalChamInVault,
    estimatedChamBountyReward,
    totalPendingChamHarvest,
    fees: {
      performanceFeeAsDecimal,
      performanceFee,
      callFee,
      withdrawalFee,
      withdrawalFeePeriod,
    },
    userData: {
      isLoading,
      userShares,
      chamAtLastUserAction,
      lastDepositedTime,
      lastUserActionTime,
    },
  }
}

export const useIfoPoolVault = () => {
  return useVaultPoolByKey(VaultKey.IfoPool)
}

export const useIfoPoolCreditBlock = () => {
  return useSelector((state: State) => ({
    creditStartBlock: state.pools.ifoPool.creditStartBlock,
    creditEndBlock: state.pools.ifoPool.creditEndBlock,
    hasEndBlockOver: state.block.currentBlock >= state.pools.ifoPool.creditEndBlock,
  }))
}

export const useIfoPoolCredit = () => {
  const creditAsString = useSelector((state: State) => state.pools.ifoPool.userData?.credit ?? BIG_ZERO)
  const credit = useMemo(() => {
    return new BigNumber(creditAsString)
  }, [creditAsString])

  return credit
}

export const useIfoWithApr = () => {
  const {
    fees: { performanceFeeAsDecimal },
  } = useIfoPoolVault()
  const { pool: poolZero } = usePool(0)

  const ifoPoolWithApr = useMemo(() => {
    const ifoPool = { ...poolZero }
    ifoPool.vaultKey = VaultKey.IfoPool
    ifoPool.apr = getAprData(ifoPool, performanceFeeAsDecimal).apr
    ifoPool.rawApr = poolZero.apr
    return ifoPool
  }, [performanceFeeAsDecimal, poolZero])

  return {
    pool: ifoPoolWithApr,
  }
}
