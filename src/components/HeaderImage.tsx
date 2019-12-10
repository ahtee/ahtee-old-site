import React from 'react'

const headerImageStyles = {
  borderRadius: 4,
  border: '1px solid #c3c3c3',
  margin: '0 2rem 2rem auto',
}

function HeaderImage(props) {
  return (
    <img
      src={props.src}
      alt={props.alt}
      width={props.width}
      height={props.height}
      style={headerImageStyles}
    />
  )
}
export default HeaderImage
