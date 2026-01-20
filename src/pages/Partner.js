import React, { useState } from 'react';
import './Partner.css';

const Partner = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: '',
    partnershipType: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend or service like Formspree
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        organization: '',
        message: '',
        partnershipType: ''
      });
    }, 3000);
  };

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Partner With Us</h1>
        
        <div className="partner-content">
          <div className="partner-info">
            <h2>Partnership Models</h2>
            <div className="partnership-blocks">
              <div className="partnership-block">
                <h3>Political Leaders</h3>
                <p>
                  Individual political leaders can partner with BrahMoID to access our governance 
                  platform and tools. We offer flexible subscription models tailored to your needs 
                  and constituency size.
                </p>
              </div>
              <div className="partnership-block">
                <h3>Political Parties</h3>
                <p>
                  Political parties can partner with us to provide governance infrastructure to 
                  all their representatives. We offer enterprise solutions with volume discounts 
                  and dedicated support.
                </p>
              </div>
              <div className="partnership-block">
                <h3>Government Organizations</h3>
                <p>
                  Government departments and agencies can integrate BrahMoID's platform to enhance 
                  their citizen service delivery and transparency initiatives.
                </p>
              </div>
              <div className="partnership-block">
                <h3>Investors and Funders</h3>
                <p>
                  We welcome partnerships with foundations, impact investors, and organizations 
                  committed to democratic governance and transparency. All funding is transparent 
                  and aligned with our mission.
                </p>
              </div>
            </div>

            <div className="investment-pathways">
              <h2>Investment Pathways</h2>
              <p>
                BrahMoID offers multiple pathways for investment and partnership. Whether you're 
                a political leader seeking governance tools, a party looking for infrastructure, 
                or an organization committed to democratic governance, we have partnership options 
                that align with your goals.
              </p>
            </div>
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
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="organization">Organization</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="partnershipType">Partnership Type</label>
                  <select
                    id="partnershipType"
                    name="partnershipType"
                    value={formData.partnershipType}
                    onChange={handleChange}
                  >
                    <option value="">Select...</option>
                    <option value="political-leader">Political Leader</option>
                    <option value="political-party">Political Party</option>
                    <option value="government">Government Organization</option>
                    <option value="investor">Investor/Funder</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows="6"
                    value={formData.message}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="privacy-notice">
                  <p>
                    By submitting this form, you agree to our <a href="/privacy-policy">Privacy Policy</a>. 
                    We will use your information solely to respond to your inquiry and will not share 
                    it with third parties.
                  </p>
                </div>

                <button type="submit" className="btn">Submit</button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partner;
