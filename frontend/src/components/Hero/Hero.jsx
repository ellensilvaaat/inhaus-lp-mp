import React from 'react'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero-section">
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/Inhaus/Group%206%20(3).png"
        alt="Inhaus Showroom"
        className="hero-background"
      />
      <div className="hero-content">
        <h1>
          A renovation showroom<br />
          in the heart of Moore Park
        </h1>
        <p>
          Explore kitchens, bathrooms and custom interiors, all under one roof.
        </p>
        <a href="#form">Plan your showroom visit</a>
      </div>
    </section>
  )
}
