import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
  letter-spacing: -2px;
  font-size: 1.7rem;
  color: #eeeeee;
`;

function NavTitle(props) {
  return <Title>{props.children}</Title>;
}
export default NavTitle;
