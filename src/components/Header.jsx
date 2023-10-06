import { Link } from 'react-router-dom';
import React from 'react'

export default function Header({children}) {
  return (
    <>
      <nav>
        <ul>
          <li><Link to="/producto/1">producto 1</Link></li>
        </ul>
      </nav>
      <main>{children}</main>
    </>
  )
}
