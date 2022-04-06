import React from 'react'
import { Flex, Text, IconButton, AddIcon, MinusIcon, useModal, Skeleton, Box } from '@champagneswap/uikit'
import BigNumber from 'bignumber.js'
import { getBalanceNumber } from 'utils/formatBalance'
import { DeserializedPool, VaultKey } from 'state/types'
import { usePriceChamBusd } from 'state/farms/hooks'
import { useVaultPoolByKey } from 'state/pools/hooks'
import Balance from 'components/Balance'
import { useTranslation } from 'contexts/Localization'
import NotEnoughTokensModal from '../../PoolCard/Modals/NotEnoughTokensModal'
import { convertSharesToCham } from '../../../helpers'
import VaultStakeModal from '../VaultStakeModal'

interface HasStakeActionProps {
  pool: DeserializedPool
  stakingTokenBalance: BigNumber
  performanceFee: number
}

const HasSharesActions: React.FC<HasStakeActionProps> = ({ pool, stakingTokenBalance, performanceFee }) => {
  const {
    totalShares,
    userData: { userShares, isLoading },
    pricePerFullShare,
  } = useVaultPoolByKey(pool.vaultKey)
  const { stakingToken } = pool
  const { chamAsBigNumber, chamAsNumberBalance } = convertSharesToCham(userShares, pricePerFullShare)
  const chamPriceBusd = usePriceChamBusd()
  const stakedDollarValue = chamPriceBusd.gt(0)
    ? getBalanceNumber(chamAsBigNumber.multipliedBy(chamPriceBusd), stakingToken.decimals)
    : 0
  const { t } = useTranslation()

  const [onPresentTokenRequired] = useModal(<NotEnoughTokensModal tokenSymbol={stakingToken.symbol} />)
  const [onPresentStake] = useModal(
    <VaultStakeModal stakingMax={stakingTokenBalance} performanceFee={performanceFee} pool={pool} />,
  )
  const [onPresentUnstake] = useModal(<VaultStakeModal stakingMax={chamAsBigNumber} pool={pool} isRemovingStake />)

  const totalSharesPercentage =
    userShares &&
    userShares.gt(0) &&
    totalShares &&
    userShares.dividedBy(totalShares).multipliedBy(100).decimalPlaces(5)

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <Flex flexDirection="column">
        <Balance fontSize="20px" bold value={chamAsNumberBalance} decimals={5} />
        <Text as={Flex} fontSize="12px" color="textSubtle" flexWrap="wrap">
          {chamPriceBusd.gt(0) ? (
            <Balance value={stakedDollarValue} fontSize="12px" color="textSubtle" decimals={2} prefix="~" unit=" USD" />
          ) : (
            <Skeleton mt="1px" height={16} width={64} />
          )}
          {!isLoading && totalSharesPercentage && pool.vaultKey === VaultKey.IfoPool && (
            <Box as="span" ml="2px">
              | {t('%num% of total', { num: `${totalSharesPercentage.toString()}%` })}
            </Box>
          )}
        </Text>
      </Flex>
      <Flex>
        <IconButton variant="secondary" onClick={onPresentUnstake} mr="6px">
          <MinusIcon color="primary" width="24px" />
        </IconButton>
        <IconButton variant="secondary" onClick={stakingTokenBalance.gt(0) ? onPresentStake : onPresentTokenRequired}>
          <AddIcon color="primary" width="24px" height="24px" />
        </IconButton>
      </Flex>
    </Flex>
  )
}

export default HasSharesActions
