import React from 'react'
import { Router } from '@reach/router'
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

const navLinks = [{ title: 'Contact', to: '/contact' }]

function App() {
  return (
    <div>
      <Navigation title="otte.io" items={navLinks} />
      <React.Suspense fallback={<Loading />}>
        <Page>
          <Router>
            <Blog path="/blog" />
            <Contact path="/contact" />
            <Home path="/" />
            <History path="/history" />
            <Portfolio path="/portfolio" />
            <NotFound default />
          </Router>
        </Page>
      </React.Suspense>
      <Footer />
    </div>
  )
}

export default App
