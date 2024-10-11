// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-container">
        {/* Left side - Logo and description */}
        <div className="footer-left">
          <h2>INFINITEB2B</h2>
          <p>
            B2B solutions from all vendors in all industries aggregated and curated in an easy-to-use discovery platform.
          </p>
        </div>

        {/* Center - Links */}
        <div className="footer-center">
          <ul>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Vendor Centers</a></li>
            <li><a href="#">Solution Sets</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>

        {/* Right side - Follow, upload, and join */}
        <div className="footer-right">
          <div className="social">
            <a href="#">Follow us on <i className="fab fa-linkedin"></i></a>
          </div>
          <div className="upload">
            <a href="#">Upload your Assets <i className="fas fa-upload"></i></a>
          </div>
          <button className="join-button">JOIN INFINITEB2B</button>
        </div>
      </div>

      {/* Bottom section with copyright */}
      <div className="footer-bottom">
        <p>
          &copy; 2024 Contentree. All Rights Reserved | Privacy and Cookies | Legal | Do not sell my info
        </p>
      </div>
    </footer>
  );
};

export default Footer;
