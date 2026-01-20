import React from 'react';
import './Legal.css';

const TermsOfUse = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Terms of Use</h1>
        
        <div className="legal-content">
          <section>
            <h2>Acceptance of Terms</h2>
            <p>
              By accessing and using the BrahMoID website and platform, you accept and agree to be 
              bound by these Terms of Use. If you do not agree to these terms, please do not use 
              our services.
            </p>
          </section>

          <section>
            <h2>Use of the Platform</h2>
            <h3>Permitted Use</h3>
            <p>You may use our platform for:</p>
            <ul>
              <li>Accessing governance tools and services</li>
              <li>Engaging with political leaders and representatives</li>
              <li>Filing grievances and accessing information</li>
              <li>Participating in democratic governance processes</li>
            </ul>

            <h3>Prohibited Use</h3>
            <p>You may not:</p>
            <ul>
              <li>Use the platform for illegal or unauthorized purposes</li>
              <li>Violate any applicable laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Transmit harmful code or malware</li>
              <li>Attempt to gain unauthorized access to our systems</li>
              <li>Use the platform to harass, abuse, or harm others</li>
            </ul>
          </section>

          <section>
            <h2>User Accounts</h2>
            <p>
              If you create an account on our platform, you are responsible for maintaining the 
              confidentiality of your account credentials and for all activities that occur under 
              your account. You agree to notify us immediately of any unauthorized use of your account.
            </p>
          </section>

          <section>
            <h2>Content and Intellectual Property</h2>
            <p>
              All content on the BrahMoID platform, including text, graphics, logos, and software, 
              is the property of BrahMoID or its licensors and is protected by copyright and other 
              intellectual property laws. You may not reproduce, distribute, or create derivative 
              works without our express written permission.
            </p>
          </section>

          <section>
            <h2>User-Generated Content</h2>
            <p>
              When you submit content to our platform (such as grievances, feedback, or comments), 
              you grant us a license to use, display, and distribute that content as necessary to 
              provide our services. You represent that you have the right to grant this license and 
              that your content does not violate any third-party rights.
            </p>
          </section>

          <section>
            <h2>Disclaimers</h2>
            <p>
              The BrahMoID platform is provided "as is" without warranties of any kind, either 
              express or implied. We do not guarantee that the platform will be uninterrupted, 
              error-free, or secure. We are not responsible for the accuracy, completeness, or 
              reliability of any information on the platform.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by law, BrahMoID shall not be liable for any indirect, 
              incidental, special, consequential, or punitive damages arising from your use of the 
              platform.
            </p>
          </section>

          <section>
            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless BrahMoID, its officers, directors, employees, 
              and agents from any claims, damages, losses, or expenses arising from your use of the 
              platform or violation of these Terms of Use.
            </p>
          </section>

          <section>
            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms of Use at any time. We will notify users 
              of significant changes by posting the updated terms on our website. Your continued 
              use of the platform after changes are posted constitutes acceptance of the modified terms.
            </p>
          </section>

          <section>
            <h2>Termination</h2>
            <p>
              We reserve the right to suspend or terminate your access to the platform at any time, 
              with or without cause or notice, for any reason including violation of these Terms of Use.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms of Use shall be governed by and construed in accordance with the laws of 
              India. Any disputes arising from these terms shall be subject to the exclusive 
              jurisdiction of the courts in India.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Use, please contact us at: 
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

export default TermsOfUse;
