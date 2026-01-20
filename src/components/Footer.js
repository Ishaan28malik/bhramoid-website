import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Legal</h4>
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-of-use">Terms of Use</Link>
            <Link to="/cookie-policy">Cookie Policy</Link>
          </div>
          <div className="footer-section">
            <h4>Contact</h4>
            <a href="mailto:media@brahmoid.com">Media@BrahMoID</a>
            <Link to="/partner">Partner With Us</Link>
            <Link to="/model-comparison">3D Model Comparison</Link>
          </div>
          <div className="footer-section">
            <h4>Social</h4>
            <div className="social-links">
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Twitter">Twitter</a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">LinkedIn</a>
              <a href="#" target="_blank" rel="noopener noreferrer" aria-label="Facebook">Facebook</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} BrahMoID. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
