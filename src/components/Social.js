import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled from 'styled-components';

const SocialStyles = styled.div`
  margin: 20px 0px;
  display: flex;
  flex-direction: row;

  ul {
    list-style-type: none;
  }

  a {
    color: #ffffff;
  }
`;

function Social({
  twitter,
  facebook,
  instagram,
  github,
  linkedin,
  size = '1x'
}) {
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
