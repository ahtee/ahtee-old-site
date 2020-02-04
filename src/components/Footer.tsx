import React from 'react'
import { Container } from 'react-bootstrap'
import styled from 'styled-components'
import { FaGithub, FaTwitter, FaFacebook, FaInstagram } from 'react-icons/fa'

const FooterStyles = styled.footer`
  background: #060606;
  margin-top: 10px;
  padding: 10px;
  color: #ffffff;
`

const Link = styled.a`
  color: #fff;
  padding: 0px 7px;
  transition: color 0.5s;

  :hover {
    color: green
    transition: color 0.2s;
  }
`

function Footer(): React.ReactNode {
  return (
    <FooterStyles>
      <Container>
        <h5>Social</h5>
        <h4>
          <Link href="https://github.com/ahtee" target="_blank" rel="noopener noreferrer"><FaGithub /></Link>
          <Link href="https://twitter.com/bencotte" target="_blank" rel="noopener noreferrer"><FaTwitter /></Link>
          <Link href="https://facebook.com/bencotte" target="_blank" rel="noopener noreferrer"><FaFacebook /></Link>
          <Link href="https://instagram.com/bencotte" target="_blank" rel="noopener noreferrer"><FaInstagram /></Link>
        </h4>
      </Container>
    </FooterStyles>
  )
}
export default Footer
