import React from 'react'
import styled from 'styled-components'
import { Text, Flex, Button, ArrowForwardIcon, Heading, useMatchBreakpoints } from '@champagneswap/uikit'
import { NextLinkFromReactRouter } from 'components/NextLink'
import { useTranslation } from 'contexts/Localization'

const StyledSubheading = styled(Heading)`
 color: #ffffff;
  background: -webkit-linear-gradient(#ffffff 100%);
  font-size: 24px;
 background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 6px transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
 
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  ${({ theme }) => theme.mediaQueries.xs} {
    font-size: 20px;
  }
  ${({ theme }) => theme.mediaQueries.sm} {
    -webkit-text-stroke: unset;
  }
  margin-bottom: 8px;
`

const StyledHeading = styled(Heading)`
  color: #ffffff;
  background: -webkit-linear-gradient(#ffffff 100%);
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-stroke: 6px transparent;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`

const Wrapper = styled.div`
  border-radius: 32px;
  width: 100%;
  background-image: linear-gradient(#7645D9, #0db0f7);
  max-height: max-content;
  overflow: hidden;
  min-height: 162px;
`

const Inner = styled(Flex)`
  position: relative;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const RightWrapper = styled(Flex)`
  position: relative;
  flex: 1.5;
  justify-content: flex-end;
  gap: 16px;
  align-items: center;
  flex-wrap: wrap;
  padding-top: 32px;
  padding-right: 16px;
  padding-left: 16px;
  padding-bottom: 78px;
  z-index: 1;

  ${({ theme }) => theme.mediaQueries.lg} {
    justify-content: space-between;
    padding-top: 0;
    padding-bottom: 0;
    padding-left: 0;
    padding-right: 44px;
  }
`

const ImageWrapper = styled.div`
  position: absolute;
  width: 249.54px;
  height: 183.29px;
  left: 0px;
  bottom: 0px;

  ${({ theme }) => theme.mediaQueries.lg} {
    flex: 1;
    position: relative;
    width: 475px;
    height: 100%;
    transform: none;
  }
`

const CompetitionBanner = () => {
  const { t } = useTranslation()
  const { isDesktop } = useMatchBreakpoints()

  return (
    <Wrapper>
      <Inner>
        <ImageWrapper>
          <img
            src={isDesktop ? '/images/competition/banner.png' : '/images/competition/banner_sm.png'}
            alt="Migrate Liqudity bunny"
          />
        </ImageWrapper>
        <RightWrapper>
          <Flex flexDirection="column" justifyContent="center">
            <StyledSubheading>{t('Migrate your PancakeSwap Liqudity in one click (limited time)')}</StyledSubheading>
            <StyledHeading mb={0} scale="xl">
              {t('Earn 10X Champagne Tokens!')}
            </StyledHeading>
          </Flex>
          <NextLinkFromReactRouter to="/migration">
            <Button>
              <Text color="invertedContrast" bold fontSize="16px" mr="4px">
                {t('Migrate Now')}
              </Text>
              <ArrowForwardIcon color="invertedContrast" />
            </Button>
          </NextLinkFromReactRouter>
        </RightWrapper>
      </Inner>
    </Wrapper>
  )
}

export default CompetitionBanner
