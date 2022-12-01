import styled from 'styled-components'
import { IconProps, ICON_COLOR } from '../../lib/styled'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  img {
    max-width: 29.75rem;
    height: 22.5rem;
  }
`

export const HomeBanner = styled.div`
  display: flex;
  flex-direction: row;

  padding-top: 5.75rem;
  padding-bottom: 5.75rem;
`
export const BannerLeft = styled.div``
export const TitleText = styled.div`
  width: 36.75rem;
  height: 12rem;

  h1 {
    color: ${(props) => props.theme['base-title']};
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 3rem;
    margin-bottom: 1rem;
    line-height: 3.9rem;
  }

  p {
    font-size: 1.25rem;
    line-height: 1.625rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`
export const InfoContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: space-between;

  margin-top: 4.125rem;

  p {
    line-height: 1.3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 1.25rem;
    gap: 0.85rem;
  }
`

export const IconInfo = styled.span<IconProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[ICON_COLOR[props.iconColor]]};
`

export const CoffeListContainer = styled.div`
  padding-top: 2rem;
`

export const BoxCoffeCard = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
  flex-wrap: wrap;
`

export const TitleCoffeListContainer = styled.p`
  font-family: 'Baloo 2', cursive;
  font-size: 2rem;
  font-weight: 800;
  line-height: 2.6rem;
  margin-bottom: 3.375rem;
`
