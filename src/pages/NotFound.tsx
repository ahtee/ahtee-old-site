import React from 'react'
import { Helmet } from 'react-helmet'
const Header = React.lazy(() => import('../components/Header'))

function Home() {
  return (
    <div>
      <Helmet>
        <title>otte.io | 404: Not Found!</title>
        <meta name="description" content="That page was not found!" />
      </Helmet>
      <Header title="404 Not Found" />
    </div>
  )
}
export default Home
