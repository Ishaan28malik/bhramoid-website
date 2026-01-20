import React from 'react';
import './Legal.css';

const CookiePolicy = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Cookie Policy</h1>
        
        <div className="legal-content">
          <section>
            <h2>What Are Cookies</h2>
            <p>
              Cookies are small text files that are placed on your device when you visit a website. 
              They are widely used to make websites work more efficiently and provide information 
              to website owners.
            </p>
          </section>

          <section>
            <h2>How We Use Cookies</h2>
            <p>BrahMoID uses cookies for the following purposes:</p>
            
            <h3>Essential Cookies</h3>
            <p>
              These cookies are necessary for the website to function properly. They enable core 
              functionality such as security, network management, and accessibility.
            </p>

            <h3>Analytics Cookies</h3>
            <p>
              These cookies help us understand how visitors interact with our website by collecting 
              and reporting information anonymously. This helps us improve our website's performance 
              and user experience.
            </p>

            <h3>Preference Cookies</h3>
            <p>
              These cookies remember your preferences (such as theme selection) to provide a more 
              personalized experience on future visits.
            </p>
          </section>

          <section>
            <h2>Types of Cookies We Use</h2>
            <table className="cookie-table">
              <thead>
                <tr>
                  <th>Cookie Name</th>
                  <th>Purpose</th>
                  <th>Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>theme_preference</td>
                  <td>Stores your theme preference (light/dark)</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>cookie_consent</td>
                  <td>Stores your cookie consent preferences</td>
                  <td>1 year</td>
                </tr>
                <tr>
                  <td>session_id</td>
                  <td>Maintains your session while using the platform</td>
                  <td>Session</td>
                </tr>
              </tbody>
            </table>
          </section>

          <section>
            <h2>Third-Party Cookies</h2>
            <p>
              We may use third-party services that set cookies on your device. These services help 
              us analyze website usage and improve our services. We do not control these third-party 
              cookies, and you should review their privacy policies.
            </p>
          </section>

          <section>
            <h2>Managing Cookies</h2>
            <p>
              You can control and manage cookies in several ways. Please note that removing or 
              blocking cookies may impact your user experience and some parts of our website may 
              not function properly.
            </p>
            <ul>
              <li>Browser settings: Most browsers allow you to refuse or accept cookies</li>
              <li>Cookie preferences: Use our cookie consent banner to manage your preferences</li>
              <li>Third-party opt-out: Visit third-party websites to opt out of their cookies</li>
            </ul>
          </section>

          <section>
            <h2>Updates to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes 
              by posting the new policy on this page.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about our use of cookies, please contact us at: 
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

export default CookiePolicy;
