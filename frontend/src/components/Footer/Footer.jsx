import React from "react";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* LOGO */}
        <div className="footer-logo">
          <img src="https://ik.imagekit.io/ijsd2xvnc/Inhaus/Frame%2012.svg" alt="Inhaus Living" />
        </div>

        {/* LOCATIONS */}
        <div className="footer-column">
          <h4 className="footer-title">Locations</h4>
          <p>Taren Point</p>
          <p>Moore Park</p>
          <p>Fyshwick</p>
        </div>

        {/* CONTACT */}
        <div className="footer-column">
          <h4 className="footer-title">Contact us</h4>
          <p>(02) 9662 3509</p>
          <p>info@inhausliving.com.au</p>
        </div>

        {/* SOCIAL */}
        <div className="footer-column">
          <h4 className="footer-title">Follow us</h4>

          <div className="footer-social">
            <a
              href="https://www.instagram.com/inhaus_living/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram />
            </a>

            <a
              href="https://www.facebook.com/inhausliving.com.au/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebookF />
            </a>
          </div>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Inhaus Living — All rights reserved.</p>
      </div>
    </footer>
  );
}
