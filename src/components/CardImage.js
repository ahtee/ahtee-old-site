import React from 'react'
import { Button, Card } from 'react-bootstrap'

function CardImage(props) {
  return (
    <Card border={props.border}>
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text>{props.description}</Card.Text>
        <a href={props.buttonLink}>
          <Button variant={props.buttonVariant}>{props.buttonText}</Button>
        </a>
      </Card.Body>
    </Card>
  )
}
export default CardImage
