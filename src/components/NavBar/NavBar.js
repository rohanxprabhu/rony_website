import React from 'react';
import './NavBar.css'; // Import the CSS file for this component
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-link">home</a>
      <a href="#about" className="nav-link">about me</a>
      <a href="#projects" className="nav-link">projects</a>
      <a href="#resume" className="nav-link">resume</a>
      <Link to="/spotify" className='nav-link'>rony spotify</Link>
    </nav>
  );
};

export default NavBar;
