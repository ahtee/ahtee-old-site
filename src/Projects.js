import React from 'react';
import styled from 'styled-components';
import Page from './components/Page';
import Card from './components/Card';
import logo from './logo.svg';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

function Projects(props) {
  return (
    <Page title="Projects">
      <Container>
        <Card title="Mozart">
          <a href="https://otte.io/mozart">
            <img src={logo} alt="React Project: Mozart" />
          </a>
        </Card>
      </Container>
    </Page>
  );
}
export default Projects;
