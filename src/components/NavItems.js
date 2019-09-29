import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GreenLink = styled(Link)`
  color: #4ecca3;
  text-decoration: none;
  margin: 0px 15px;
`;

function NavItems(props) {
  const { items } = props;
  const ItemGroup = styled.ul`
    margin: 0;
    list-style-type: none;
    font-weight: bold;
    ${'right' in props && `margin-left: auto;`}
  `;
  return (
    <ItemGroup>
      {items &&
        items.map(item => (
          <li key={item.id}>
            <GreenLink to={item.to}>{item.name}</GreenLink>
          </li>
        ))}
    </ItemGroup>
  );
}
export default NavItems;
