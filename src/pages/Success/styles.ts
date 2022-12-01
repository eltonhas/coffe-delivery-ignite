import styled from 'styled-components'

import { IconProps, ICON_COLOR } from '../../lib/styled'

export const SuccessContainer = styled.main`
  padding-top: 5rem;
`
export const HeaderContainer = styled.header`
  h1 {
    font-family: 'Baloo 2', cursive;
    font-size: 2rem;
    font-weight: 800;
    line-height: 130%;

    color: ${(props) => props.theme['yellow-dark']};
  }

  h2 {
    font-size: 1.25rem;
    line-height: 130%;

    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const SuccessContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding-top: 2.5rem;

  img {
    width: 30.75rem;
    height: 18.3rem;
  }
`

export const DeliveryInfo = styled.div`
  display: flex;
  flex-direction: column;

  gap: 2rem;

  width: 32.875rem;
  height: 16.875rem;

  padding: 2.5rem;

  border: 1px solid ${(props) => props.theme.purple};
  border-radius: 6px 36px;
`

export const InfoContainer = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  color: ${(props) => props.theme['base-text']};
`

export const Infos = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 700;
  }
`
export const IconInfo = styled.div<IconProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
`
