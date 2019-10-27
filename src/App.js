import React, { useState } from 'react'
import { Router } from '@reach/router'
import { Alert } from 'react-bootstrap'
import './App.css'
import Loading from './components/Loading'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import Page from './components/Page'
const Blog = React.lazy(() => import('./pages/Blog'))
const Contact = React.lazy(() => import('./pages/Contact'))
const Home = React.lazy(() => import('./pages/Home'))
const History = React.lazy(() => import('./pages/History'))
const NotFound = React.lazy(() => import('./pages/NotFound'))
const Portfolio = React.lazy(() => import('./pages/Portfolio'))
const Resume = React.lazy(() => import('./pages/Resume'))

const navLinks = [
  { title: 'Blog', to: '/blog' },
  { title: 'Portfolio', to: '/portfolio' },
  { title: 'Contact', to: '/contact' },
]

function App() {
  const [showAlert, setShowAlert] = useState(true)
  return (
    <div>
      <Navigation title="otte.io" items={navLinks} />
      <React.Suspense fallback={<Loading />}>
        <Page>
          <Router primary={false}>
            <Blog path="/blog" />
            <Contact path="/contact" />
            <History path="/history" />
            <Home path="/" />
            <Portfolio path="/portfolio" />
            <Resume path="/resume" />
            <NotFound default />
          </Router>
        </Page>
      </React.Suspense>
      {showAlert && (
        <Alert variant="danger" onClick={() => setShowAlert(false)}>
          This site is a work in progress!{' '}
          <span role="img" aria-label="Cnstruction worker emoji">
            👷‍
          </span>{' '}
          Please excuse my mess.
        </Alert>
      )}
      <Footer />
    </div>
  )
}

export default App
