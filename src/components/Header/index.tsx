import { ChangeEvent, useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { ChartContext } from '../../contexts/ChartContext'

import { MapPin, ShoppingCart } from 'phosphor-react'

import { HeaderContainer, SelectArea, CarStoreArea } from './styles'

import logoCoffeDelivary from '../../assets/coffe-delivary.svg'

import { capitalList } from '../../lib/stateList'

export function Header() {
  const { shoppingChart, capital, handleCapital } = useContext(ChartContext)

  function handleNewCapital(event: ChangeEvent<HTMLSelectElement>) {
    handleCapital(event.target.value)
  }
  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeDelivary} alt="Copo roxo escrito Coffe Delivery" />
      </NavLink>
      <div>
        <SelectArea>
          <MapPin size={22} weight="fill" />
          <select name="stateList" value={capital} onChange={handleNewCapital}>
            {capitalList.map((capital) => {
              return (
                <option key={capital.stateSigla} value={capital.stateSigla}>
                  {capital.capital}, {capital.stateSigla}
                </option>
              )
            })}
          </select>
        </SelectArea>
        <NavLink to="/checkout" title="Finalizar Pedido">
          <CarStoreArea disabled={shoppingChart.length === 0}>
            <ShoppingCart size={22} weight="fill" />
            {shoppingChart.length > 0 ? <div>{shoppingChart.length}</div> : ''}
          </CarStoreArea>
        </NavLink>
      </div>
    </HeaderContainer>
  )
}
