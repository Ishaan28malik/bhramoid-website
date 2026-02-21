import React, { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTheme } from '../ThemeContext';
import './Header.css';

const ABOUT_LINKS = [
  { to: '/comparison-panchayat', label: 'BrahMoID vs My Panchayat App' },
  { to: '/comparison-ipac', label: 'BrahMoID vs I-PAC' },
  { to: '/team', label: 'Team' },
];

const PARTNER_LINKS = [
  { to: '/partner/whom-we-serve', label: 'Whom Do We Serve' },
  { to: '/partner/why-adopt', label: 'Why Adopt Us' },
  { to: '/partner/operating-model', label: 'BrahMoID–Party Operating Model' },
  { to: '/partner/springboard', label: 'Springboard' },
  { to: '/partner/funding', label: 'Our Funding Model' },
];

const CAREER_LINKS = [
  { to: '/career/candidate-selection', label: 'Candidate Selection Framework' },
  { to: '/career/income', label: 'Income' },
  { to: '/career/progressive-ladder', label: 'Progressive Ladder' },
  { to: '/career/syllabus', label: 'Syllabus' },
];

const Dropdown = ({ label, links, isActive, onOpen, onClose, isOpen }) => {
  const ref = useRef(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (ref.current && !ref.current.contains(e.target)) onClose();
    };
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen, onClose]);

  return (
    <div className="nav-dropdown" ref={ref}>
      <button
        type="button"
        className={`nav-dropdown-trigger ${isActive ? 'active' : ''} ${isOpen ? 'open' : ''}`}
        onClick={onOpen}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        {label}
        <span className="nav-dropdown-chevron" aria-hidden>▼</span>
      </button>
      {isOpen && (
        <ul className="nav-dropdown-menu" role="menu">
          {links.map(({ to, label }) => (
            <li key={to} role="none">
              <Link to={to} className="nav-dropdown-item" role="menuitem" onClick={onClose}>
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [openDropdown, setOpenDropdown] = useState(null);

  const aboutActive = ABOUT_LINKS.some(({ to }) => location.pathname === to) || location.pathname === '/about';
  const partnerActive = PARTNER_LINKS.some(({ to }) => location.pathname === to) || location.pathname === '/partner';
  const careerActive = CAREER_LINKS.some(({ to }) => location.pathname === to) || location.pathname === '/career';

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo" onClick={() => setOpenDropdown(null)}>
          <span className="logo-text">BrahMoID</span>
        </Link>
        <nav className="nav">
          <Link
            to="/"
            className={location.pathname === '/' ? 'active' : ''}
            onClick={() => setOpenDropdown(null)}
          >
            Home
          </Link>
          <Dropdown
            label="About Us"
            links={[{ to: '/about', label: 'About BrahMoID' }, ...ABOUT_LINKS]}
            isActive={aboutActive}
            isOpen={openDropdown === 'about'}
            onOpen={() => setOpenDropdown(openDropdown === 'about' ? null : 'about')}
            onClose={() => setOpenDropdown(null)}
          />
          <Dropdown
            label="Partner With Us"
            links={PARTNER_LINKS}
            isActive={partnerActive}
            isOpen={openDropdown === 'partner'}
            onOpen={() => setOpenDropdown(openDropdown === 'partner' ? null : 'partner')}
            onClose={() => setOpenDropdown(null)}
          />
          <Dropdown
            label="Career"
            links={CAREER_LINKS}
            isActive={careerActive}
            isOpen={openDropdown === 'career'}
            onOpen={() => setOpenDropdown(openDropdown === 'career' ? null : 'career')}
            onClose={() => setOpenDropdown(null)}
          />
        </nav>
        <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
          {theme === 'light' ? '🌙' : '☀️'}
        </button>
      </div>
    </header>
  );
};

export default Header;
