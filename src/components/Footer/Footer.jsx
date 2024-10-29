import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from "../../assets/img/logo-transparent.png";
import { Link } from "react-router-dom";


function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
        <Link to="/">
          <img src={logo} alt="Logo" />
        </Link>
        </div>
        <div className="footer-links">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#">History</a></li>
            <li><a href="#contact">Contact</a></li>
            <li><a href="#contact">About</a></li>
          </ul>
        </div>
        <div className="footer-social">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTiktok} />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Thessify. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
