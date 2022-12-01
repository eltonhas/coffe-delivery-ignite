import styled from 'styled-components'

export const BoxItem = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid ${(props) => props.theme['base-button']};

  &:nth-child(n + 2) {
    padding-top: 1.5rem;
  }

  img {
    width: 4rem;
    height: 4rem;
    padding-right: 1.25rem;
  }
`
export const CoffeInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  height: 3.8rem;

  gap: 0.25rem;

  width: 10.7rem;
  color: ${(props) => props.theme['base-title']};

  div {
    display: flex;

    gap: 0.25rem;

    button {
      width: 5.7rem;
      height: 2rem;

      padding: 0 0.25rem;

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.25rem;

      background: ${(props) => props.theme['base-button']};
      color: ${(props) => props.theme['base-text']};
      border: none;
      border-radius: 6px;

      cursor: pointer;

      transform: 0.5;

      svg {
        color: ${(props) => props.theme.purple};
      }

      &:hover {
        background: ${(props) => props.theme['base-hover']};
      }
    }
  }
`
export const AddSubItem = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 4.5rem;
  height: 2rem;

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
`
export const Price = styled.p`
  display: flex;
  text-align: right;
  align-items: center;

  font-weight: 700;
  font-size: 0.75rem;
  line-height: 130%;
`
