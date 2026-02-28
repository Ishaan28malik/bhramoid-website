import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import './Page.css';

const SLUG_TITLES = {
  'transparency-accountability': 'Transparency & Accountability',
  'project-transparency': 'Real-Time Project Transparency',
  'digital-democracy': 'Digital Democracy',
  'digital-identity-insights': 'Digital Identity Insights',
  'merit-based-leadership': 'Merit-Based Leadership',
  'rti-reform': 'RTI Reform',
  'rtr-issues': 'Right to Redressal (RTR)',
  'citizen-feedback': 'Citizen Feedback',
  'grievance-resolution': 'Grievance Resolution',
};

const LearnMorePage = () => {
  const location = useLocation();
  const slug = (location.pathname || '').replace(/^\//, '');
  const title = SLUG_TITLES[slug] || slug.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  return (
    <div className="page content-page learn-more-page">
      <div className="container">
        <h1>{title}</h1>
        <p className="learn-more-placeholder">Detail content for this topic can be added here. Use markdown or custom components as needed.</p>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </div>
  );
};

export default LearnMorePage;
