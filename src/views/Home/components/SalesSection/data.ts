import { TranslateFunction } from 'contexts/Localization/types'
import { SalesSectionProps } from '.'

export const swapSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Trade anything. No registration, no hassle.'),
  bodyText: t('Trade any token on Binance Smart Chain in seconds, just by connecting your wallet.'),
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: t('Trade Now'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.champagnswap.com/',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: t('BNB token') },
      { src: 'BTC', alt: t('BTC token') },
      { src: 'CHAM', alt: t('CHAM token') },
    ],
  },
})

export const earnSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('Earn passive income with crypto.'),
  bodyText: t('ChampagneSwap makes it easy to make your crypto work for you.'),
  reverse: true,
  primaryButton: {
    to: '/farms',
    text: t('Explore'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.champagneswap.com/products/yield-farming',
    text: t('Learn'),
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
                { src: 'BTC', alt: t('BTC token') },
                { src: 'CHAM', alt: t('CHAM token') },
     
    ],
  },
})

export const chamSectionData = (t: TranslateFunction): SalesSectionProps => ({
  headingText: t('CHAM is our grapes and it yields Champagne.'),
  bodyText: t(
    'CHAM token is at the heart of the ChampagneSwap ecosystem. Buy it, win it, farm it, spend it, stake it... yes, you can even vote with it!',
  ),
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0xcB68625F85578dB189e1Dd3F1dF61D4375b2d84A',
    text: t('Buy CHAM'),
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.champagneswap.com/tokenomics/cham',
    text: t('Learn'),
    external: true,
  },

  images: {
    path: '/images/home/cham/',
    attributes: [
    
      { src: 'coin', alt: t('CHAM token') },
    
    ],
  },
})
