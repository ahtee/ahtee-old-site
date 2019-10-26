import React from 'react'
import { Card } from 'react-bootstrap'

function CardQuote(props) {
  return (
    <Card className="p-3">
      <blockquote className="blockquote mb-0 card-body">
        <p>{props.quote}</p>
        <footer className="blockquote-footer">
          <small className="text-muted">{props.author}</small>
        </footer>
      </blockquote>
    </Card>
  )
}
export default CardQuote
