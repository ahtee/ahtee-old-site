import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background: #4ecca3;
  border: #4ecca3;
  padding: 13px;
  border-radius: 5px;
  color: #ffffff;
  font-size: 1rem;
  margin: 10px;
  outline: none;
`;

function Button({ onClick, children }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}
export default Button;
