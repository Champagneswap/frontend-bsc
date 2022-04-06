import { useEffect } from 'react'
import { useChamBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const chamPriceBusd = useChamBusdPrice()
  useEffect(() => {
    const chamPriceBusdString = chamPriceBusd ? chamPriceBusd.toFixed(2) : ''
    document.title = `Champagne Swap - ${chamPriceBusdString}`
  }, [chamPriceBusd])
}
export default useGetDocumentTitlePrice
