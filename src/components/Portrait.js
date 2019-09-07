import React from 'react';
import propTypes from 'prop-types';

function Portrait(props) {
  const { image, shape, border, borderColor, alt } = props;
  const PortraitStyles = {
    borderRadius: shape === `square` ? `10px` : `100%`,
    border: `15px ${border ? border : 'solid'}`,
    borderColor: borderColor ? borderColor : 'black'
  };
  return <img src={image} style={PortraitStyles} alt={alt} {...props} />;
}
export default Portrait;

Portrait.propTypes = {
  image: propTypes.string,
  shape: propTypes.string,
  border: propTypes.string,
  borderColor: propTypes.string
};
