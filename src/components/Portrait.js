import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

function Portrait(props) {
  const { image, alt, size = 70 } = props;
  const PortraitStyles = styled.img`
    border-radius: 10%;
    margin: 10px;
  `;
  return (
    <PortraitStyles
      src={image}
      alt={alt}
      {...props}
      width={size}
      height={size}
    />
  );
}
export default Portrait;

Portrait.propTypes = {
  image: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.number
};
