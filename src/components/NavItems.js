import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';
import BenOtteResumeAugust2019 from '../files/BenOtteResumeAugust2019.docx';

const GreenLink = styled(Link)`
  color: #4ecca3;
  text-decoration: none;
  margin: 0px 15px;
`;

const Anchor = styled.a`
  color: #4ecca3;
  margin: 0px 15px;
  text-decoration: none;
`;

const Item = styled.li`
  margin: 10px 0px;
`;

function NavItems(props) {
  const { items, isOpen } = props;

  const ItemGroup = styled.ul`
    margin: 0;
    list-style-type: none;
    font-weight: bold;
    ${'right' in props && `margin-left: auto;`}
    display: flex;
    align-items: center;

    @media screen and (max-width: 600) {
      display: none;
      flex-direction: column;
      align-items: right;
    }
  `;

  return (
    <div>
      {isOpen && (
        <ItemGroup>
          {items &&
            items.map(item => (
              <Item key={item.id}>
                <GreenLink to={item.to}>{item.name}</GreenLink>
              </Item>
            ))}
          <Anchor href={BenOtteResumeAugust2019} download>
            Resume
          </Anchor>
          <Anchor href="https://github.com/ahtee/ahtee">
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </Anchor>
        </ItemGroup>
      )}
    </div>
  );
}
export default NavItems;
