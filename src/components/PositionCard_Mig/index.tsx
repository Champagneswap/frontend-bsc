import React, { useState } from 'react'
import { JSBI, Pair, Percent } from '@pancakeswap/sdk'
import {
  Button,
  Text,
  ChevronUpIcon,
  ChevronDownIcon,
  Card,
  CardBody,
  Flex,
  CardProps,
  AddIcon,
} from '@champagneswap/uikit'
import styled from 'styled-components'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from 'contexts/Localization'
import useActiveWeb3React from 'hooks/useActiveWeb3React'
import useTotalSupply from '../../hooks/useTotalSupply_Mig'
import { BigNumber } from '@ethersproject/bignumber'
import { TransactionResponse } from '@ethersproject/providers'
import { splitSignature } from '@ethersproject/bytes'
import { useRouter } from 'next/router'
import { useCurrency } from '../../hooks/Tokens'

import { CHAMPAGNEROLL_ADDRESS, ROUTER_ADDRESS } from '../../config/constants'
import { CHAIN_ID } from 'config/constants/networks'
import { usePairContract , usePanPairContract } from '../../hooks/useContract'

import useTransactionDeadline from '../../hooks/useTransactionDeadline'
import { useTransactionAdder } from '../../state/transactions/hooks'
import { Contract } from '@ethersproject/contracts'

import useToast from 'hooks/useToast'
import { calculateGasMargin, calculateSlippageAmount, getRouterContract, getChampagneRollContract } from '../../utils'

import { useGasPrice, useUserSlippageTolerance } from '../../state/user/hooks'
import { useTokenBalance } from '../../state/wallet/hooks_Mig'
import { currencyId } from '../../utils/currencyId'
import { unwrappedToken } from '../../utils/wrappedCurrency'
import { useApproveCallback, ApprovalState } from '../../hooks/useApproveCallback'
import { useBurnActionHandlers, useDerivedBurnInfo, useBurnState } from '../../state/burn/hooks'
import { Field } from '../../state/burn/actions'

import { LightCard } from '../Card'
import { AutoColumn } from '../Layout/Column'
import CurrencyLogo from '../Logo/CurrencyLogo'
import { DoubleCurrencyLogo } from '../Logo'
import { RowBetween, RowFixed } from '../Layout/Row'
import { BIG_INT_ZERO } from '../../config/constants'

import Dots from '../Loader/Dots'

const FixedHeightRow = styled(RowBetween)`
  height: 24px;
`

interface PositionCardProps extends CardProps {
  pair: Pair
  showUnwrapped?: boolean
}

export function MinimalPositionCard_Mig({ pair, showUnwrapped = false }: PositionCardProps) {
  const { account } = useActiveWeb3React()

  const { t } = useTranslation()

  const currency0 = showUnwrapped ? pair.token0 : unwrappedToken(pair.token0)
  const currency1 = showUnwrapped ? pair.token1 : unwrappedToken(pair.token1)

  
  

  const [showMore, setShowMore] = useState(false)

  const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken)
  const totalPoolTokens = useTotalSupply(pair.liquidityToken)

  const poolTokenPercentage =
    !!userPoolBalance && !!totalPoolTokens && JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? new Percent(userPoolBalance.raw, totalPoolTokens.raw)
      : undefined

  const [token0Deposited, token1Deposited] =
    !!pair &&
    !!totalPoolTokens &&
    !!userPoolBalance &&
    // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? [
          pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
          pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false),
        ]
      : [undefined, undefined]

  return (
    <>
      {userPoolBalance && JSBI.greaterThan(userPoolBalance.raw, JSBI.BigInt(0)) ? (
        <Card>
          <CardBody>
            <AutoColumn gap="16px">
              <FixedHeightRow>
                <RowFixed>
                  <Text color="secondary" bold>
                    {t('LP tokens in your wallet')}
                  </Text>
                </RowFixed>
              </FixedHeightRow>
              <FixedHeightRow onClick={() => setShowMore(!showMore)}>
                <RowFixed>
                  <DoubleCurrencyLogo currency0={currency0} currency1={currency1} margin size={20} />
                  <Text small color="textSubtle">
                    {currency0.symbol}-{currency1.symbol} LP
                  </Text>
                </RowFixed>
                <RowFixed>
                  <Text>{userPoolBalance ? userPoolBalance.toSignificant(4) : '-'}</Text>
                </RowFixed>
              </FixedHeightRow>
              <AutoColumn gap="4px">
                <FixedHeightRow>
                  <Text color="textSubtle" small>
                    {t('Share of Pool')}:
                  </Text>
                  <Text>{poolTokenPercentage ? `${poolTokenPercentage.toFixed(6)}%` : '-'}</Text>
                </FixedHeightRow>
                <FixedHeightRow>
                  <Text color="textSubtle" small>
                    {t('Pooled %asset%', { asset: currency0.symbol })}:
                  </Text>
                  {token0Deposited ? (
                    <RowFixed>
                      <Text ml="6px">{token0Deposited?.toSignificant(6)}</Text>
                    </RowFixed>
                  ) : (
                    '-'
                  )}
                </FixedHeightRow>
                <FixedHeightRow>
                  <Text color="textSubtle" small>
                    {t('Pooled %asset%', { asset: currency1.symbol })}:
                  </Text>
                  {token1Deposited ? (
                    <RowFixed>
                      <Text ml="6px">{token1Deposited?.toSignificant(6)}</Text>
                    </RowFixed>
                  ) : (
                    '-'
                  )}
                </FixedHeightRow>
              </AutoColumn>
            </AutoColumn>
          </CardBody>
        </Card>
      ) : (
        <LightCard>
          <Text fontSize="14px" style={{ textAlign: 'center' }}>
            <span role="img" aria-label="pancake-icon">
              🍾
            </span>{' '}
            {t(
              "By adding liquidity you'll earn 0.17% of all trades on this pair proportional to your share of the pool. Fees are added to the pool, accrue in real time and can be claimed by withdrawing your liquidity.",
            )}
          </Text>
        </LightCard>
      )}
    </>
  )
}

export default function FullPositionCard_Mig({ pair, ...props }: PositionCardProps) {

  const currency0 = unwrappedToken(pair.token0)
  const currency1 = unwrappedToken(pair.token1)

  const currencyIdA = currencyId(currency0)
  const currencyIdB = currencyId(currency1)
  const [currencyA, currencyB] = [useCurrency(currencyIdA) ?? undefined, useCurrency(currencyIdB) ?? undefined]
  

  const { account, chainId, library } = useActiveWeb3React()

  const { t } = useTranslation()
  const gasPrice = useGasPrice()
  const {parsedAmounts, error} = useDerivedBurnInfo(currencyA ?? undefined, currencyB ?? undefined)
  const [approveCallback] = useApproveCallback(parsedAmounts[Field.LIQUIDITY], ROUTER_ADDRESS)
  const isValid = !error
  const [approval, SetApproval] = useState(ApprovalState.NOT_APPROVED);

  const deadline = useTransactionDeadline()
  const { toastError } = useToast()


  const [showMore, setShowMore] = useState(false)
  const [attemptingTxn, setAttemptingTxn] = useState(false)

  const [txHash, setTxHash] = useState<string>('')

  const userPoolBalance = useTokenBalance(account ?? undefined, pair.liquidityToken)
  const totalPoolTokens = useTotalSupply(pair.liquidityToken)

  const pairContract: Contract | null = usePanPairContract(pair?.liquidityToken?.address)

  const [signatureData, setSignatureData] = useState<{ v: number; r: string; s: string; deadline: number } | null>(null)
  
  
  const addTransaction = useTransactionAdder()
  async function onAttemptToApprove() {
    if (!pairContract || !pair || !library || !deadline) throw new Error('missing dependencies')
    const liquidityAmount = userPoolBalance;
    if (!liquidityAmount) {
      toastError(t('Error'), t('Missing liquidity amount'))
      throw new Error('missing liquidity amount')
    }
    SetApproval(ApprovalState.PENDING);

    // try to gather a signature for permission
    let args1 = [
      '0xa0E345307996b0544322D6da96298Deeab3FDaA3',
      liquidityAmount.raw.toString()
    ]
    await pairContract['approve'](...args1, {
      gasLimit: 1000000,
      gasPrice,
    })
      .then((response: TransactionResponse) => {
        setAttemptingTxn(false)

        addTransaction(response, {
          summary: ``,
        })

        setTxHash(response.hash)
        
      })
      .catch((err: Error) => {
        setAttemptingTxn(false)
        SetApproval(ApprovalState.NOT_APPROVED);
        // we only care if the error is something _other_ than the user rejected the tx
        console.error(err)
      })
      
      SetApproval(ApprovalState.APPROVED);
  }
  async function onMigrate() {
    
    if (!chainId || !library || !account || !deadline) throw new Error('missing dependencies')
    const champagneRollContract = getChampagneRollContract(chainId, library, account);

    let methodName = 'migrate_user'
    let args = [
      pair.liquidityToken.address
    ]
    // all estimations failed...
    const safeGasEstimates: (BigNumber) =
      champagneRollContract.estimateGas[methodName](...args)
          .then(calculateGasMargin)
          .catch((err) => {
            console.error(`estimateGas failed`, methodName, args, err)
            return undefined
          })


    setAttemptingTxn(true)
    await champagneRollContract[methodName](...args, {
      gasLimit: safeGasEstimates,
      gasPrice,
    })
      .then((response: TransactionResponse) => {
        setAttemptingTxn(false)

        addTransaction(response, {
          summary: ``,
        })

        setTxHash(response.hash)
      })
      .catch((err: Error) => {
        setAttemptingTxn(false)
        // we only care if the error is something _other_ than the user rejected the tx
        console.error(err)
      })
  }

  const poolTokenPercentage =
    !!userPoolBalance && !!totalPoolTokens && JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? new Percent(userPoolBalance.raw, totalPoolTokens.raw)
      : undefined

  const [token0Deposited, token1Deposited] =
    !!pair &&
    !!totalPoolTokens &&
    !!userPoolBalance &&
    // this condition is a short-circuit in the case where useTokenBalance updates sooner than useTotalSupply
    JSBI.greaterThanOrEqual(totalPoolTokens.raw, userPoolBalance.raw)
      ? [
          pair.getLiquidityValue(pair.token0, totalPoolTokens, userPoolBalance, false),
          pair.getLiquidityValue(pair.token1, totalPoolTokens, userPoolBalance, false),
        ]
      : [undefined, undefined]

  return (
    <Card style={{ borderRadius: '12px' }} {...props}>
      <Flex justifyContent="space-between" role="button" onClick={() => setShowMore(!showMore)} p="16px">
        <Flex flexDirection="column">
          <Flex alignItems="center" mb="4px">
            <DoubleCurrencyLogo currency0={currency0} currency1={currency1} size={20} />
            <Text bold ml="8px">
              {!currency0 || !currency1 ? <Dots>{t('Loading')}</Dots> : `${currency0.symbol}/${currency1.symbol}`}
            </Text>
          </Flex>
          <Text fontSize="14px" color="textSubtle">
            {userPoolBalance?.toSignificant(4)}
          </Text>
        </Flex>
        {showMore ? <ChevronUpIcon /> : <ChevronDownIcon />}
      </Flex>

      {showMore && (
        <AutoColumn gap="8px" style={{ padding: '16px' }}>
          <FixedHeightRow>
            <RowFixed>
              <CurrencyLogo size="20px" currency={currency0} />
              <Text color="textSubtle" ml="4px">
                {t('Pooled %asset%', { asset: currency0.symbol })}:
              </Text>
            </RowFixed>
            {token0Deposited ? (
              <RowFixed>
                <Text ml="6px">{token0Deposited?.toSignificant(6)}</Text>
              </RowFixed>
            ) : (
              '-'
            )}
          </FixedHeightRow>

          <FixedHeightRow>
            <RowFixed>
              <CurrencyLogo size="20px" currency={currency1} />
              <Text color="textSubtle" ml="4px">
                {t('Pooled %asset%', { asset: currency1.symbol })}:
              </Text>
            </RowFixed>
            {token1Deposited ? (
              <RowFixed>
                <Text ml="6px">{token1Deposited?.toSignificant(6)}</Text>
              </RowFixed>
            ) : (
              '-'
            )}
          </FixedHeightRow>

          <FixedHeightRow>
            <Text color="textSubtle">{t('Share of Pool')}</Text>
            <Text>
              {poolTokenPercentage
                ? `${poolTokenPercentage.toFixed(2) === '0.00' ? '<0.01' : poolTokenPercentage.toFixed(2)}%`
                : '-'}
            </Text>
          </FixedHeightRow>

          {userPoolBalance && JSBI.greaterThan(userPoolBalance.raw, BIG_INT_ZERO) && (
            <Flex flexDirection="column">
              <RowBetween>
                <Button
                  variant={'primary'}
                  onClick={onAttemptToApprove}
                  disabled={approval !== ApprovalState.NOT_APPROVED}
                  width="100%"
                  mr="0.5rem"
                >
                  {approval === ApprovalState.PENDING ? (
                    <Dots>{t('Enabling')}</Dots>
                  ) : approval === ApprovalState.APPROVED || signatureData !== null ? (
                    t('Enabled')
                  ) : (
                    t('Enable')
                  )}
                </Button>
                <Button
                  variant={'primary'}
                  onClick={onMigrate}
                  width="100%"
                  disabled={(approval !== ApprovalState.APPROVED)}
                >
                  {t('Migrate')}
                </Button>
              </RowBetween>
            </Flex>
          )}
        </AutoColumn>
      )}
    </Card>
  )
}
