import styled from 'styled-components'
import { IconProps, ICON_COLOR } from '../../lib/styled'

export const CheckoutContainer = styled.form`
  display: flex;
  justify-content: flex-start;

  gap: 2rem;

  padding-top: 2.5rem;
`
export const TitleContainer = styled.p`
  font-family: 'Baloo 2', cursive;
  font-size: 1.125rem;
  font-weight: 700;
  line-height: 130%;

  color: ${(props) => props.theme['base-title']};

  padding-bottom: 1rem;
`
export const DeliveryPayInfos = styled.div`
  width: 40rem;
  height: 37rem;
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`
export const DeliveryInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2.5rem;
  gap: 2rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`
export const TitleBox = styled.div<IconProps>`
  display: flex;
  gap: 0.25rem;

  svg {
    color: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
  }
`
export const Title = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  line-height: 130%;

  font-weight: 400;
`
export const SubTitle = styled.p`
  color: ${(props) => props.theme['base-text']};
  line-height: 130%;

  font-size: 0.875rem;
  font-weight: 400;
`

export const PayInfos = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  padding: 2.5rem;
  gap: 2rem;

  background: ${(props) => props.theme['base-card']};
  border-radius: 6px;
`

export const PayOptions = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const ShoppingChart = styled.div`
  width: 28rem;
  height: 31.125rem;
  display: flex;
  flex-direction: column;

  gap: 0.75rem;
`
export const ChartInfos = styled.div`
  background: ${(props) => props.theme['base-card']};
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  padding: 2.5rem;

  border-radius: 6px 44px;
`
export const ItemsSelected = styled.div``

export const InfoResume = styled.div`
  padding-top: 1.5rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`
export const ShoppingInfos = styled.p`
  color: ${(props) => props.theme['base-text']};
  font-size: 0.875rem;
  display: flex;
  justify-content: space-between;

  span {
    font-size: 1rem;
  }
`
export const ChartResume = styled.p`
  color: ${(props) => props.theme['base-subtitle']};
  font-size: 1.25rem;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
`

export const ButtonConfirm = styled.button`
  width: 100%;
  height: 2.875rem;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  font-size: 0.875rem;
  font-weight: 700;

  text-transform: uppercase;

  border-radius: 6px;

  border: none;

  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`
