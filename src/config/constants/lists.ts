<<<<<<< HEAD
const PANCHAM_EXTENDED = 'https://tokens.champagneswap.com/champagneswap-extended.json'
const PANCHAM_TOP100 = 'https://tokens.champagneswap.com/champagneswap-default.json'
=======
const CHAMPAGNE_EXTENDED = 'https://tokens.champagneswap.com/champagneswap-extended.json'
const CHAMPAGNE_TOP100 = 'https://tokens.champagneswap.com/champagneswap-top-100.json'
>>>>>>> 73f123bb79c7b50769db848fb6844de79250c571

export const UNSUPPORTED_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = [
  CHAMPAGNE_TOP100,
  CHAMPAGNE_EXTENDED,
  ...UNSUPPORTED_LIST_URLS, // need to load unsupported tokens as well
]

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []
