import React from "react";
import "./ThankYou.css";

export default function ThankYou() {
  return (
    <section className="thankyou-section">

      {/* LOGO */}
      <img
        src="https://ik.imagekit.io/ijsd2xvnc/Inhaus/Logo%20(1).svg" 
        alt="Inhaus Logo"
        className="thankyou-logo"
      />

      <div className="thankyou-box">
        
        {/* CHECK ANIMADO */}
        <div className="checkmark">
          <span>✓</span>
        </div>

        <h1>Your visit is booked</h1>
        <p>
          Thank you! Our team will be in touch shortly to prepare everything for your visit.
        </p>

        <a href="/" className="back-btn">Return to Home</a>
      </div>
    </section>
  );
}
