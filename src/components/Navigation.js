import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from '@reach/router'
const NavigationImage = React.lazy(() => import('./NavigationImage'))

const navLinkStyles = {
  margin: '0px 5px',
  color: 'grey'
}

function Navigation(props) {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      {props.image && (
        <React.Suspense fallback={<span>...</span>}>
          <NavigationImage />
        </React.Suspense>
      )}
      <Link to="/">
        <Navbar.Brand>{props.title}</Navbar.Brand>
      </Link>
      <Nav className="ml-auto">
        {props.items &&
          props.items.map((item, index) => (
            <Link to={item.to} key={index} style={navLinkStyles}>
              {item.title}
            </Link>
          ))}
      </Nav>
    </Navbar>
  )
}
export default React.memo(Navigation)
