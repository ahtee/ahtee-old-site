import React from 'react';
import propTypes from 'prop-types';

function Button(props) {
  const { buttonColor, children } = props;

  const ButtonStyle = {
    background: buttonColor ? buttonColor : `#007bff`,
    whiteSpace: `nowrap`,
    padding: `.375rem .75rem`,
    fontSize: `calc(10px + 2vmin)`,
    color: `white`,
    border: `transparent`,
    borderRadius: `.25rem`
  };

  return <button style={ButtonStyle}>{children}</button>;
}
export default Button;

Button.propTypes = {
  buttonColor: propTypes.string,
  children: propTypes.string.isRequired
};

Button.defaultProps = {
  children: 'Button'
};
