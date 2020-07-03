import React from 'react'

import { createGlobalStyle } from 'styled-components'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import { Login, Home } from 'components/pages'

// GlobalStyle is used to set styled on global components, such as body
// this is also a place to set fonts
const GlobalStyle = createGlobalStyle`
  body {
    background: white;
    min-height: 100vh;
    margin: 0;
    color: black;
    font-family: 'Kaushan Script'
  }
`

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/" component={Home} />
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
