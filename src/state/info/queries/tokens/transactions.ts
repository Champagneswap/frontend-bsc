import { gql } from 'graphql-request'
import { mapBurns, mapMints, mapSwaps } from 'state/info/queries/helpers'
import { BurnResponse, MintResponse, SwapResponse } from 'state/info/queries/types'
import { Transaction } from 'state/info/types'
import { infoClient } from 'utils/graphql'

/**
 * Data to display transaction table on Token page
 */
const TOKEN_TRANSACTIONS = gql`
  query tokenTransactions($address: Bytes!) {
    mintsAs0: mints(first: 1000, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      to
      amount0
      amount1
      amountUSD
    }
    mintsAs1: mints(first: 1000, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      to
      amount0
      amount1
      amountUSD
    }
    swapsAs0: swaps(first: 1000, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      from
      amount0In
      amount1In
      amount0Out
      amount1Out
      amountUSD
    }
    swapsAs1: swaps(first: 1000, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      from
      amount0In
      amount1In
      amount0Out
      amount1Out
      amountUSD
    }
    burnsAs0: burns(first: 1000, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      sender
      amount0
      amount1
      amountUSD
    }
    burnsAs1: burns(first: 10, orderBy: timestamp, orderDirection: desc) {
      id
      timestamp
      pair {
        token0 {
          id
          symbol
        }
        token1 {
          id
          symbol
        }
      }
      sender
      amount0
      amount1
      amountUSD
    }
  }
`

interface TransactionResults {
  mintsAs0: MintResponse[]
  mintsAs1: MintResponse[]
  swapsAs0: SwapResponse[]
  swapsAs1: SwapResponse[]
  burnsAs0: BurnResponse[]
  burnsAs1: BurnResponse[]
}

const fetchTokenTransactions = async (address: string): Promise<{ data?: Transaction[]; error: boolean }> => {
  try {
    const data = await infoClient.request<TransactionResults>(TOKEN_TRANSACTIONS, {
      address,
    })
    const mints0 = data.mintsAs0.filter((item:any)=>item.pair.token0.id===address).map(mapMints)
    // console.log("address", address)
    // console.log("filtered", data.mintsAs0.filter((item:any)=>item.pair.token0.id===address))
    const mints1 = data.mintsAs1.filter((item:any)=>item.pair.token1.id===address).map(mapMints)

    const burns0 = data.burnsAs0.filter((item:any)=>item.pair.token1.id===address).map(mapBurns)
    const burns1 = data.burnsAs1.filter((item:any)=>item.pair.token1.id===address).map(mapBurns)

    const swaps0 = data.swapsAs0.filter((item:any)=>item.pair.token1.id===address).map(mapSwaps)
    const swaps1 = data.swapsAs1.filter((item:any)=>item.pair.token1.id===address).map(mapSwaps)

    return { data: [...mints0, ...mints1, ...burns0, ...burns1, ...swaps0, ...swaps1], error: false }
  } catch (error) {
    console.error(`Failed to fetch transactions for token ${address}`, error)
    return {
      error: true,
    }
  }
}

export default fetchTokenTransactions
