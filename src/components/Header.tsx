import React from 'react'
import { Container, Col, Jumbotron, Row } from 'react-bootstrap'
import styled, { keyframes } from 'styled-components'

interface IHeader {
  title: string
  tagline: string
  children?: React.ReactNode
}

const AlignTextCenter = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  text-align: center;
`

const AlignContentMiddle = styled(Col)`
  text-align: center;
  max-width: 500px;
  margin: 0px auto;
`

const JumbotronBackground = styled(Jumbotron)`
  background: linear-gradient(to right, #c6ffdd, #fbd786, #f7797d);
`

function Header(props: IHeader): React.ReactNode {
  return (
    <JumbotronBackground fluid>
      <Container>
        <Row>
          {props.children && <Col md={4}>{props.children}</Col>}
          <AlignContentMiddle>
            <AlignTextCenter>
              <span role="img" aria-label="sunglasses emoji">
                😎
              </span>
            </AlignTextCenter>
            <AlignTextCenter>{props.title}</AlignTextCenter>
            <p>{props.tagline}</p>
          </AlignContentMiddle>
        </Row>
      </Container>
    </JumbotronBackground>
  )
}
export default Header
