import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 251, 252) should always be at the top of the file.
   */
  {
    pid: 0,
    lpSymbol: 'CHAM',
    lpAddresses: {
      97: '0x4957c1c073557BFf33C01A7cA1436D0d2409d439',
      56: '0x4957c1c073557BFf33C01A7cA1436D0d2409d439',
    },
    token: serializedTokens.cristal,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 251,
    lpSymbol: 'CHAM-BNB LP',
    lpAddresses: {
      97: '0x5b4be66339c4effe4d643c1f5a384a5233f6f481',
      56: '0x5b4be66339c4effe4d643c1f5a384a5233f6f481',
    },
    token: serializedTokens.cham,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x4e9ca7990c4cbb96050f054c9ca7b41f48d799f8',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
