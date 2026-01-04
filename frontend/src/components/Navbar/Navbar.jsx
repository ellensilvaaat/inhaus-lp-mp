import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/Inhaus/Frame%2012.svg"
        alt="Inhaus Living"
        className="navbar-logo"
      />
      <a href="tel:0296623509" className="navbar-call">Call Now</a>
    </header>
  )
}
