import React from 'react';
import './Comparison.css';

const ComparisonIPAC = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">BrahMoID vs IPAC</h1>
        
        <div className="comparison-intro">
          <p>
            This comparison clarifies the fundamental difference between BrahMoID's governance 
            accountability platform and IPAC's political consulting services.
          </p>
        </div>

        <div className="comparison-content">
          <div className="comparison-section">
            <h2>Core Function</h2>
            <div className="comparison-blocks">
              <div className="comparison-block">
                <h3>BrahMoID</h3>
                <p>
                  <strong>Governance Accountability Platform:</strong> BrahMoID provides technology 
                  infrastructure for transparent, accountable governance. We focus on enabling 
                  political leaders to deliver effective public service with complete transparency 
                  and citizen engagement.
                </p>
                <ul>
                  <li>Grievance management systems</li>
                  <li>RTI processing and transparency</li>
                  <li>Citizen feedback and engagement</li>
                  <li>Project tracking and accountability</li>
                  <li>Performance analytics</li>
                </ul>
              </div>
              <div className="comparison-block">
                <h3>IPAC</h3>
                <p>
                  <strong>Political Consulting Firm:</strong> IPAC provides strategic consulting, 
                  campaign management, and electoral services. They focus on helping political 
                  parties and candidates win elections through data-driven campaign strategies.
                </p>
                <ul>
                  <li>Campaign strategy and management</li>
                  <li>Electoral data analysis</li>
                  <li>Voter outreach and mobilization</li>
                  <li>Media and communication strategy</li>
                  <li>Election campaign execution</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="comparison-section">
            <h2>Primary Focus</h2>
            <div className="comparison-blocks">
              <div className="comparison-block">
                <h3>BrahMoID</h3>
                <p>
                  <strong>Governance Excellence:</strong> Our platform is designed to help leaders 
                  excel in governance by providing tools for transparency, accountability, and 
                  citizen engagement. We focus on what happens after elections—effective governance 
                  delivery.
                </p>
              </div>
              <div className="comparison-block">
                <h3>IPAC</h3>
                <p>
                  <strong>Electoral Success:</strong> IPAC focuses on winning elections through 
                  strategic campaign management, data analysis, and voter mobilization. Their 
                  primary goal is electoral victory for their clients.
                </p>
              </div>
            </div>
          </div>

          <div className="comparison-section">
            <h2>Service Delivery</h2>
            <div className="comparison-blocks">
              <div className="comparison-block">
                <h3>BrahMoID</h3>
                <p>
                  <strong>Technology Platform:</strong> We provide a software platform that leaders 
                  use to manage governance processes. Our services are ongoing, supporting leaders 
                  throughout their term in office.
                </p>
              </div>
              <div className="comparison-block">
                <h3>IPAC</h3>
                <p>
                  <strong>Consulting Services:</strong> IPAC provides consulting services, campaign 
                  management, and strategic advice. Their engagement is typically project-based, 
                  focused on specific elections or campaigns.
                </p>
              </div>
            </div>
          </div>

          <div className="comparison-section">
            <h2>Independence and Neutrality</h2>
            <div className="comparison-blocks">
              <div className="comparison-block">
                <h3>BrahMoID</h3>
                <p>
                  <strong>Platform Neutrality:</strong> BrahMoID operates as an independent platform 
                  available to all political leaders regardless of party affiliation. We maintain 
                  strict neutrality and do not engage in partisan activities.
                </p>
              </div>
              <div className="comparison-block">
                <h3>IPAC</h3>
                <p>
                  <strong>Client-Specific Services:</strong> IPAC works with specific political 
                  parties and candidates as clients. Their services are tailored to their clients' 
                  electoral objectives and political strategies.
                </p>
              </div>
            </div>
          </div>

          <div className="comparison-section">
            <h2>Key Distinction</h2>
            <div className="key-distinction">
              <p>
                <strong>BrahMoID is a governance accountability platform</strong> that helps political 
                leaders deliver transparent, effective governance. <strong>IPAC is a political 
                consulting firm</strong> that helps parties and candidates win elections. While both 
                operate in the political space, they serve fundamentally different purposes: 
                BrahMoID focuses on governance excellence, while IPAC focuses on electoral success.
              </p>
              <p>
                These are complementary, not competing services. A political leader might use IPAC 
                for campaign management and BrahMoID for governance delivery, addressing different 
                aspects of political leadership.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComparisonIPAC;
