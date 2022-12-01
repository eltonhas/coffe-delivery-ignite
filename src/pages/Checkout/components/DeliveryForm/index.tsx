import { ChangeEvent, useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { ChartContext } from '../../../../contexts/ChartContext'
import { DeliveryFormContainer } from './styles'

export function DeliveryForm() {
  const { capital, handleCapital } = useContext(ChartContext)
  const { register } = useFormContext()

  function handleNewCapital(event: ChangeEvent<HTMLInputElement>) {
    handleCapital(event.target.value)
  }

  return (
    <DeliveryFormContainer>
      <input type="text" id="cep" placeholder="CEP" {...register('cep')} />
      <input type="text" id="rua" placeholder="Rua" {...register('rua')} />
      <fieldset>
        <input
          type="text"
          id="numero"
          placeholder="Número"
          {...register('numero')}
        />
        <input
          type="text"
          id="complemento"
          placeholder="Complemento"
          {...register('complemento')}
        />
      </fieldset>
      <fieldset>
        <input
          type="text"
          id="bairro"
          placeholder="Bairro"
          {...register('bairro')}
        />
        <input
          type="text"
          id="cidade"
          placeholder="Cidade"
          {...register('cidade')}
        />
        <input
          type="text"
          id="uf"
          placeholder="UF"
          value={capital}
          {...register('uf')}
        />
      </fieldset>
    </DeliveryFormContainer>
  )
}
