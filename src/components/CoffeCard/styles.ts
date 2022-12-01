import styled from 'styled-components'

export const BaseCard = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  padding: 1.25rem;
  margin-bottom: 2.5rem;

  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme['base-card']};

  border-radius: 6px 36px;
`
export const ImageBox = styled.div`
  position: relative;
  top: -3rem;

  height: 7rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    height: 7.5rem;
    width: 7.5rem;

    margin-bottom: 0.75rem;
  }

  div {
    display: flex;
    gap: 0.25rem;
  }

  p {
    background: ${(props) => props.theme['yellow-light']};
    border-radius: 100px;

    width: 5rem;
    height: 1.3rem;

    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;

    padding: 0.25rem 0.5rem;

    font-size: 0.625rem;
    font-weight: 700;
    line-height: 0.8rem;

    color: ${(props) => props.theme['yellow-dark']};
    text-transform: uppercase;
  }
`
export const InfoBox = styled.div`
  padding-bottom: 2rem;
  h3 {
    font-family: 'Baloo 2', cursive;
    font-size: 1.2rem;
    font-weight: 700;

    color: ${(props) => props.theme['base-subtitle']};

    padding-bottom: 0.5rem;
  }

  p {
    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
  }
`
export const BoxPrice = styled.div`
  display: flex;
  align-items: center;

  color: ${(props) => props.theme['base-text']};

  gap: 1.4rem;
`

export const PriceLeft = styled.div`
  font-size: 0.875rem;
  line-height: 130%;
  span {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
    font-weight: 800;
  }
`
export const PriceRight = styled.div`
  display: flex;
  flex-direction: row;

  gap: 0.5rem;

  div {
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 4.5rem;
    height: 2.375rem;

    background: ${(props) => props.theme['base-button']};
    border-radius: 6px;
    border: none;

    padding: 0.5rem;

    svg {
      color: ${(props) => props.theme['purple-dark']};

      cursor: pointer;

      &:hover {
        color: ${(props) => props.theme.purple};
      }
    }
  }
`

export const ShoppingButton = styled.button`
  width: 2.375rem;
  height: 2.375rem;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme.white};
  border: none;
  border-radius: 6px;

  cursor: pointer;

  transform: 0.5;

  &:hover {
    background: ${(props) => props.theme.purple};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
