import React from 'react';
import './Comparison.css';

const ComparisonPanchayat = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">BrahMoID vs My Panchayat App</h1>
        
        <div className="comparison-intro">
          <p>
            This comparison highlights the key differences between BrahMoID's comprehensive 
            governance platform and My Panchayat App's local governance focus.
          </p>
        </div>

        <div className="comparison-tables">
          <div className="comparison-table-wrapper">
            <h2>Platform Scope</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>BrahMoID</th>
                  <th>My Panchayat App</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Governance Level</td>
                  <td>Multi-level (Local to State)</td>
                  <td>Primarily Local/Panchayat</td>
                </tr>
                <tr>
                  <td>Target Users</td>
                  <td>Political Leaders, Parties, Citizens</td>
                  <td>Panchayat Officials, Local Citizens</td>
                </tr>
                <tr>
                  <td>Platform Type</td>
                  <td>Comprehensive Governance Platform</td>
                  <td>Local Governance App</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-table-wrapper">
            <h2>Grievance Management</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>BrahMoID</th>
                  <th>My Panchayat App</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Grievance Filing</td>
                  <td>Advanced with categorization</td>
                  <td>Basic filing system</td>
                </tr>
                <tr>
                  <td>Tracking System</td>
                  <td>Real-time with notifications</td>
                  <td>Basic tracking</td>
                </tr>
                <tr>
                  <td>Escalation Mechanism</td>
                  <td>Automated multi-level escalation</td>
                  <td>Manual escalation</td>
                </tr>
                <tr>
                  <td>Resolution Analytics</td>
                  <td>Comprehensive analytics dashboard</td>
                  <td>Limited reporting</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-table-wrapper">
            <h2>Transparency Features</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>BrahMoID</th>
                  <th>My Panchayat App</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>RTI Management</td>
                  <td>Complete RTI processing system</td>
                  <td>Limited RTI support</td>
                </tr>
                <tr>
                  <td>Project Tracking</td>
                  <td>Real-time project visibility</td>
                  <td>Basic project information</td>
                </tr>
                <tr>
                  <td>Financial Transparency</td>
                  <td>Comprehensive financial tracking</td>
                  <td>Basic financial information</td>
                </tr>
                <tr>
                  <td>Performance Metrics</td>
                  <td>Detailed performance analytics</td>
                  <td>Limited metrics</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-table-wrapper">
            <h2>Citizen Engagement</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>BrahMoID</th>
                  <th>My Panchayat App</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Feedback System</td>
                  <td>Multi-channel feedback collection</td>
                  <td>Basic feedback mechanism</td>
                </tr>
                <tr>
                  <td>Communication Tools</td>
                  <td>Direct leader-citizen communication</td>
                  <td>Limited communication features</td>
                </tr>
                <tr>
                  <td>Citizen Participation</td>
                  <td>Active participation features</td>
                  <td>Basic participation tools</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-table-wrapper">
            <h2>Technology & Integration</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>BrahMoID</th>
                  <th>My Panchayat App</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>API Integration</td>
                  <td>Comprehensive API ecosystem</td>
                  <td>Limited integration options</td>
                </tr>
                <tr>
                  <td>Data Analytics</td>
                  <td>Advanced analytics and insights</td>
                  <td>Basic data reporting</td>
                </tr>
                <tr>
                  <td>Scalability</td>
                  <td>Designed for multi-level scaling</td>
                  <td>Focused on local level</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-table-wrapper">
            <h2>Political Independence</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>BrahMoID</th>
                  <th>My Panchayat App</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Party Affiliation</td>
                  <td>Independent, neutral platform</td>
                  <td>May have government affiliation</td>
                </tr>
                <tr>
                  <td>Accessibility</td>
                  <td>Available to all political leaders</td>
                  <td>May be limited to specific regions</td>
                </tr>
                <tr>
                  <td>Customization</td>
                  <td>Fully customizable per leader</td>
                  <td>Standardized for panchayats</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-table-wrapper">
            <h2>Support & Training</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>BrahMoID</th>
                  <th>My Panchayat App</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Training Programs</td>
                  <td>Comprehensive training and support</td>
                  <td>Basic training materials</td>
                </tr>
                <tr>
                  <td>Customer Support</td>
                  <td>Dedicated support team</td>
                  <td>Limited support channels</td>
                </tr>
                <tr>
                  <td>Documentation</td>
                  <td>Extensive documentation and guides</td>
                  <td>Basic documentation</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="comparison-table-wrapper">
            <h2>Pricing Model</h2>
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Feature</th>
                  <th>BrahMoID</th>
                  <th>My Panchayat App</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Pricing Structure</td>
                  <td>Transparent subscription model</td>
                  <td>May be government-funded</td>
                </tr>
                <tr>
                  <td>Flexibility</td>
                  <td>Flexible plans for different needs</td>
                  <td>Standardized pricing</td>
                </tr>
                <tr>
                  <td>Value Proposition</td>
                  <td>Comprehensive governance platform</td>
                  <td>Focused on local governance</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonPanchayat;
