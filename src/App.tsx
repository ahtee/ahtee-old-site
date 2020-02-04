import React, { useState } from 'react'
import { Router } from '@reach/router'
import './App.css'
import Loading from './components/Loading'
import Contact from './pages/Contact'
import Footer from './components/Footer'
const Home = React.lazy(() => import('./pages/Home'))
const Login = React.lazy(() => import('./pages/Login'))
const Navigation = React.lazy(() => import('./components/Navigation'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Page = React.lazy(() => import('./components/Page'))

const navLinks = [{ title: 'Contact', to: '/contact' }]

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false)

  const handleClick = () => setAuthenticated(!isAuthenticated)

  return (
    <React.Fragment>
      <React.Suspense fallback={<Loading />}>
        <Navigation
          title="Intro"
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
              <Home path="/" />
              <Contact path="/contact" />
              <Login path="/login" />
              <NotFound default />
            </Router>
          </React.Suspense>
        </Page>
      </React.Suspense>
      <Footer />
    </React.Fragment>
  )
}

export default App
