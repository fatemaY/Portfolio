import React from 'react';
import './header.css';
import { Link, Outlet } from 'react-router-dom';

function Header() {
  return (
    <header>
        <nav>
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <Outlet />
    </header>


  );
}

export default Header;
