import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import { Link } from '@reach/router'

const footerStyles = {
  background: '#060606',
  marginTop: 10,
  padding: 10,
  color: '#ffffff',
}

function Footer(): React.ReactNode {
  return (
    <footer style={footerStyles}>
      <Container>
        <Row>
          <Col md={4}>
            <h5>Social</h5>
          </Col>
          <Col md={4}>
            <Link to="/contact">
              <h5>Contact</h5>
            </Link>
          </Col>
          <Col md={4}></Col>
        </Row>
      </Container>
    </footer>
  )
}
export default Footer
