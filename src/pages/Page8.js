import React from 'react';
import './Page.css';

const Page8 = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Whom Do We Serve</h1>
        
        <div className="serve-blocks">
          <div className="serve-block">
            <h2>Elected Representatives</h2>
            <p>
              MLAs, MPs, and other elected officials who want to deliver transparent, accountable 
              governance to their constituents. BrahMoID provides the tools to manage grievances, 
              track projects, engage with citizens, and demonstrate performance.
            </p>
          </div>

          <div className="serve-block">
            <h2>Political Leaders</h2>
            <p>
              Emerging and established political leaders seeking to build credibility through 
              transparent governance practices. Our platform helps leaders demonstrate integrity, 
              track performance, and build trust with voters.
            </p>
          </div>

          <div className="serve-block">
            <h2>Political Parties</h2>
            <p>
              Political parties looking to provide their candidates and leaders with professional 
              governance infrastructure. BrahMoID enables parties to ensure consistent, transparent 
              service delivery across all their representatives.
            </p>
          </div>

          <div className="serve-block">
            <h2>Government Departments</h2>
            <p>
              Government departments and agencies seeking to improve citizen service delivery, 
              enhance transparency, and streamline grievance resolution processes. Our platform 
              integrates seamlessly with existing government systems.
            </p>
          </div>

          <div className="serve-block">
            <h2>Citizens and Civil Society</h2>
            <p>
              Citizens who want to engage with their representatives, file grievances, access 
              information, and hold leaders accountable. Civil society organizations working to 
              promote transparency and accountability in governance.
            </p>
          </div>

          <div className="serve-block">
            <h2>Panchayats and Local Bodies</h2>
            <p>
              Local governance bodies, panchayats, and municipal corporations seeking to modernize 
              their operations, improve citizen engagement, and enhance transparency in local 
              governance processes.
            </p>
          </div>
        </div>

        <div className="serve-message-strip">
          <h2>Democracy Served, Not Sold</h2>
          <p>
            BrahMoID serves anyone committed to transparent, accountable governance—regardless of 
            political affiliation, ideology, or position. We believe that effective governance 
            technology should be accessible to all who serve the public interest.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Page8;
