import BigNumber from 'bignumber.js'
import { getChamVaultContract } from 'utils/contractHelpers'

const chamVaultContract = getChamVaultContract()

const fetchVaultUser = async (account: string) => {
  try {
    const userContractResponse = await chamVaultContract.userInfo(account)
    return {
      isLoading: false,
      userShares: new BigNumber(userContractResponse.shares.toString()).toJSON(),
      lastDepositedTime: userContractResponse.lastDepositedTime.toString(),
      lastUserActionTime: userContractResponse.lastUserActionTime.toString(),
      chamAtLastUserAction: new BigNumber(userContractResponse.chamAtLastUserAction.toString()).toJSON(),
    }
  } catch (error) {
    return {
      isLoading: true,
      userShares: null,
      lastDepositedTime: null,
      lastUserActionTime: null,
      chamAtLastUserAction: null,
    }
  }
}

export default fetchVaultUser
