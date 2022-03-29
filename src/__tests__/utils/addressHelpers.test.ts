import { getAddress } from 'utils/addressHelpers'

describe('getAddress', () => {
  const address = {
    56: '0xcB68625F85578dB189e1Dd3F1dF61D4375b2d84A',
    97: '0xcB68625F85578dB189e1Dd3F1dF61D4375b2d84A',
  }

  it(`get address for mainnet (chainId 56)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '56'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for testnet (chainId 97)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '97'
    const expected = address[97]
    expect(getAddress(address)).toEqual(expected)
  })
  it(`get address for any other network (chainId 31337)`, () => {
    process.env.NEXT_PUBLIC_CHAIN_ID = '31337'
    const expected = address[56]
    expect(getAddress(address)).toEqual(expected)
  })
})
