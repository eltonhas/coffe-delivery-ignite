import styled from 'styled-components'

export const HeaderContainer = styled.main`
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 2rem 0;

  div {
    display: flex;
    align-items: center;

    gap: 0.875rem;
  }
`
export const SelectArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  gap: 0.25rem;

  width: 9rem;
  height: 2.35rem;

  background: ${(props) => props.theme['purple-light']};

  border-radius: 6px;

  svg {
    color: ${(props) => props.theme['purple-dark']};
  }

  select {
    border: none;
    width: 6rem;
    background: transparent;

    font-size: 0.875rem;
    line-height: 1.13rem;

    color: ${(props) => props.theme['purple-dark']};

    -webkit-appearance: none;
    -moz-appearance: none;
  }
`

interface CarStoreAreaProps {
  disabled: boolean
}

export const CarStoreArea = styled.div<CarStoreAreaProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.35rem;
  height: 2.35rem;

  background: ${(props) => props.theme['yellow-light']};

  border-radius: 6px;

  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  svg {
    color: ${(props) => props.theme['yellow-dark']};
  }

  div {
    position: absolute;
    top: 1.5rem;
    right: 9.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 1.25rem;
    height: 1.25rem;

    font-size: 0.75rem;

    color: ${(props) => props.theme.white};
    background: ${(props) => props.theme['yellow-dark']};

    border-radius: 50%;
  }
`
