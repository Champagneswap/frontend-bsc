const CHAMPAGNE_EXTENDED = 'https://tokens.champagneswap.com/champagneswap-extended.json'
const CHAMPAGNE_TOP100 = 'https://tokens.champagneswap.com/champagneswap-top-100.json'

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  CHAMPAGNE_TOP100,
  CHAMPAGNE_EXTENDED,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
