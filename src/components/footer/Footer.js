import React from 'react';
import './footer.css'
import { Link } from 'react-router-dom';
function Footer() {
  return (
  <footer class="nav-footer">
  <div class="footer-nav">
        <ul>
          <li><Link to="/">About</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/experience">Experience</Link></li>
          <li><Link to="/education">Education</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
    
    {/* <a href="/">About</a>
    <a href="/education">Education</a>
    <a href="/experience">Experience</a>
    <a href="/skills">Skills</a>
    <a href="/projects">Projects</a>
    <a href="/contact">Contact</a> */}
  </div>
  <div class="footer-contact">
    <p>Email: <a href="mailto:fatemayasen2@gmail.com">fatemayasen2@gmail.com</a></p>
    <p>Phone: 052-5384608</p>
  </div>
  <div class="footer-social">
    
    <a href="https://github.com/fatemaY" target="_blank"><i class="fab fa-github"></i></a>
    <a href="https://linkedin.com/in/fatema-yasen-460b96213" target="_blank"><i class="fab fa-linkedin"></i></a>
  </div>
  <div class="footer-bottom">
      <p>&copy; 2024 Your Company. All rights reserved.</p>
  </div>
</footer>
  );
}

export default Footer;
