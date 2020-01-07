import React, { useState, useEffect } from 'react'
import { Auth } from 'aws-amplify'
import { Button, Form, Spinner } from 'react-bootstrap'

function LoginForm(): React.ReactNode {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setLoading] = useState(false)

  useEffect(
    event => {
      if (isLoading) {
        handleSubmit(event).then(() => {
          setLoading(false)
        })
      }
    },
    [isLoading]
  )

  const validateForm = () => email.length > 5 && password.length > 7

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()

    try {
      await Auth.signIn(email, password)
      alert('Logged in')
    } catch (e) {
      alert(e.message)
    }
  }

  return (
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group controlId="loginEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
          required
          type="email"
          pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
          value={email}
          onChange={(event: React.SyntheticEvent) =>
            setEmail(event.target.value)
          }
        />
      </Form.Group>
      <Form.Group controlId="loginPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          required
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </Form.Group>
      <Button
        type="submit"
        block
        disabled={!validateForm()}
        onClick={!isLoading ? handleSubmit : null}
      >
        {isLoading ? (
          <Spinner as="span" animation="border" variant="light" disabled />
        ) : (
          'Login'
        )}
      </Button>
    </Form>
  )
}
export default LoginForm
