import { createContext, ReactNode, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { deliveryInfo } from '../pages/Checkout'

export interface CoffeInfo {
  id: number
  name: string
  price: number
  image: string
  qtdCoffe: number
}

export interface PayDeliveryInfosProps {
  deliveryInfos: deliveryInfo
  payType: string
}

interface ChartContextType {
  shoppingChart: CoffeInfo[]
  capital: string
  payDeliveryInfos: PayDeliveryInfosProps
  addNewItemShoppingChart: (coffe: CoffeInfo) => void
  changeItemShoppingChart: (coffe: CoffeInfo) => void
  removeItemShoppingChart: (id: number) => void
  handleCapital: (data: string) => void
  addPayDeliveryInfos: (infos: PayDeliveryInfosProps) => void
}

interface ChartContextProviderProps {
  children: ReactNode
}

export const ChartContext = createContext({} as ChartContextType)

export function ChartContextProvider({ children }: ChartContextProviderProps) {
  const navigate = useNavigate()
  const [shoppingChart, setShoppingChart] = useState<CoffeInfo[]>([])

  const [capital, setCapital] = useState('SE')

  const [payDeliveryInfos, setPayDeliveryInfos] =
    useState<PayDeliveryInfosProps>({
      deliveryInfos: {
        bairro: '',
        cep: '',
        cidade: '',
        numero: '',
        rua: '',
        uf: '',
      },
      payType: '',
    })

  function handleCapital(data: string) {
    setCapital(data)
  }

  function addNewItemShoppingChart(coffe: CoffeInfo) {
    const data = shoppingChart.filter((item) => item.id !== coffe.id)
    if (data) return setShoppingChart([...data, coffe])

    setShoppingChart((state) => [...state, coffe])
  }

  function changeItemShoppingChart(coffe: CoffeInfo) {
    if (coffe.qtdCoffe === 0) {
      const data = shoppingChart.filter((item) => item.id !== coffe.id)
      return setShoppingChart(data)
    }

    const data = shoppingChart.filter((item) => item.id !== coffe.id)
    if (data) return setShoppingChart([...data, coffe])
  }

  function removeItemShoppingChart(id: number) {
    const data = shoppingChart.filter((item) => item.id !== id)
    if (data.length !== 0) return setShoppingChart([...data])

    setShoppingChart([])
  }

  function addPayDeliveryInfos(infos: PayDeliveryInfosProps) {
    setPayDeliveryInfos(infos)
    setShoppingChart([])
    navigate('/success')
  }

  return (
    <ChartContext.Provider
      value={{
        shoppingChart,
        capital,
        payDeliveryInfos,
        addNewItemShoppingChart,
        changeItemShoppingChart,
        removeItemShoppingChart,
        handleCapital,
        addPayDeliveryInfos,
      }}
    >
      {children}
    </ChartContext.Provider>
  )
}
