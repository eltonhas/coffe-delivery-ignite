import styled from 'styled-components'

interface CardPayProps {
  isSelected?: boolean
}

export const CardPayContainer = styled.div<CardPayProps>`
  width: 11.125rem;
  height: 3.2rem;

  background: ${(props) => props.theme['base-button']};
  border-radius: 6px;

  display: flex;
  align-items: center;
  justify-content: center;

  gap: 0.75rem;

  font-size: 0.75rem;
  font-weight: 400;
  line-height: 160%;

  color: ${(props) => props.theme['base-text']};

  text-transform: uppercase;

  cursor: pointer;

  border: ${(props) =>
    props.isSelected ? `1px solid ${props.theme.purple}` : 'none'};

  &:hover {
    background: ${(props) => props.theme['base-hover']};
  }
`
