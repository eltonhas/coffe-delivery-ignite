import { useContext } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import { ChartContext } from '../../contexts/ChartContext'
import ilustration from '../../assets/Illustration.svg'
import {
  DeliveryInfo,
  HeaderContainer,
  IconInfo,
  InfoContainer,
  Infos,
  SuccessContainer,
  SuccessContent,
} from './styles'

export function Success() {
  const { payDeliveryInfos } = useContext(ChartContext)

  const payType =
    payDeliveryInfos.payType === 'credit_card'
      ? 'Cartão de Credito'
      : payDeliveryInfos.payType === 'debit_card'
      ? 'Cartão de Debito'
      : 'Dinheiro'
  return (
    <SuccessContainer>
      <HeaderContainer>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
      </HeaderContainer>
      <SuccessContent>
        <DeliveryInfo>
          <InfoContainer>
            <IconInfo iconColor="purple">
              <MapPin size={16} weight="fill" />
            </IconInfo>
            <Infos>
              <p>
                Entrega em{' '}
                <span>
                  {`${payDeliveryInfos.deliveryInfos.rua}, ${payDeliveryInfos.deliveryInfos.numero}, ${payDeliveryInfos.deliveryInfos.complemento}`}
                </span>
              </p>
              <p>{`${payDeliveryInfos.deliveryInfos.bairro}, ${payDeliveryInfos.deliveryInfos.cidade} - ${payDeliveryInfos.deliveryInfos.uf}`}</p>
            </Infos>
          </InfoContainer>
          <InfoContainer>
            <IconInfo iconColor="yellow">
              <Timer size={16} weight="fill" />
            </IconInfo>
            <Infos>
              Previsão de entrega <span>20 min - 30 min</span>
            </Infos>
          </InfoContainer>
          <InfoContainer>
            <IconInfo iconColor="yellowDark">
              <CurrencyDollar size={16} weight="fill" />
            </IconInfo>
            <Infos>
              Pagamento na entrega <span>{payType}</span>
            </Infos>
          </InfoContainer>
        </DeliveryInfo>
        <img src={ilustration} alt="Entregador de scooter roxa" />
      </SuccessContent>
    </SuccessContainer>
  )
}
