import React from 'react';
import styled from 'styled-components';
import NavBrand from './NavBrand';
import NavItems from './NavItems';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #232931;
  color: #eeeeee;
`;

function Navbar(props) {
  const { image, title, items } = props;
  return (
    <Nav>
      <NavBrand image={image} title={title} />
      <NavItems items={items} right />
    </Nav>
  );
}
export default Navbar;
