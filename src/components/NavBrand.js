import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import Portrait from './Portrait';
import NavTitle from './NavTitle';

const BrandLink = styled(Link)`
  display: flex;
  flex-direction: row;
  align-items: center;
  text-decoration: none;
`;

function NavBrand(props) {
  const { image, size, title } = props;
  return (
    <BrandLink to="/">
      <Portrait image={image} size={size} />
      <NavTitle>{title}</NavTitle>
    </BrandLink>
  );
}
export default NavBrand;
