import React from 'react'
import { Helmet } from 'react-helmet'
import { Card, Col, Container } from 'react-bootstrap'
import Header from '../components/Header'
import LoginForm from '../components/LoginForm'

const marginAuto = {
  margin: '0px auto',
}

function Login() {
  return (
    <React.Fragment>
      <Helmet>
        <title>otte.io | Login</title>
        <meta name="description" content="User log in" />
      </Helmet>
      <Container fluid>
        <Col xl={4} lg={4} md={6} style={marginAuto}>
          <Card body>
            <LoginForm />
          </Card>
        </Col>
      </Container>
    </React.Fragment>
  )
}
export default Login
