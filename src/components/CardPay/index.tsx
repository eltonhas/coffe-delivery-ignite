import { Bank, CreditCard, Money } from 'phosphor-react'

import { CardPayContainer } from './styles'

interface CardPayPros {
  id: number
  payType: string
  label: string
  isSelected: boolean
  selectPayType: (payType: string) => void
}

export function CardPay({
  id,
  label,
  payType,
  isSelected,
  selectPayType,
}: CardPayPros) {
  const svg = [
    { label: <CreditCard size={16} /> },
    { label: <Bank size={16} /> },
    { label: <Money size={16} /> },
  ]

  function handleSelectPayType() {
    selectPayType(payType)
  }
  return (
    <CardPayContainer onClick={handleSelectPayType} isSelected={isSelected}>
      {svg[id].label} {label}
    </CardPayContainer>
  )
}
