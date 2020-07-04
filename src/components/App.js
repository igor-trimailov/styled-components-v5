import React, { useState } from 'react'

import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Login, Home } from 'components/pages'

import LightTheme from 'themes/light'
import DarkTheme from 'themes/dark'

// GlobalStyle is used to set styled on global components, such as body
// this is also a place to set fonts
const GlobalStyle = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.bodyBackgroundColor};
    color: ${({ theme }) => theme.bodyFontColor};
    min-height: 100vh;
    margin: 0;
    font-family: 'Kaushan Script'
  }
`

function App() {
  const [theme, setTheme] = useState(LightTheme)

  return (
    <ThemeProvider
      theme={{
        ...theme,
        setTheme: () => {
          setTheme((s) => (s.id === 'light' ? DarkTheme : LightTheme))
        },
      }}
    >
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
