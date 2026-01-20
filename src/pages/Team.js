import React from 'react';
import './Page.css';

const Team = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Our Team</h1>
        
        <div className="content-blocks">
          <div className="content-block-full">
            <h2>Dedicated to Democratic Governance</h2>
            <p>
              Our team consists of technologists, governance experts, and democracy advocates who are 
              committed to transforming how governance works in India. We combine deep technical 
              expertise with understanding of political processes and citizen needs.
            </p>
          </div>

          <div className="content-block-full">
            <h2>Expertise Across Domains</h2>
            <p>
              Our team brings together expertise in software development, data analytics, public 
              administration, political science, and citizen engagement. This multidisciplinary 
              approach ensures that BrahMoID addresses real governance challenges with practical, 
              effective solutions.
            </p>
          </div>

          <div className="content-block-full">
            <h2>Commitment to Neutrality</h2>
            <p>
              Every member of our team is committed to maintaining BrahMoID's independence and 
              neutrality. We serve democracy, not any particular political agenda. Our team members 
              come from diverse backgrounds and political perspectives, united by our commitment to 
              transparent, accountable governance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
