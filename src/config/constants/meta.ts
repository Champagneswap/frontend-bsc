import { ContextApi } from 'contexts/Localization/types'
import { PageMeta } from './types'

export const DEFAULT_META: PageMeta = {
  title: 'ChampagneSwap',
  description:
    'The most popular AMM on BSC by user count! Earn CHAM through yield farming or win it in the Lottery, then stake it in Cristal Pools to earn more tokens! Initial Farm Offerings (new token launch model pioneered by ChampagneSwap), NFTs, and more, on a platform you can trust.',
  image: 'https://ChampagneSwap.com/images/hero.png',
}

export const getCustomMeta = (path: string, t: ContextApi['t']): PageMeta => {
  let basePath
  if (path.startsWith('/swap')) {
    basePath = '/swap'
  } else if (path.startsWith('/add')) {
    basePath = '/add'
  } else if (path.startsWith('/remove')) {
    basePath = '/remove'
  } else if (path.startsWith('/teams')) {
    basePath = '/teams'
  } else if (path.startsWith('/voting/proposal') && path !== '/voting/proposal/create') {
    basePath = '/voting/proposal'
  } else if (path.startsWith('/nfts/collections')) {
    basePath = '/nfts/collections'
  } else if (path.startsWith('/nfts/profile')) {
    basePath = '/nfts/profile'
  } else if (path.startsWith('/pancake-squad')) {
    basePath = '/pancake-squad'
  } else {
    basePath = path
  }

  switch (basePath) {
    case '/':
      return {
        title: `${t('Home')} | ${t('ChampagneSwap')}`,
      }
    case '/swap':
      return {
        title: `${t('Exchange')} | ${t('ChampagneSwap')}`,
      }
    case '/add':
      return {
        title: `${t('Add Liquidity')} | ${t('ChampagneSwap')}`,
      }
    case '/remove':
      return {
        title: `${t('Remove Liquidity')} | ${t('ChampagneSwap')}`,
      }
    case '/liquidity':
      return {
        title: `${t('Liquidity')} | ${t('ChampagneSwap')}`,
      }
    case '/find':
      return {
        title: `${t('Import Pool')} | ${t('ChampagneSwap')}`,
      }
    case '/competition':
      return {
        title: `${t('Trading Battle')} | ${t('ChampagneSwap')}`,
      }
    case '/prediction':
      return {
        title: `${t('Prediction')} | ${t('ChampagneSwap')}`,
      }
    case '/prediction/leaderboard':
      return {
        title: `${t('Leaderboard')} | ${t('ChampagneSwap')}`,
      }
    case '/farms':
      return {
        title: `${t('Farms')} | ${t('ChampagneSwap')}`,
      }
    case '/farms/auction':
      return {
        title: `${t('Farm Auctions')} | ${t('ChampagneSwap')}`,
      }
    case '/pools':
      return {
        title: `${t('Pools')} | ${t('ChampagneSwap')}`,
      }
    case '/lottery':
      return {
        title: `${t('Lottery')} | ${t('ChampagneSwap')}`,
      }
    case '/ifo':
      return {
        title: `${t('Initial Farm Offering')} | ${t('ChampagneSwap')}`,
      }
    case '/teams':
      return {
        title: `${t('Leaderboard')} | ${t('ChampagneSwap')}`,
      }
    case '/voting':
      return {
        title: `${t('Voting')} | ${t('ChampagneSwap')}`,
      }
    case '/voting/proposal':
      return {
        title: `${t('Proposals')} | ${t('ChampagneSwap')}`,
      }
    case '/voting/proposal/create':
      return {
        title: `${t('Make a Proposal')} | ${t('ChampagneSwap')}`,
      }
    case '/info':
      return {
        title: `${t('Overview')} | ${t('ChampagneSwap Info & Analytics')}`,
        description: 'View statistics for ChampagneSwap exchanges.',
      }
    case '/info/pools':
      return {
        title: `${t('Pools')} | ${t('ChampagneSwap Info & Analytics')}`,
        description: 'View statistics for ChampagneSwap exchanges.',
      }
    case '/info/tokens':
      return {
        title: `${t('Tokens')} | ${t('ChampagneSwap Info & Analytics')}`,
        description: 'View statistics for ChampagneSwap exchanges.',
      }
    case '/nfts':
      return {
        title: `${t('Overview')} | ${t('ChampagneSwap')}`,
      }
    case '/nfts/collections':
      return {
        title: `${t('Collections')} | ${t('ChampagneSwap')}`,
      }
    case '/nfts/activity':
      return {
        title: `${t('Activity')} | ${t('ChampagneSwap')}`,
      }
    case '/nfts/profile':
      return {
        title: `${t('Profile')} | ${t('ChampagneSwap')}`,
      }
    case '/pancake-squad':
      return {
        title: `${t('Champagne Makers')} | ${t('ChampagneSwap')}`,
      }
    default:
      return null
  }
}
