import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { FaGithub } from 'react-icons/fa'
import NavLink from './NavLink'
const NavigationImage = React.lazy(() => import('./NavigationImage'))

function Navigation(props) {
  const handleLogout = () => {
    props.setAuthenticated(false)
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      {props.image && (
        <React.Suspense fallback={<span>...</span>}>
          <NavigationImage />
        </React.Suspense>
      )}
      <NavLink to="/">
        <Navbar.Brand>{props.title}</Navbar.Brand>
      </NavLink>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          {props.items &&
            props.items.map((item, index) => (
              <NavLink to={item.to} key={index}>
                {item.title}
              </NavLink>
            ))}
          {props.isAuthenticated ? (
            <NavLink onClick={handleLogout}>Logout</NavLink>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
          <a
            href="https://github.com/ahtee/ahtee"
            style={{ margin: '0px .5rem', color: '#fff' }}
          >
            <FaGithub size="1.6em" />
          </a>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
export default React.memo(Navigation)
