import React from 'react'
import { Link } from 'react-router-dom'

export default function NavBar() {
  return (
    <nav>
        <Link to={"\categories"}>Categories</Link>
        <Link to={"\products"}>Products</Link>
    </nav>
  )
}
