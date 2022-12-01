import styled from 'styled-components'

export const DefaultLayoutContainer = styled.main`
  max-width: 90rem;
  height: 100vh;

  padding: 0 10rem 0 10rem;

  background: ${(props) => props.theme.background};

  display: flex;
  flex-direction: column;
`
