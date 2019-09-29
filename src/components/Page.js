import React from 'react';
import { Container } from 'react-grid-system';
import styled from 'styled-components';

const Height = styled(Container)`
  min-height: 100vh;
`;

function Page(props) {
  return (
    <Height>
      {props.title && <h1>{props.title}</h1>}
      {props.children}
    </Height>
  );
}
export default Page;
