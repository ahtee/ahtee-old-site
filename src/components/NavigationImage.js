import React from 'react'

function NavigationImage(props) {
  return (
    <img
      alt={props.alt}
      src={props.src}
      width="30"
      height="30"
      className="d-inline-block align-top"
    />
  )
}
export default NavigationImage
