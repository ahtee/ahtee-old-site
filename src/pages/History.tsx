import React from 'react'
import { Container } from 'react-bootstrap'
import { Helmet } from 'react-helmet'
import Timeline from '../components/Timeline'
const Header = React.lazy(() => import('../components/Header'))

function History() {
  return (
    <div>
      <Helmet>
        <title>otte.io | History</title>
        <meta name="description" content="otte.io career history" />
      </Helmet>
      <Header title="History" />
      <Container>
        <Timeline />
      </Container>
    </div>
  )
}
export default History
