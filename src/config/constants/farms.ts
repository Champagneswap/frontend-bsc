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
      97: '0x57bc6f5f1c2985ec7058aff8c2a6336a1115a41b',
      56: '0x57bc6f5f1c2985ec7058aff8c2a6336a1115a41b',
    },
    token: serializedTokens.cham,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 252,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xfbc4bd5ad33783a67d2cde85c07ac5febe614a6c',
    },
    token: serializedTokens.busd,
    quoteToken: serializedTokens.wbnb,
  },
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
