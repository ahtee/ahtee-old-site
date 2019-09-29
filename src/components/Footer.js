import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import styled from 'styled-components';
import Social from './Social';

const DarkFooter = styled.footer`
  background: #232931;
`;

function Footer() {
  return (
    <DarkFooter>
      <Container>
        <Row>
          <Col>
            <p>Made in Ohio</p>
            <p>&copy; 2019</p>
          </Col>
          <Col>
            <Social
              right
              twitter="bencotte"
              facebook="bencotte"
              instagram="bencotte"
              linkedin="otteben"
              github="ahtee"
            />
          </Col>
        </Row>
      </Container>
    </DarkFooter>
  );
}
export default Footer;
