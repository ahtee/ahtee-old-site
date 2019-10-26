import React from 'react'
const Header = React.lazy(() => import('../components/Header'))

function Home() {
  return (
    <div>
      <Header title="404 Not Found" />
    </div>
  )
}
export default Home
