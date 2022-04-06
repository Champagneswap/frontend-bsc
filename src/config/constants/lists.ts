
const CHAMPAGNE_EXTENDED = 'https://tokens.champagneswap.com/champagneswap-extended.json'
const CHAMPAGNE_TOP100 = 'https://tokens.champagneswap.com/champagneswap-top-100.json'
const COINGECKO = 'https://tokens.pancakeswap.finance/coingecko.json'
const CMC = 'https://tokens.pancakeswap.finance/cmc.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

export const OFFICIAL_LISTS = [CHAMPAGNE_EXTENDED, CHAMPAGNE_TOP100]

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  CHAMPAGNE_TOP100,
  CHAMPAGNE_EXTENDED,
  COINGECKO,
  CMC,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
