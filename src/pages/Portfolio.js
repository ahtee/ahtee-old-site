import React from 'react'
import { Helmet } from 'react-helmet'
import Header from '../components/Header'

function Portfolio() {
  return (
    <div>
      <Helmet>
        <title>otte.io | Portfolio</title>
        <meta name="description" content="otte.io work portfolio" />
      </Helmet>
      <Header title="Portfolio (coming soon!)" />
    </div>
  )
}
export default Portfolio
