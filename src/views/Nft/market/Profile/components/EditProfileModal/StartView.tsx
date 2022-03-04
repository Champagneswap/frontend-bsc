import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useWeb3React } from '@web3-react/core'
import { Button, Flex, Text, InjectedModalProps } from '@champagneswap/uikit'
import { formatBigNumber } from 'utils/formatBalance'
import { getChampagneProfileAddress } from 'utils/addressHelpers'
import { useCham } from 'hooks/useContract'
import { useGetChamBalance } from 'hooks/useTokenBalance'
import { useTranslation } from 'contexts/Localization'
import useGetProfileCosts from 'views/Nft/market/Profile/hooks/useGetProfileCosts'
import { FetchStatus } from 'config/constants/types'
import { useProfile } from 'state/profile/hooks'
import ProfileAvatarWithTeam from 'components/ProfileAvatarWithTeam'
import { UseEditProfileResponse } from './reducer'

interface StartPageProps extends InjectedModalProps {
  goToChange: UseEditProfileResponse['goToChange']
  goToRemove: UseEditProfileResponse['goToRemove']
  goToApprove: UseEditProfileResponse['goToApprove']
}

const DangerOutline = styled(Button).attrs({ variant: 'secondary' })`
  border-color: ${({ theme }) => theme.colors.failure};
  color: ${({ theme }) => theme.colors.failure};
  margin-bottom: 24px;

  &:hover:not(:disabled):not(.button--disabled):not(:active) {
    border-color: ${({ theme }) => theme.colors.failure};
    opacity: 0.8;
  }
`

const AvatarWrapper = styled.div`
  height: 64px;
  width: 64px;

  ${({ theme }) => theme.mediaQueries.sm} {
    height: 128px;
    width: 128px;
  }
`

const StartPage: React.FC<StartPageProps> = ({ goToApprove, goToChange, goToRemove, onDismiss }) => {
  const { t } = useTranslation()
  const { account } = useWeb3React()
  const cakeContract = useCham()
  const { profile } = useProfile()
  const { balance: chamBalance, fetchStatus } = useGetChamBalance()
  const {
    costs: { numberChamToUpdate, numberChamToReactivate },
    isLoading: isProfileCostsLoading,
  } = useGetProfileCosts()
  const [needsApproval, setNeedsApproval] = useState(null)
  const minimumChamRequired = profile.isActive ? numberChamToUpdate : numberChamToReactivate
  const hasMinimumChamRequired = fetchStatus === FetchStatus.Fetched && chamBalance.gte(minimumChamRequired)

  /**
   * Check if the wallet has the required CHAM allowance to change their profile pic or reactivate
   * If they don't, we send them to the approval screen first
   */
  useEffect(() => {
    const checkApprovalStatus = async () => {
      const response = await cakeContract.allowance(account, getChampagneProfileAddress())
      setNeedsApproval(response.lt(minimumChamRequired))
    }

    if (account && !isProfileCostsLoading) {
      checkApprovalStatus()
    }
  }, [account, minimumChamRequired, setNeedsApproval, cakeContract, isProfileCostsLoading])

  if (!profile) {
    return null
  }

  return (
    <Flex alignItems="center" justifyContent="center" flexDirection="column">
      <AvatarWrapper>
        <ProfileAvatarWithTeam profile={profile} />
      </AvatarWrapper>
      <Flex alignItems="center" style={{ height: '48px' }} justifyContent="center">
        <Text as="p" color="failure">
          {!isProfileCostsLoading &&
            !hasMinimumChamRequired &&
            t('%minimum% CHAM required to change profile pic', { minimum: formatBigNumber(minimumChamRequired) })}
        </Text>
      </Flex>
      {profile.isActive ? (
        <>
          <Button
            width="100%"
            mb="8px"
            onClick={needsApproval === true ? goToApprove : goToChange}
            disabled={isProfileCostsLoading || !hasMinimumChamRequired || needsApproval === null}
          >
            {t('Change Profile Pic')}
          </Button>
          <DangerOutline width="100%" onClick={goToRemove}>
            {t('Remove Profile Pic')}
          </DangerOutline>
        </>
      ) : (
        <Button
          width="100%"
          mb="8px"
          onClick={needsApproval === true ? goToApprove : goToChange}
          disabled={isProfileCostsLoading || !hasMinimumChamRequired || needsApproval === null}
        >
          {t('Reactivate Profile')}
        </Button>
      )}
      <Button variant="text" width="100%" onClick={onDismiss}>
        {t('Close Window')}
      </Button>
    </Flex>
  )
}

export default StartPage