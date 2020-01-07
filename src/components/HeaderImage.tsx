import React from 'react'

interface IHeaderImage {
  src: string
  alt: string
  width: string
  height: string
}

const headerImageStyles = {
  borderRadius: 4,
  border: '1px solid #c3c3c3',
  margin: '0 2rem 2rem auto',
}

function HeaderImage(props: IHeaderImage): JSX.Element {
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
