import { useContext, useEffect, useState } from 'react'
import { ShoppingCart, Minus, Plus } from 'phosphor-react'
import {
  BaseCard,
  BoxPrice,
  ImageBox,
  InfoBox,
  PriceLeft,
  PriceRight,
  ShoppingButton,
} from './styles'

import { CoffeInfo, ChartContext } from '../../contexts/ChartContext'
import { IncrementDecrement } from '../IncrementDecrement'

interface CoffeCardProps {
  id: number
  name: string
  description: string
  price: number
  classification: string[]
  image: string
}

export function CoffeCard({
  id,
  name,
  description,
  price,
  classification,
  image,
}: CoffeCardProps) {
  const [coffeQtd, setCoffeQtd] = useState(0)
  const { shoppingChart, addNewItemShoppingChart } = useContext(ChartContext)

  function incrementQtd(symbol: string) {
    if (symbol === '+') {
      return setCoffeQtd((state) => state + 1)
    }
    if (symbol === '-') {
      return coffeQtd === 0 ? coffeQtd : setCoffeQtd((state) => state - 1)
    }
  }

  function handleAddNewItemShoppingChart() {
    if (coffeQtd === 0) {
      return alert('Item não adicionado, coloque pelo menos 1 café.')
    }
    const data = {
      id,
      name,
      price,
      image,
      qtdCoffe: coffeQtd,
    }

    addNewItemShoppingChart(data)
  }

  useEffect(() => {
    if (shoppingChart.length !== 0) {
      const coffe = shoppingChart.find((item) => item.id === id)

      if (coffe) setCoffeQtd(coffe.qtdCoffe)
    }
  }, [id, shoppingChart])

  return (
    <BaseCard>
      <ImageBox>
        <img src={image} alt="xícara com café americano" />
        <div>
          {classification.map((item) => (
            <p key={item}>{item}</p>
          ))}
        </div>
      </ImageBox>
      <InfoBox>
        <h3>{name}</h3>
        <p>{description}</p>
      </InfoBox>
      <BoxPrice>
        <PriceLeft>
          <p>
            R$<span> {price}</span>
          </p>
        </PriceLeft>
        <PriceRight>
          <IncrementDecrement qtd={coffeQtd} handleIncrement={incrementQtd} />
          <ShoppingButton
            onClick={handleAddNewItemShoppingChart}
            disabled={coffeQtd === 0}
          >
            <ShoppingCart size={16} weight="fill" />
          </ShoppingButton>
        </PriceRight>
      </BoxPrice>
    </BaseCard>
  )
}
