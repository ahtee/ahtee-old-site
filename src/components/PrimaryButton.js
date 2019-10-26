import React from 'react'
import { Button } from 'react-bootstrap'

function PrimaryButton(props) {
  return (
    <Button onClick={props.handleClick} variant="primary" type={props.type}>
      {props.children}
    </Button>
  )
}
export default PrimaryButton
