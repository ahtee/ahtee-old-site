import React, { useState } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import NavBrand from './NavBrand';
import NavItems from './NavItems';

const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: #232931;
  color: #eeeeee;

  .hamburger {
    padding: 10px;
    display: inline-block;
    color: #4ecca3;
    position: absolute;
    top: 19px;
    right: 0;
  }

  @media screen and (max-width: 600px) {
    height: auto;
    display: block;

    .hamburger {
      padding: 10px;
      display: inline-block;
      color: #4ecca3;
      position: absolute;
      top: 19px;
      right: 0;
    }
  }
`;

function Navbar(props) {
  const { image, title, items } = props;
  const [navOpen, setNavOpen] = useState(false);

  return (
    <Nav>
      <NavBrand image={image} title={title} />
      <FontAwesomeIcon
        className="hamburger"
        icon={faBars}
        size="2x"
        onClick={() => setNavOpen(!navOpen)}
      />
      <NavItems items={items} isOpen={navOpen} right />
    </Nav>
  );
}
export default Navbar;
