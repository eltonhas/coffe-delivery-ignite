import styled from 'styled-components'

export const Container = styled.div`
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
