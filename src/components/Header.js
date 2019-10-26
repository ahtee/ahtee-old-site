import React from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap'

const alignTextCenter = {
  textAlign: 'center'
}

const alignContentMiddle = {
  margin: 'auto 0px'
}

function Header(props) {
  return (
    <Jumbotron fluid>
      <Container>
        <Row>
          {props.children && <Col md={4}>{props.children}</Col>}
          <Col style={alignContentMiddle}>
            <h1 style={alignTextCenter}>{props.title}</h1>
            <p>{props.tagline}</p>
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  )
}
export default Header
