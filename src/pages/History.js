import React from 'react'
import { Container } from 'react-bootstrap'
import Timeline from '../components/Timeline'
const Header = React.lazy(() => import('../components/Header'))

function History() {
  return (
    <div>
      <Header title="History" />
      <Container>
        <Timeline />
      </Container>
    </div>
  )
}
export default History
