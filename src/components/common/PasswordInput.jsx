import React, { useState } from 'react'
import styled from 'styled-components'

import { Input } from './Input'

const PasswordInputWrapper = styled.div`
  display: flex;
  ~ div {
    margin-bottom: 8px;
  }
`

const ToggleButton = styled.div`
  height: 40px;
  border: 1px solid #ccc;
  box-sizing: border-box;
  font-size: 0.9em;
  font-weight: bold;
  display: flex;
  padding: 8px;
  border-left: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: white;
  cursor: pointer;
  user-select: none;
  color: black;
`

// .attrs(() => ({})) is a way to add attributes! :)
const PasswordInputStyled = styled(Input).attrs(() => ({
  type: 'password',
  placeholder: 'Password',
}))`
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

export function PasswordInput(props) {
  const [showPassword, setShowPassword] = useState(true)

  const handleToggleShow = () => {
    setShowPassword(!showPassword)
  }

  return (
    <>
      <PasswordInputWrapper>
        <PasswordInputStyled {...props} />
        <ToggleButton onClick={handleToggleShow}>
          {showPassword ? 'Hide' : 'Show'}
        </ToggleButton>
      </PasswordInputWrapper>
      <div>{showPassword ? props.value : ''}</div>
    </>
  )
}
