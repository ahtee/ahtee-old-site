import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'
import Header from '../components/Header'
import ContactForm from '../components/ContactForm'

const marginAuto = {
  margin: '0px auto',
}

function Contact(props) {
  return (
    <>
      <Header title="📬 Contact" />
      <Container fluid>
        <Col xl={4} lg={4} md={6} style={marginAuto}>
          <Card body>
            <ContactForm />
          </Card>
        </Col>
      </Container>
    </>
  )
}
export default Contact
