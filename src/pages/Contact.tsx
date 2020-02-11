import React from 'react'
import { Card, Col, Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import ContactForm from '../components/ContactForm'

const marginAuto = {
  margin: '0px auto',
}

function Contact() {
  return (
    <div>
      <Helmet>
        <title>otte.io | Contact</title>
        <meta name="description" content="Like my work here? Contact me!" />
      </Helmet>
      <Container fluid>
        <Col xl={4} lg={4} md={6} style={marginAuto}>
          <Card body>
            <ContactForm />
          </Card>
          <p>
            Send me an email at{' '}
            <a href="mailto:benottedev@gmail.com">benottedev@gmail.com</a>
          </p>
        </Col>
      </Container>
    </div>
  )
}
export default Contact
