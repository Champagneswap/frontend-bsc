import { Address } from '../types'

export enum ChampagneCollectionKey {
  CHAMPAGNE = 'champagne',
  SQUAD = 'champagneSquad',
}

export type ChampagneCollection = {
  name: string
  description?: string
  slug: string
  address: Address
}

export type ChampagneCollections = {
  [key in ChampagneCollectionKey]: ChampagneCollection
}
