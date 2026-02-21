import React from 'react';
import { Link } from 'react-router-dom';
import './Page.css';
import './CareerLanding.css';

const CAREER_LINKS = [
  { to: '/career/candidate-selection', label: 'Candidate Selection Framework' },
  { to: '/career/income', label: 'Income' },
  { to: '/career/progressive-ladder', label: 'Progressive Ladder' },
  { to: '/career/syllabus', label: 'Syllabus' },
];

const Career = () => (
  <div className="page content-page career-landing">
    <div className="container">
      <h1 className="page-title">Career at BrahMoID</h1>
      <p className="career-intro">
        Our leadership and governance frameworks define how we grow talent and build accountable institutions. 
        Explore the sections below.
      </p>
      <div className="career-cards">
        {CAREER_LINKS.map(({ to, label }) => (
          <Link key={to} to={to} className="career-card">
            <span className="career-card-label">{label}</span>
            <span className="career-card-arrow">→</span>
          </Link>
        ))}
      </div>
    </div>
  </div>
);

export default Career;
