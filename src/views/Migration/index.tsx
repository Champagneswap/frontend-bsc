import React, { useMemo } from 'react'
import styled from 'styled-components'
import { Pair } from '@pancakeswap/sdk'
import { Text, Flex, CardBody, CardFooter, Button, AddIcon } from '@champagneswap/uikit'
import Link from 'next/link'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import FullPositionCard_Mig from '../../components/PositionCard_Mig'
import { useTokenBalancesWithLoadingIndicator } from '../../state/wallet/hooks_Mig'
import { usePairs_Mig } from '../../hooks/usePairs_Mig'
import { toV2LiquidityToken, useTrackedTokenPairs, useTrackedTokenPairs_Mig } from '../../state/user/hooks/mig_hook'
import Dots from '../../components/Loader/Dots'
import { AppHeader, AppBody } from '../../components/App'
import Page from '../Page'

const Body = styled(CardBody)`
  background-color: ${({ theme }) => theme.colors.dropdownDeep};
`

function ContentWithAccount({ account, tokenPairsWithLiquidityTokens, liquidityTokens }) {
  const { t } = useTranslation();
  
  const [v2PairsBalances, fetchingV2PairBalances] = useTokenBalancesWithLoadingIndicator(
    account ?? undefined,
    liquidityTokens,
  )
  

  // fetch the reserves for all V2 pools in which the user has a balance
  const liquidityTokensWithBalances = useMemo(
    () =>
      tokenPairsWithLiquidityTokens.filter(({ liquidityToken }) =>
        v2PairsBalances[liquidityToken.address]?.greaterThan('0'),
      ),
    [tokenPairsWithLiquidityTokens, v2PairsBalances],
  )
  
  const v2Pairs = usePairs_Mig(liquidityTokensWithBalances.map(({ tokens }) => tokens))
  
  const v2IsLoading =
    fetchingV2PairBalances || v2Pairs?.length < liquidityTokensWithBalances.length || v2Pairs?.some((V2Pair) => !V2Pair)

  const allV2PairsWithLiquidity = v2Pairs.map(([, pair]) => pair).filter((v2Pair): v2Pair is Pair => Boolean(v2Pair))

  const renderBody = () => {
    if (v2IsLoading) {
      return (
        <Text color="textSubtle" textAlign="center">
          <Dots>{t('Loading')}</Dots>
        </Text>
      )
    }
    if (allV2PairsWithLiquidity?.length > 0) {
      return allV2PairsWithLiquidity.map((v2Pair, index) => (
        <FullPositionCard_Mig
          key={v2Pair.liquidityToken.address}
          pair={v2Pair}
          mb={index < allV2PairsWithLiquidity.length - 1 ? '16px' : 0}
        />
      ))
    }
    return (
      <Text color="textSubtle" textAlign="center">
        {t('No liquidity found.')}
      </Text>
    )
  };

  return (
    <>
      {renderBody()}
      {!v2IsLoading && (
        <Flex flexDirection="column" alignItems="center" mt="24px">
          <Text color="textSubtle" mb="8px">
            {t("Don't see a pool you joined?")}
          </Text>
          <Link href="/find">
            <Button id="import-pool-link" variant="secondary" scale="sm" as="a">
              {t('Find other LP tokens')}
            </Button>
          </Link>
        </Flex>
      )}
    </>
  );
}

function ContentWithoutAccount() {
  const { t } = useTranslation();

  return (
    <Text color="textSubtle" textAlign="center">
      {t('Connect to a wallet to view your liquidity.')}
    </Text>
  );
}

export default function Migration() {
  const { account } = useActiveWeb3React()
  const { t } = useTranslation()
  // fetch the user's balances of all tracked V2 LP tokens
  const trackedTokenPairs = useTrackedTokenPairs_Mig()

  const tokenPairsWithLiquidityTokens = useMemo(
    () => trackedTokenPairs.map((tokens) => ({ liquidityToken: toV2LiquidityToken(tokens), tokens })),
    [trackedTokenPairs],
  )

  const liquidityTokens = useMemo(
    () => tokenPairsWithLiquidityTokens.map((tpwlt) => tpwlt.liquidityToken),
    [tokenPairsWithLiquidityTokens],
  )

  return (
    <Page>
      <AppBody>
        <AppHeader title={t('Your Liquidity')} subtitle={t('Migrate liquidity to ChampagneSwap')} />
        <Body>
          {account ? (
            <ContentWithAccount account={account} tokenPairsWithLiquidityTokens={tokenPairsWithLiquidityTokens} liquidityTokens={liquidityTokens}/>
          ) : (
            <ContentWithoutAccount />
          )}
        </Body>
      </AppBody>
    </Page>
  )
}
