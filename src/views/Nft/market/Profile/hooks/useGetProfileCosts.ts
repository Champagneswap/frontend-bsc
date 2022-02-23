import { useEffect, useState } from 'react'
import { BigNumber } from '@ethersproject/bignumber'
import { useTranslation } from 'contexts/Localization'
import { multicallv2 } from 'utils/multicall'
import profileABI from 'config/abi/champagneProfile.json'
import { getChampagneProfileAddress } from 'utils/addressHelpers'
import useToast from 'hooks/useToast'

const useGetProfileCosts = () => {
  const { t } = useTranslation()
  const [isLoading, setIsLoading] = useState(true)
  const [costs, setCosts] = useState({
    numberChamToReactivate: BigNumber.from(0),
    numberChamToRegister: BigNumber.from(0),
    numberChamToUpdate: BigNumber.from(0),
  })
  const { toastError } = useToast()

  useEffect(() => {
    const fetchCosts = async () => {
      try {
        const calls = ['numberChamToReactivate', 'numberChamToRegister', 'numberChamToUpdate'].map((method) => ({
          address: getChampagneProfileAddress(),
          name: method,
        }))
        const [[numberChamToReactivate], [numberChamToRegister], [numberChamToUpdate]] = await multicallv2<
          [[BigNumber], [BigNumber], [BigNumber]]
        >(profileABI, calls)

        setCosts({
          numberChamToReactivate,
          numberChamToRegister,
          numberChamToUpdate,
        })
        setIsLoading(false)
      } catch (error) {
        toastError(t('Error'), t('Could not retrieve CHAM costs for profile'))
      }
    }

    fetchCosts()
  }, [setCosts, toastError, t])

  return { costs, isLoading }
}

export default useGetProfileCosts
