import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Partner.css';

const PARTNER_LINKS = [
  { to: '/partner/whom-we-serve', label: 'Whom Do We Serve' },
  { to: '/partner/why-adopt', label: 'Why Adopt Us' },
  { to: '/partner/operating-model', label: 'BrahMoID–Party Operating Model' },
  { to: '/partner/springboard', label: 'Springboard' },
  { to: '/partner/funding', label: 'Our Funding Model' },
];

const Partner = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', organization: '', message: '', partnershipType: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', organization: '', message: '', partnershipType: '' });
    }, 3000);
  };

  return (
    <div className="page content-page partner-landing">
      <div className="container">
        <h1 className="page-title">Partner With Us</h1>
        <p className="partner-intro">
          BrahMoID is built for leaders and organisations who believe in transparent, accountable governance. 
          Explore the sections below and get in touch when you're ready.
        </p>

        <div className="partner-cards">
          {PARTNER_LINKS.map(({ to, label }) => (
            <Link key={to} to={to} className="partner-card">
              <span className="partner-card-label">{label}</span>
              <span className="partner-card-arrow">→</span>
            </Link>
          ))}
        </div>

        <div className="contact-form-section">
          <h2>Get in Touch</h2>
          {submitted ? (
            <div className="form-success">
              <p>Thank you for your interest! We'll get back to you soon.</p>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name *</label>
                <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
              </div>
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input type="text" id="organization" name="organization" value={formData.organization} onChange={handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="partnershipType">Partnership Type</label>
                <select id="partnershipType" name="partnershipType" value={formData.partnershipType} onChange={handleChange}>
                  <option value="">Select...</option>
                  <option value="pilot">Pilot</option>
                  <option value="funding">Funding</option>
                  <option value="tech-integration">Tech integration</option>
                  <option value="channel">Channel partnership</option>
                  <option value="strategic">Strategic partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Message *</label>
                <textarea id="message" name="message" rows="6" value={formData.message} onChange={handleChange} required />
              </div>
              <div className="privacy-notice">
                <p>
                  By submitting, you agree to our <Link to="/privacy-policy">Privacy Policy</Link>.
                  We use your details only to respond to partnership requests.
                </p>
              </div>
              <button type="submit" className="btn">Submit</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Partner;
