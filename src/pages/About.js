import React from 'react';
import { Link } from 'react-router-dom';
import { useMarkdown } from '../hooks/useContent';
import MarkdownContent from '../components/MarkdownContent';
import './Page.css';
import '../components/MarkdownPage.css';
import './AboutHub.css';

const ABOUT_LINKS = [
  { to: '/comparison-panchayat', label: 'BrahMoID vs My Panchayat App' },
  { to: '/comparison-ipac', label: 'BrahMoID vs I-PAC' },
  { to: '/team', label: 'Team' },
];

const About = () => {
  const { markdown, loading, error } = useMarkdown('About us/About BrahMoID.md');

  if (loading) {
    return (
      <div className="page">
        <div className="container">
          <h1 className="page-title">About BrahMoID</h1>
          <p className="section-loading">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !markdown) {
    return (
      <div className="page">
        <div className="container">
          <h1 className="page-title">About BrahMoID</h1>
          <p>Unable to load content.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page markdown-page content-page about-hub">
      <div className="container">
        <div className="about-hub-content markdown-page-content">
          <MarkdownContent content={markdown} className="markdown-content-rich" />
        </div>
        <nav className="about-hub-links" aria-label="About sub-pages">
          <h2 className="about-hub-links-title">Explore further</h2>
          <div className="about-hub-cards">
            {ABOUT_LINKS.map(({ to, label }) => (
              <Link key={to} to={to} className="about-hub-card">
                <span>{label}</span>
                <span className="about-hub-arrow">→</span>
              </Link>
            ))}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default About;
