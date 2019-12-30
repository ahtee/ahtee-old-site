import React, { useState } from 'react'
import { Router } from '@reach/router'
import './App.css'
import Loading from './components/Loading'
const Contact = React.lazy(() => import('./pages/Contact'))
const Footer = React.lazy(() => import('./components/Footer'))
const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./pages/Login'))
const Navigation = React.lazy(() => import('./components/Navigation'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Page = React.lazy(() => import('./components/Page'))

const navLinks = [
  { title: 'Contact', to: '/contact' },
]

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const handleClick = () => {
    setAuthenticated(!isAuthenticated)
  }

  return (
    <div>
      <React.Suspense fallback={<Loading />}>
        <Navigation
          title="otte.io"
          items={navLinks}
          isAuthenticated={isAuthenticated}
          setAuthenticated={setAuthenticated}
          handleLogout={handleClick}
        />
      </React.Suspense>
      <React.Suspense fallback={<Loading />}>
        <Page>
          <React.Suspense fallback={<Loading />}>
            <Router primary={false}>
              <Contact path="/contact" />
              <Home path="/" />
              <Login path="/login" />
              <NotFound default />
            </Router>
          </React.Suspense>
        </Page>
      </React.Suspense>
      <React.Suspense fallback={<Loading />}>
        <Footer />
      </React.Suspense>
    </div>
  )
}

export default App
