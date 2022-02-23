import React from 'react'
import { Flex, Text } from '@champagneswap/uikit'
import { useWeb3React } from '@web3-react/core'
import { useTranslation } from 'contexts/Localization'
import { usePriceChamBusd } from 'state/farms/hooks'
import { useVaultPoolByKey } from 'state/pools/hooks'
import { VaultKey } from 'state/types'
import { getChamVaultEarnings } from 'views/Pools/helpers'
import RecentChamProfitBalance from './RecentChamProfitBalance'

const RecentChamProfitCountdownRow = ({ vaultKey }: { vaultKey: VaultKey }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const {
    pricePerFullShare,
    userData: { chamAtLastUserAction, userShares, lastUserActionTime },
  } = useVaultPoolByKey(vaultKey)
  const chamPriceBusd = usePriceChamBusd()
  const { hasAutoEarnings, autoChamToDisplay, autoUsdToDisplay } = getChamVaultEarnings(
    account,
    chamAtLastUserAction,
    userShares,
    pricePerFullShare,
    chamPriceBusd.toNumber(),
  )

  const lastActionInMs = lastUserActionTime && parseInt(lastUserActionTime) * 1000
  const dateTimeLastAction = new Date(lastActionInMs)
  const dateStringToDisplay = dateTimeLastAction.toLocaleString()

  return (
    <Flex alignItems="center" justifyContent="space-between">
      <Text fontSize="14px">{`${t('Recent CHAM profit')}:`}</Text>
      {hasAutoEarnings && (
        <RecentChamProfitBalance
          chamToDisplay={autoChamToDisplay}
          dollarValueToDisplay={autoUsdToDisplay}
          dateStringToDisplay={dateStringToDisplay}
        />
      )}
    </Flex>
  )
}

export default RecentChamProfitCountdownRow
