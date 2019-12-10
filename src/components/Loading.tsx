import React from 'react'
import { Spinner } from 'react-bootstrap'

const LoadingStyles = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}

function Loading() {
  return (
    <div style={LoadingStyles}>
      <Spinner animation="border" variant="primary" />
    </div>
  )
}
export default Loading
