import React from 'react'
import './Intro.css'

const DreamApartment = () => {
  return (
    <section className="dream-apartment">
      <div className="dream-wrapper">
        <div className="image-container">
          <img src="https://ik.imagekit.io/ijsd2xvnc/Inhaus/intro%20(1).png" alt="Bringing your dream apartment to life" />
        </div>
        <div className="text-container">
          <p>
            Designed for real conversations, the space goes beyond inspiration. Created as part of the<span  className="highlight"> Inhaus Living experience,</span> it offers a more immersive way to understand renovation before it begins.
          </p>
          <p>
            With thoughtful guidance available throughout your visit, the experience is designed to help you plan your renovation with clarity and confidence.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DreamApartment;