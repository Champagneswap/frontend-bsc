import { ChampagneCollectionKey } from 'config/constants/nftsCollections/types'
import champagneCollections from 'config/constants/nftsCollections'
import { getAddress } from 'utils/addressHelpers'

export const nftsBaseUrl = '/nfts'
export const champagneBunniesAddress = getAddress(champagneCollections[ChampagneCollectionKey.CHAMPAGNE].address)
export const champagneSquadAddress = getAddress(champagneCollections[ChampagneCollectionKey.SQUAD].address)
