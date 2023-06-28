import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <Link to="/" data-testid="main-link" >Main</Link>
      <Link to="/users" data-testid="users-link" >Users</Link>
      <Link to="/about" data-testid="about-link" >About</Link>
    </nav>
  )
}
