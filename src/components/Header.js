import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './Header.css';

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-text">BrahMoID</span>
        </Link>
        <nav className="nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <Link to="/whom-we-serve" className={location.pathname === '/whom-we-serve' ? 'active' : ''}>
            Whom We Serve
          </Link>
          <Link to="/about" className={location.pathname === '/about' ? 'active' : ''}>
            About Us
          </Link>
          <Link to="/team" className={location.pathname === '/team' ? 'active' : ''}>
            Team
          </Link>
          <Link to="/partner" className={location.pathname === '/partner' ? 'active' : ''}>
            Partner With Us
          </Link>
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;
