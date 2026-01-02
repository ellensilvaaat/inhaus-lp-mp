import React from 'react'
import './Navbar.css'

export default function Navbar() {
  return (
    <header className="navbar">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/Inhaus/Logo%20(1).svg"
        alt="Inhaus Living"
        className="navbar-logo"
      />
      <a href="tel:0283591679" className="navbar-call">Call Now</a>
    </header>
  )
}
