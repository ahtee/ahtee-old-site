import React from 'react'
import { Helmet } from 'react-helmet'

function NotFound() {
  return (
    <div>
      <Helmet>
        <title>otte.io | 404: Not Found!</title>
        <meta name="description" content="That page was not found!" />
      </Helmet>
      <p>That page is not found. Sorry!</p>
    </div>
  )
}
export default NotFound
