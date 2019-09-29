import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

function Social(props) {
  const { twitter, facebook, instagram, github, linkedin, size = '1x' } = props;

  const SocialStyles = styled.div`
    margin: 20px 0px;

    ul {
      list-style-type: none;
      display: flex;
      flex-direction: row;
      ${'right' in props && `justify-content: flex-end;`}
    }

    li {
      margin: 0px 10px;
    }

    a {
      color: #ffffff;
    }
  `;

  return (
    <SocialStyles>
      <ul>
        {twitter && (
          <li>
            <a
              href={`https://www.twitter.com/${twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'twitter']} size={size} />
            </a>
          </li>
        )}
        {facebook && (
          <li>
            <a
              href={`https://www.facebook.com/${facebook}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'facebook']} size={size} />
            </a>
          </li>
        )}
        {instagram && (
          <li>
            <a
              href={`https://www.instagram.com/${instagram}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'instagram']} size={size} />
            </a>
          </li>
        )}
        {github && (
          <li>
            <a
              href={`https://www.github.com/${github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'github']} size={size} />
            </a>
          </li>
        )}
        {linkedin && (
          <li>
            <a
              href={`https://www.linkedin.com/in/${linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={['fab', 'linkedin']} size={size} />
            </a>
          </li>
        )}
      </ul>
    </SocialStyles>
  );
}
export default Social;
