import { useContext, useState } from 'react'
import { Trash } from 'phosphor-react'

import { BoxItem, CoffeInfo, Price } from './styles'

import { IncrementDecrement } from '../../../../components/IncrementDecrement'
import { ChartContext } from '../../../../contexts/ChartContext'

interface BoxCoffeProps {
  id: number
  name: string
  image: string
  price: number
  qtdCoffe: number
}

export function BoxCoffe({ id, name, image, price, qtdCoffe }: BoxCoffeProps) {
  const { changeItemShoppingChart, removeItemShoppingChart } =
    useContext(ChartContext)

  function incrementQtd(symbol: string) {
    let newQtd = 0
    if (symbol === '+') {
      newQtd = qtdCoffe + 1
    }
    if (symbol === '-') {
      newQtd = qtdCoffe === 0 ? qtdCoffe : qtdCoffe - 1
    }

    const data = {
      id,
      name,
      image,
      price,
      qtdCoffe: newQtd,
    }

    changeItemShoppingChart(data)
  }
  return (
    <BoxItem>
      <img src={image} alt="xícara de café" />
      <CoffeInfo>
        <p>{name}</p>
        <div>
          <IncrementDecrement qtd={qtdCoffe} handleIncrement={incrementQtd} />
          <button onClick={() => removeItemShoppingChart(id)}>
            <Trash size={16} />
            Remover
          </button>
        </div>
      </CoffeInfo>
      <Price>R$ {(qtdCoffe * price).toFixed(2)}</Price>
    </BoxItem>
  )
}
