import React from 'react';
import './Page.css';

const Page6 = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Function: BrahMoID vs. Political Party</h1>
        
        <div className="context-strip">
          <div className="context-column">
            <h3>BrahMoID: The Governance Engine</h3>
            <p>
              BrahMoID provides the technology, systems, and infrastructure for effective governance. 
              We are the platform that enables transparency, accountability, and citizen engagement.
            </p>
          </div>
          <div className="context-column">
            <h3>Political Party: The Ideology & Politics</h3>
            <p>
              Political parties provide ideology, policy direction, and political organization. 
              They define the vision and values that guide governance decisions.
            </p>
          </div>
        </div>

        <div className="division-blocks">
          <div className="division-block">
            <h3>BrahMoID Responsibilities</h3>
            <ul>
              <li>Grievance management systems</li>
              <li>RTI request processing</li>
              <li>Citizen feedback collection</li>
              <li>Project tracking and transparency</li>
              <li>Performance analytics and reporting</li>
              <li>Digital infrastructure and tools</li>
            </ul>
          </div>

          <div className="division-block">
            <h3>Political Party Responsibilities</h3>
            <ul>
              <li>Policy formulation and ideology</li>
              <li>Political strategy and campaigning</li>
              <li>Candidate selection and support</li>
              <li>Constituency organization</li>
              <li>Voter mobilization</li>
              <li>Political messaging and communication</li>
            </ul>
          </div>

          <div className="division-block">
            <h3>Shared Responsibilities</h3>
            <ul>
              <li>Citizen engagement and communication</li>
              <li>Development project implementation</li>
              <li>Constituency service delivery</li>
              <li>Public accountability</li>
            </ul>
          </div>

          <div className="division-block">
            <h3>How They Work Together</h3>
            <p>
              BrahMoID provides the governance infrastructure that enables political parties and 
              leaders to deliver on their promises effectively. The party provides the vision; 
              BrahMoID provides the tools to realize that vision with transparency and accountability.
            </p>
          </div>

          <div className="division-block">
            <h3>Independence and Neutrality</h3>
            <p>
              BrahMoID operates independently of any political party, ensuring that our governance 
              tools are available to all leaders regardless of affiliation. This independence 
              ensures that our platform remains focused on governance excellence rather than 
              partisan interests.
            </p>
          </div>

          <div className="division-block">
            <h3>Complementary, Not Competing</h3>
            <p>
              BrahMoID and political parties serve complementary roles. Parties focus on politics, 
              ideology, and electoral strategy. BrahMoID focuses on governance infrastructure, 
              transparency, and citizen engagement. Together, they enable effective democratic governance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
