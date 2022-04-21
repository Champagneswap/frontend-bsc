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
    pid: 2,
    lpSymbol: 'CHAM-BNB LP',
    lpAddresses: {
      97: '0x57bc6f5f1c2985ec7058aff8c2a6336a1115a41b',
      56: '0x57bc6f5f1c2985ec7058aff8c2a6336a1115a41b',
    },
    token: serializedTokens.cham,
    quoteToken: serializedTokens.bnb,
  },
  {
    pid: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xfbc4bd5ad33783a67d2cde85c07ac5febe614a6c',
    },
    token: serializedTokens.wbnb,
    quoteToken: serializedTokens.busd,
  },
  {
    pid: 13,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x8a17fb9bd8ce31d53cb742b481b6ee26d41077ba',
    },
    token: serializedTokens.eth,
    quoteToken: serializedTokens.bnb,
  },
  {
    pid: 14,
    lpSymbol: 'USDT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x4e9ca7990c4cbb96050f054c9ca7b41f48d799f8',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.bnb,
  },
    {
    pid: 15,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x5cdae6d35973efda1f475f4349c8ebce0f217608',
    },
    token: serializedTokens.usdt,
    quoteToken: serializedTokens.busd,
  },
     {
    pid: 16,
    lpSymbol: 'CHAM-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0xb81d67333122b58a73da3ec36a0a42b3874b18b8',
    },
    token: serializedTokens.cham,
    quoteToken: serializedTokens.busd,
  },

   
  /**
   * V3 by order of release (some may be out of PID order due to multiplier boost)
   */
  
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
