import { createSelector } from '@reduxjs/toolkit'
import { ChainId, Token } from '@champagneswap/sdk'
import { useSelector } from 'react-redux'
import { CHAIN_ID } from 'config/constants/networks'
import { AppState } from '../../index'
import { deserializeToken } from './helpers'

const selectUserTokens = ({ user: { tokens } }: AppState) => tokens

export const userAddedTokenSelector = createSelector(selectUserTokens, (serializedTokensMap) =>
  Object.values(serializedTokensMap?.[CHAIN_ID as unknown as ChainId] ?? {}).map(deserializeToken),
)
export default function useUserAddedTokens(): Token[] {
  return useSelector(userAddedTokenSelector)
}
