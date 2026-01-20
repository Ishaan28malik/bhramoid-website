import React from 'react';
import './Page.css';

const About = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">About Us</h1>
        
        <div className="content-blocks">
          <div className="content-block-full">
            <h2>Our Mission</h2>
            <p>
              BrahMoID is a governance-technology platform dedicated to rebuilding Indian governance 
              from the ground up. We provide political leaders with cutting-edge tools for transparent, 
              accountable, and citizen-centric governance. Our mission is to upgrade legacy democracy 
              with digital innovation, tackling corruption through transparency and accountability.
            </p>
          </div>

          <div className="content-block-full">
            <h2>Our Vision</h2>
            <p>
              We envision a future where every political leader has access to professional governance 
              infrastructure that enables transparent service delivery, citizen engagement, and 
              accountable public administration. We believe that technology can transform governance 
              without compromising democratic values or political independence.
            </p>
          </div>

          <div className="content-block-full">
            <h2>Our Values</h2>
            <p>
              <strong>Transparency:</strong> We believe in complete transparency in governance processes 
              and our own operations.<br/><br/>
              <strong>Independence:</strong> We operate independently of any political party or corporate 
              interest, serving all leaders committed to good governance.<br/><br/>
              <strong>Accountability:</strong> We hold ourselves and our platform users accountable to 
              the highest standards of public service.<br/><br/>
              <strong>Innovation:</strong> We continuously innovate to provide the most effective 
              governance technology solutions.
            </p>
          </div>

          <div className="content-block-full">
            <h2>What We Do</h2>
            <p>
              BrahMoID provides a comprehensive governance platform that includes grievance management, 
              RTI processing, citizen feedback systems, project tracking, performance analytics, and 
              transparency portals. We enable political leaders to deliver effective governance while 
              maintaining complete transparency and accountability to their constituents.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
