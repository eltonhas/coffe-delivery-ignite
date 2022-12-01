import styled from 'styled-components'

export const DeliveryFormContainer = styled.div`
  width: 35rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  input {
    width: 100%;
    height: 2.625rem;
    padding: 0.75rem;

    background: ${(props) => props.theme['base-input']};

    border: 1px solid ${(props) => props.theme['base-button']};
    border-radius: 4px;

    color: ${(props) => props.theme['base-label']};
    font-size: 0.875rem;
    line-height: 130%;

    &:focus {
      border: 1px solid ${(props) => props.theme['yellow-dark']};
    }
  }

  input#cep {
    max-width: 12.5rem;
  }

  fieldset {
    border: none;
    display: flex;
    gap: 0.75rem;

    input#numero {
      max-width: 12.5rem;
    }

    input#uf {
      max-width: 3.75rem;
    }

    input#complemento::placeholder {
      font-style: italic;
    }
  }
`
