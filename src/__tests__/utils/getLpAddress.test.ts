import { Token, ChainId } from '@champagneswap/sdk'
import getLpAddress from 'utils/getLpAddress'

const CHAM_AS_STRING = '0x4957c1c073557BFf33C01A7cA1436D0d2409d439'
const BUSD_AS_STRING = '0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56'
const CHAM_AS_TOKEN = new Token(ChainId.MAINNET, CHAM_AS_STRING, 18)
const BUSD_AS_TOKEN = new Token(ChainId.MAINNET, BUSD_AS_STRING, 18)
const CHAM_BUSD_LP = '0x804678fa97d91B974ec2af3c843270886528a9E6'

describe('getLpAddress', () => {
  it('returns correct LP address, both tokens are strings', () => {
    expect(getLpAddress(CHAM_AS_STRING, BUSD_AS_STRING)).toBe(CHAM_BUSD_LP)
  })
  it('returns correct LP address, token1 is string, token 2 is Token', () => {
    expect(getLpAddress(CHAM_AS_STRING, BUSD_AS_TOKEN)).toBe(CHAM_BUSD_LP)
  })
  it('returns correct LP address, both tokens are Token', () => {
    expect(getLpAddress(CHAM_AS_TOKEN, BUSD_AS_TOKEN)).toBe(CHAM_BUSD_LP)
  })
  it('returns null if any address is invalid', () => {
    expect(getLpAddress('123', '456')).toBe(null)
    expect(getLpAddress(undefined, undefined)).toBe(null)
    expect(getLpAddress(CHAM_AS_STRING, undefined)).toBe(null)
    expect(getLpAddress(undefined, BUSD_AS_TOKEN)).toBe(null)
    expect(getLpAddress(CHAM_AS_STRING, '456')).toBe(null)
    expect(getLpAddress('123', BUSD_AS_TOKEN)).toBe(null)
  })
})
