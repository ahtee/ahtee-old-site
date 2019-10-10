import React from 'react';
import styled from 'styled-components';
import Page from './components/Page';
import Countdown from 'react-countdown-now';

const CountdownStyles = styled.div`
  min-height: 70vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

function Home() {
  const birthday = new Date('Sat, 12 Oct 2019 00:00:00');
  const now = new Date();

  return (
    <Page>
      <CountdownStyles>
        {now <= birthday ? (
          <h1>
            <p>Birthday countdown</p>
            <Countdown date={birthday} />
          </h1>
        ) : (
          <h1>Just turned 27</h1>
        )}
      </CountdownStyles>
    </Page>
  );
}
export default Home;
