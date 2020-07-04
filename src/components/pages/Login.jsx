import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import {
  PageLayout,
  Input,
  PasswordInput,
  Button,
  Spinner,
} from 'components/common'

const Form = styled.form`
  width: 100%;
  max-width: 400px;
  background: white;
  border: 1px solid #eee;
  padding: 16px;
  box-sizing: border-box;
  color: black;
  border-radius: 4px;

  .alt-text {
    text-align: center;
    margin: 10px 0;
  }

  > ${Button}:first-of-type {
    margin-top: 40px;
  }

  > span:first-of-type {
    display: block;
    margin-bottom: 20px;
  }
`

export function Login() {
  const [loading, setLoading] = useState(false)
  const [formFields, setFormFields] = useState({
    username: '',
    password: '',
  })

  const handleInputChange = (e) => {
    // TODO: what does e.persist do?
    e.persist()
    setFormFields((s) => ({
      ...s,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setLoading(true)
  }

  useEffect(() => {
    let timeout

    if (loading) {
      timeout = setTimeout(() => setLoading(false), 3000)
    }

    return () => {
      clearTimeout(timeout)
    }
  }, [loading])

  return (
    <PageLayout>
      <h1>Login</h1>
      <Form onSubmit={handleSubmit}>
        <span>Login if you have an account</span>
        {!loading && (
          <>
            <Input
              type="text"
              name="username"
              placeholder="Username"
              value={formFields.username}
              onChange={handleInputChange}
            />
            <PasswordInput
              name="password"
              value={formFields.password}
              onChange={handleInputChange}
            />
          </>
        )}

        {loading && <Spinner />}

        <Button large disabled={loading} type="submit">
          {loading ? 'Loading...' : 'Login'}
        </Button>
        {!loading && (
          <>
            <div className="alt-text">or</div>
            <Button secondary type="button">
              Register
            </Button>
          </>
        )}
      </Form>
    </PageLayout>
  )
}
