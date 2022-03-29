import React, { useState, useEffect } from 'react'
import { Text, Flex, Skeleton, Image } from '@champagneswap/uikit'
import { useFarmAuctionContract } from 'hooks/useContract'
import { useTranslation } from 'contexts/Localization'
import { usePriceChamBusd } from 'state/farms/hooks'
import { getBalanceNumber } from 'utils/formatBalance'
import { ethersToBigNumber } from 'utils/bigNumber'
import Balance from 'components/Balance'
import styled from 'styled-components'

const BurnedText = styled(Text)`
  font-size: 52px;

  ${({ theme }) => theme.mediaQueries.sm} {
    font-size: 64px;
  }
`

const AuctionChamBurn: React.FC = () => {
  const [burnedChamAmount, setBurnedChamAmount] = useState(0)
  const { t } = useTranslation()
  const farmAuctionContract = useFarmAuctionContract(false)
  const chamPriceBusd = usePriceChamBusd()

  const burnedAmountAsUSD = chamPriceBusd.times(burnedChamAmount)

  useEffect(() => {
    const fetchBurnedChamAmount = async () => {
      try {
        const amount = await farmAuctionContract.totalCollected()
        const amountAsBN = ethersToBigNumber(amount)
        setBurnedChamAmount(getBalanceNumber(amountAsBN))
      } catch (error) {
        console.error('Failed to fetch burned auction cham', error)
      }
    }
    if (burnedChamAmount === 0) {
      fetchBurnedChamAmount()
    }
  }, [burnedChamAmount, farmAuctionContract])
  return (
    <Flex flexDirection={['column-reverse', null, 'row']}>
      <Flex flexDirection="column" flex="2">
        {burnedChamAmount !== 0 ? (
          <Balance fontSize="64px" bold value={burnedChamAmount} decimals={0} unit=" CHAM" />
        ) : (
          <Skeleton width="256px" height="64px" />
        )}
        <BurnedText textTransform="uppercase" bold color="secondary">
          {t('Burned')}
        </BurnedText>
        <Text fontSize="24px" bold>
          {t('through community auctions so far!')}
        </Text>
        {!burnedAmountAsUSD.isNaN() && !burnedAmountAsUSD.isZero() ? (
          <Text color="textSubtle">
            ~${burnedAmountAsUSD.toNumber().toLocaleString('en', { maximumFractionDigits: 0 })}
          </Text>
        ) : (
          <Skeleton width="128px" />
        )}
      </Flex>
      <Image width={350} height={320} src="/images/burnt-cham.png" alt={t('Burnt CHAM')} />
    </Flex>
  )
}

export default AuctionChamBurn
