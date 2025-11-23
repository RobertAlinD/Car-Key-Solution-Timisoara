import React, { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

import "./Header.css";

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <>
      <header>
        <nav ref={menuRef} className={`nav ${isMenuOpen ? "active" : ""}`}>
          <div className="navbar-logo-box">
            <img src="./assets/logopageleft.png" alt="Logo" />
          </div>

          <div className={`nav ${isMenuOpen ? "active" : ""}`}>
            <button id="navToggleBtn" className="nav-toggle" onClick={toggleMenu}>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </button>

            <div className="nav-items">
  <Link to="#" className="disabled-link">Upgrade / Retrofit</Link>
  <Link to="#" className="disabled-link">Smart Key LCD</Link>
  <Link to="#" className="disabled-link">Reparații Chei Auto</Link>
  <Link
    to="#"
    className="contact-link"
    onClick={() => (window.location.href = "tel:+40762961548")}
  >
    Contact
    <span className="tooltip">📞 Nr. Telefon: +40762961548</span>
  </Link>
</div>

          </div>

          <div className="social-container">
            <a
              href="https://www.facebook.com/CheiAutoSolutionTimisoara/"
              className="facebookbesocial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.instagram.com/chei_auto_solution_timisoara/"
              className="facebooksocial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a
              href="https://www.tiktok.com/@chei.auto.solution.tm"
              className="instagrambesocial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faTiktok} />
            </a>
          </div>

          <div className="navbar-shadow"></div>
        </nav>
      </header>

      {/* WhatsApp Floating Button */}
      <div className="whatsapp-floating">
        <a
          href="https://wa.me/40762961548?text=Salut!%20Mulțumim%20că%20ai%20contactat%20Car%20Key%20Solution%20Timișoara!%20Spune-ne%20cum%20te%20putem%20ajuta%3F🚗🔑"
          target="_blank"
          rel="noopener noreferrer"
          className="whatsappsocial"
          aria-label="Scrie-ne pe WhatsApp"
        >
          <>
            <FontAwesomeIcon icon={faWhatsapp} size="2x" />
            <span className="whatsapp-help-text">Ai nevoie de ajutor?</span>
          </>
        </a>
      </div>
    </>
  );
};

export default Header;
