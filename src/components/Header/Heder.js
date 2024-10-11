import React, { useState } from 'react';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Import Link for routing
import './Heder.css'; // Import the CSS file for styling

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the side navbar for mobile view
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header>
      <nav className="navbar">
        <div className="logo">
          <h1>INFINITEB2B</h1>
        </div>

        {/* Search Box */}
        <div className="search-box">
          <input type="text" placeholder="Search solutions, topics and vendors" />
          <button type="button" aria-label="Search">
            <FaSearch />
          </button>
        </div>

        {/* Links for Desktop */}
        <ul className={`nav-links ${isOpen ? "nav-active" : ""}`}>
          <li><Link to="/solutionset" className="nav-item">SOLUTION SETS</Link></li>
          <li><Link to="/newsletters" className="nav-item">NEWSLETTERS</Link></li>
          <li><Link to="/login" className="nav-item">LOGIN</Link></li>
          {/* <li><button className="signup-btn"><Link to="/signup" className="signup-item">SIGN UP</Link></button></li> */}
        </ul>

        {/* Hamburger Menu Icon for Mobile */}
        <div className="hamburger" onClick={toggleMenu}>
          <FaBars />
        </div>
      </nav>

      {/* Side Navbar for Mobile/Tablet with Logo */}
      <div className={`side-nav ${isOpen ? 'open' : ''}`}>
        <div className="side-header">
          {/* Close Icon */}
          <FaTimes className="close-icon" onClick={closeMenu} />
          <div className="side-logo">
            <h1>INFINITEB2B</h1>
          </div>
        </div>

        <ul>
          <li><Link to="/solutionset" onClick={closeMenu} className="nav-item">SOLUTION SETS</Link></li>
          <li><Link to="/newsletters" onClick={closeMenu} className="nav-item">NEWSLETTERS</Link></li>
          <li><Link to="/login" onClick={closeMenu} className="nav-item">LOGIN</Link></li>
          {/* <li><button className="signup-btn"><Link to="/signup" onClick={closeMenu} className="signup-item">SIGN UP</Link></button></li> */}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
