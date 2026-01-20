import React from 'react';
import './Page.css';

const Page2 = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Our Leadership Advancement Framework</h1>
        
        <div className="content-blocks">
          <div className="content-block-full">
            <h2>Comprehensive Governance Tools</h2>
            <p>
              BrahMoID provides a complete suite of governance tools designed to help political 
              leaders excel in their roles. From grievance management to project tracking, from 
              citizen feedback systems to transparency portals, our platform covers every aspect 
              of effective public service delivery.
            </p>
          </div>

          <div className="content-block-full">
            <h2>Performance Tracking and Analytics</h2>
            <p>
              Monitor your governance performance with detailed analytics and reporting. Track 
              response times, resolution rates, citizen satisfaction, and development project 
              progress. Use data-driven insights to improve your service delivery and demonstrate 
              your effectiveness to constituents.
            </p>
          </div>

          <div className="content-block-full">
            <h2>Fair and Transparent Platform</h2>
            <p>
              <strong>Note on Fairness:</strong> BrahMoID is committed to providing equal 
              opportunities to all political leaders regardless of party affiliation. We maintain 
              strict conflict of interest policies to ensure our platform remains neutral and 
              accessible to leaders across the political spectrum. Our technology serves democracy, 
              not any particular political agenda.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page2;
