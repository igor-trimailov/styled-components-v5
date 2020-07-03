import styled, { css } from 'styled-components'

const Button = styled.button`
  color: white;
  /* based on a property passed down, generate different styles */
  background: ${({ secondary }) => (secondary ? 'black' : '#f8049c')};
  font-weight: bold;
  padding: 8px;
  border-radius: 4px;
  box-shadow: none;
  font-size: 1em;
  border: none;
  width: 100%;
  display: block;
  white-space: none;

  /* similar to sass, a way to target pseudo classes */
  &:disabled {
    background: #eee;
    color: #666;
  }

  /* one of the way to describe variants of the button */
  /* VARIANTS: */
  ${({ large }) =>
    large
      ? css`
          padding: 10px;
          font-size: 1.5em;
        `
      : null}
`

export { Button }
