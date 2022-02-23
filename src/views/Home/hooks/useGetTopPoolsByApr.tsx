import { useState, useEffect, useMemo } from 'react'
import { usePriceChamBusd } from 'state/farms/hooks'
import { useAppDispatch } from 'state'
import orderBy from 'lodash/orderBy'
import { VaultKey, DeserializedPool } from 'state/types'
import { fetchChamVaultFees, fetchPoolsPublicDataAsync } from 'state/pools'
import { useChamVault, useIfoPoolVault, usePools } from 'state/pools/hooks'
import { getAprData } from 'views/Pools/helpers'
import { FetchStatus } from 'config/constants/types'

export function usePoolsWithVault() {
  const { pools: poolsWithoutAutoVault } = usePools()
  const chamVault = useChamVault()
  const ifoPool = useIfoPoolVault()
  const pools = useMemo(() => {
    const activePools = poolsWithoutAutoVault.filter((pool) => !pool.isFinished)
    const cakePool = activePools.find((pool) => pool.sousId === 0)
    const cakeAutoVault = { ...cakePool, vaultKey: VaultKey.ChamVault }
    const ifoPoolVault = { ...cakePool, vaultKey: VaultKey.IfoPool }
    const cakeAutoVaultWithApr = {
      ...cakeAutoVault,
      apr: getAprData(cakeAutoVault, chamVault.fees.performanceFeeAsDecimal).apr,
      rawApr: cakePool.apr,
    }
    const ifoPoolWithApr = {
      ...ifoPoolVault,
      apr: getAprData(ifoPoolVault, ifoPool.fees.performanceFeeAsDecimal).apr,
      rawApr: cakePool.apr,
    }
    return [ifoPoolWithApr, cakeAutoVaultWithApr, ...poolsWithoutAutoVault]
  }, [poolsWithoutAutoVault, chamVault.fees.performanceFeeAsDecimal, ifoPool.fees.performanceFeeAsDecimal])

  return pools
}

const useGetTopPoolsByApr = (isIntersecting: boolean) => {
  const dispatch = useAppDispatch()

  const [fetchStatus, setFetchStatus] = useState(FetchStatus.Idle)
  const [topPools, setTopPools] = useState<DeserializedPool[]>([null, null, null, null, null])

  const pools = usePoolsWithVault()

  const chamPriceBusd = usePriceChamBusd()

  useEffect(() => {
    const fetchPoolsPublicData = async () => {
      setFetchStatus(FetchStatus.Fetching)

      try {
        await dispatch(fetchChamVaultFees())
        await dispatch(fetchPoolsPublicDataAsync())
        setFetchStatus(FetchStatus.Fetched)
      } catch (e) {
        console.error(e)
        setFetchStatus(FetchStatus.Failed)
      }
    }

    if (isIntersecting && fetchStatus === FetchStatus.Idle) {
      fetchPoolsPublicData()
    }
  }, [dispatch, setFetchStatus, fetchStatus, topPools, isIntersecting])

  useEffect(() => {
    const getTopPoolsByApr = (activePools: DeserializedPool[]) => {
      const sortedByApr = orderBy(activePools, (pool: DeserializedPool) => pool.apr || 0, 'desc')
      setTopPools(sortedByApr.slice(0, 5))
    }
    if (fetchStatus === FetchStatus.Fetched && !topPools[0]) {
      getTopPoolsByApr(pools)
    }
  }, [setTopPools, pools, fetchStatus, chamPriceBusd, topPools])

  return { topPools }
}

export default useGetTopPoolsByApr
