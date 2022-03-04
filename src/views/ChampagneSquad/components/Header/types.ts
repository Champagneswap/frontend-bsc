import { EventInfos, UserInfos, UserStatusEnum } from 'views/ChampagneSquad/types'

export type ChampagneSquadHeaderType = {
  account: string
  isLoading: boolean
  eventInfos?: EventInfos
  userInfos?: UserInfos
  userStatus: UserStatusEnum
}

export enum ButtonsEnum {
  ACTIVATE,
  BUY,
  MINT,
  END,
  NONE,
}
