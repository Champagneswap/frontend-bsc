import React from 'react'
import { Text, TooltipText, useTooltip } from '@champagneswap/uikit'
import { useTranslation } from 'contexts/Localization'
import Balance from 'components/Balance'

interface RecentChamProfitBalanceProps {
  chamToDisplay: number
  dollarValueToDisplay: number
  dateStringToDisplay: string
}

const RecentChamProfitBalance: React.FC<RecentChamProfitBalanceProps> = ({
  chamToDisplay,
  dollarValueToDisplay,
  dateStringToDisplay,
}) => {
  const { t } = useTranslation()

  const { targetRef, tooltip, tooltipVisible } = useTooltip(
    <>
      <Balance fontSize="16px" value={chamToDisplay} decimals={3} bold unit=" CHAM" />
      <Balance fontSize="16px" value={dollarValueToDisplay} decimals={2} bold prefix="~$" />
      {t('Earned since your last action')}
      <Text>{dateStringToDisplay}</Text>
    </>,
    {
      placement: 'bottom-end',
    },
  )

  return (
    <>
      {tooltipVisible && tooltip}
      <TooltipText ref={targetRef} small>
        <Balance fontSize="14px" value={chamToDisplay} />
      </TooltipText>
    </>
  )
}

export default RecentChamProfitBalance
