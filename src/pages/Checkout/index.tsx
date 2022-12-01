import { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import * as zod from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  ChartContext,
  PayDeliveryInfosProps,
} from '../../contexts/ChartContext'

import { BoxCoffe } from './components/BoxCoffe'
import { DeliveryForm } from './components/DeliveryForm'

import { PayList } from '../../lib/payList'

import { CurrencyDollar, MapPinLine } from 'phosphor-react'

import {
  ButtonConfirm,
  ChartInfos,
  ChartResume,
  CheckoutContainer,
  DeliveryInfos,
  DeliveryPayInfos,
  InfoResume,
  ItemsSelected,
  PayInfos,
  PayOptions,
  ShoppingChart,
  ShoppingInfos,
  SubTitle,
  Title,
  TitleBox,
  TitleContainer,
} from './styles'
import { CardPay } from '../../components/CardPay'

const deliveryInfoValidationSchema = zod.object({
  cep: zod.string().length(8, { message: 'O CEP precisa ter 8 números' }),
  rua: zod.string(),
  numero: zod.string(),
  complemento: zod.string().optional(),
  bairro: zod.string(),
  cidade: zod.string(),
  uf: zod.string(),
})

export type deliveryInfo = zod.infer<typeof deliveryInfoValidationSchema>

export function Checkout() {
  const navigate = useNavigate()
  const { shoppingChart, capital, addPayDeliveryInfos } =
    useContext(ChartContext)

  const deliveryInfoForm = useForm<deliveryInfo>({
    resolver: zodResolver(deliveryInfoValidationSchema),
    defaultValues: {
      uf: capital,
    },
  })

  const { handleSubmit } = deliveryInfoForm

  const [totalCoffe, setTotalCoffe] = useState(0)
  const [deliveryPrice, setDeliveryPrice] = useState(10)
  const [totalChart, setTotalChart] = useState(10)

  const [payTypeSelect, setPayTypeSelect] = useState('')

  useEffect(() => {
    let total = 0
    shoppingChart.map((coffe) => {
      const coffePrice = coffe.price * coffe.qtdCoffe

      return (total += coffePrice)
    })

    setTotalCoffe(total)
  }, [shoppingChart])

  useEffect(() => {
    const total = totalCoffe + deliveryPrice

    setTotalChart(total)
  }, [totalCoffe, deliveryPrice])

  useEffect(() => {
    if (shoppingChart.length === 0) return navigate('/')
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [shoppingChart])

  function selectPayType(payType: string) {
    setPayTypeSelect(payType)
  }

  function handleInfos(data: deliveryInfo) {
    if (payTypeSelect === '') return alert('Selecione uma forma de pagamento')

    const infos: PayDeliveryInfosProps = {
      deliveryInfos: data,
      payType: payTypeSelect,
    }

    addPayDeliveryInfos(infos)
  }

  return (
    <CheckoutContainer onSubmit={handleSubmit(handleInfos)}>
      <DeliveryPayInfos>
        <TitleContainer>Complete seu pedido</TitleContainer>
        <DeliveryInfos>
          <TitleBox iconColor="yellowDark">
            <MapPinLine size={22} />
            <div>
              <Title>Endereço de Entrega</Title>
              <SubTitle>
                Informe o endereço onde deseja receber seu pedido.
              </SubTitle>
            </div>
          </TitleBox>
          <FormProvider {...deliveryInfoForm}>
            <DeliveryForm />
          </FormProvider>
        </DeliveryInfos>
        <PayInfos>
          <TitleBox iconColor="purple">
            <CurrencyDollar size={22} />
            <div>
              <Title>Pagamento</Title>
              <SubTitle>
                O pagamento é feito na entrega. Escolha a forma que deseja pagar
              </SubTitle>
            </div>
          </TitleBox>
          <PayOptions>
            {PayList.map((item) => (
              <CardPay
                key={item.id}
                id={item.id}
                payType={item.payType}
                label={item.label}
                selectPayType={selectPayType}
                isSelected={payTypeSelect === item.payType}
              />
            ))}
          </PayOptions>
        </PayInfos>
      </DeliveryPayInfos>
      <ShoppingChart>
        <TitleContainer>Cafés selecionados</TitleContainer>
        <ChartInfos>
          <ItemsSelected>
            {shoppingChart.map((coffe) => (
              <BoxCoffe
                key={coffe.id}
                id={coffe.id}
                name={coffe.name}
                image={coffe.image}
                price={coffe.price}
                qtdCoffe={coffe.qtdCoffe}
              />
            ))}
          </ItemsSelected>
          <InfoResume>
            <ShoppingInfos>
              Total de itens <span>R$ {totalCoffe.toFixed(2)}</span>
            </ShoppingInfos>
            <ShoppingInfos>
              Entrega <span>R$ {deliveryPrice.toFixed(2)}</span>
            </ShoppingInfos>
            <ChartResume>
              Total de itens <span>R$ {totalChart.toFixed(2)}</span>
            </ChartResume>
          </InfoResume>
          <ButtonConfirm type="submit">Confirmar Pedido</ButtonConfirm>
        </ChartInfos>
      </ShoppingChart>
    </CheckoutContainer>
  )
}
