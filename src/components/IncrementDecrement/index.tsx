import { Minus, Plus } from 'phosphor-react'
import { Container } from './styles'

interface IncrementDecrementProps {
  qtd: number
  handleIncrement: (symbol: string) => void
}

export function IncrementDecrement({
  qtd,
  handleIncrement,
}: IncrementDecrementProps) {
  return (
    <Container>
      <Minus size={16} onClick={() => handleIncrement('-')} />
      <span>{qtd}</span>
      <Plus size={16} onClick={() => handleIncrement('+')} />
    </Container>
  )
}
