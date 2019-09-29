import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const GreenLink = styled(Link)`
  color: #4ecca3;
  text-decoration: none;
  margin: 0px 15px;
`;

const GithubAnchor = styled.a`
  color: #4ecca3;
  margin: 0px 15px;
`;

function NavItems(props) {
  const { items } = props;
  const ItemGroup = styled.ul`
    margin: 0;
    list-style-type: none;
    font-weight: bold;
    ${'right' in props && `margin-left: auto;`}
    display: flex;
    flex-direction: row;
    align-items: center;
  `;
  return (
    <ItemGroup>
      {items &&
        items.map(item => (
          <li key={item.id}>
            <GreenLink to={item.to}>{item.name}</GreenLink>
          </li>
        ))}
      <GithubAnchor href="https://github.com/ahtee/ahtee">
        <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
      </GithubAnchor>
    </ItemGroup>
  );
}
export default NavItems;
