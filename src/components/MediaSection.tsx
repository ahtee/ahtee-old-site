import React from 'react'
import { Media } from 'react-bootstrap'

interface IMediaSection {
  src: string
  alt: string
  title: string
  description: string
}

function MediaSection(props: IMediaSection): React.ReactNode {
  return (
    <Media as="li">
      <img
        width={64}
        height={64}
        className="align-self-center mr-3"
        src={props.src}
        alt={props.alt}
      />
      <Media.Body>
        <h5>{props.title}</h5>
        <p>{props.description}</p>
      </Media.Body>
    </Media>
  )
}
export default MediaSection
