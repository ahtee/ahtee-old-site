import React, { useState } from 'react'
import { Router } from '@reach/router'
import './App.css'
import Loading from './components/Loading'
const Blog = React.lazy(() => import('./pages/Blog'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Footer = React.lazy(() => import('./components/Footer'))
const Home = React.lazy(() => import('./pages/Home'))
const History = React.lazy(() => import('./pages/History'))
const Login = React.lazy(() => import('./pages/Login'))
const Navigation = React.lazy(() => import('./components/Navigation'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Page = React.lazy(() => import('./components/Page'))
const Portfolio = React.lazy(() => import('./pages/Portfolio'))
const Resume = React.lazy(() => import('./pages/Resume'))

const navLinks = [
  { title: 'Blog', to: '/blog' },
  { title: 'Portfolio', to: '/portfolio' },
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
              <Blog path="/blog" />
              <Contact path="/contact" />
              <History path="/history" />
              <Home path="/" />
              <Login path="/login" />
              <Portfolio path="/portfolio" />
              <Resume path="/resume" />
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
