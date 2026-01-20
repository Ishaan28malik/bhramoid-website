import React from 'react';
import './Legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Privacy Policy</h1>
        
        <div className="legal-content">
          <section>
            <h2>Introduction</h2>
            <p>
              BrahMoID ("we," "our," or "us") is committed to protecting your privacy. This Privacy 
              Policy explains how we collect, use, disclose, and safeguard your information when you 
              use our website and governance platform.
            </p>
          </section>

          <section>
            <h2>Information We Collect</h2>
            <h3>Personal Information</h3>
            <p>
              We may collect personal information that you provide directly to us, including:
            </p>
            <ul>
              <li>Name and contact information (email, phone number)</li>
              <li>Organization and position details</li>
              <li>Information provided in forms, surveys, or communications</li>
            </ul>

            <h3>Usage Information</h3>
            <p>
              We automatically collect certain information about your use of our platform:
            </p>
            <ul>
              <li>IP address and device information</li>
              <li>Browser type and version</li>
              <li>Pages visited and time spent on pages</li>
              <li>Referring website addresses</li>
            </ul>
          </section>

          <section>
            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you updates and communications about our services</li>
              <li>Analyze usage patterns to improve our platform</li>
              <li>Ensure security and prevent fraud</li>
            </ul>
          </section>

          <section>
            <h2>Information Sharing</h2>
            <p>
              We do not sell, trade, or rent your personal information to third parties. We may share 
              your information only in the following circumstances:
            </p>
            <ul>
              <li>With your explicit consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in operating our platform (under strict confidentiality agreements)</li>
            </ul>
          </section>

          <section>
            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal 
              information against unauthorized access, alteration, disclosure, or destruction. However, 
              no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2>Your Rights</h2>
            <p>You have the right to:</p>
            <ul>
              <li>Access your personal information</li>
              <li>Correct inaccurate information</li>
              <li>Request deletion of your information</li>
              <li>Object to processing of your information</li>
              <li>Withdraw consent at any time</li>
            </ul>
          </section>

          <section>
            <h2>Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience. For more information, 
              please see our <a href="/cookie-policy">Cookie Policy</a>.
            </p>
          </section>

          <section>
            <h2>Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page and updating the "Last Updated" date.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about this Privacy Policy, please contact us at: 
              <a href="mailto:media@brahmoid.com">media@brahmoid.com</a>
            </p>
          </section>

          <section>
            <p><strong>Last Updated:</strong> {new Date().toLocaleDateString()}</p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
