import React from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'

const AlignTextCenter = styled.h1`
  text-align: center;
`

const AlignContentMiddle = styled(Col)`
  margin: auto 0px;
`

const colorSpectrumTransition = keyframes`
  0% {
    background: #20E4A4;
  }
  50% {
    background: #2CC9CC;
  }
  100% {
    background: #20E4A4;
  }
`

const AnimatedJumbotron = styled(Jumbotron)`
  animation: ${colorSpectrumTransition} 6s infinite;
`

function Header(props) {
  return (
    <AnimatedJumbotron fluid>
      <Container>
        <Row>
          {props.children && <Col md={4}>{props.children}</Col>}
          <AlignContentMiddle>
            <AlignTextCenter>{props.title}</AlignTextCenter>
            <p>{props.tagline}</p>
          </AlignContentMiddle>
        </Row>
      </Container>
    </AnimatedJumbotron>
  )
}
export default Header
