import React from 'react'
import { Link } from '@reach/router'

function NavLink(props) {
  return (
    <Link
      {...props}
      getProps={({ isCurrent }) => {
        // the object returned here is passed to the
        // anchor element's props
        return {
          style: {
            color: isCurrent ? 'green' : 'grey',
            margin: '0px .5rem',
          },
        }
      }}
    />
  )
}
export default NavLink
