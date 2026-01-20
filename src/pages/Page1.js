import React from 'react';
import { Link } from 'react-router-dom';
import { ScrollReveal } from '../components/ScrollAnimation';
import './Page.css';

const Page1 = () => {
  return (
    <div className="page">
      <div className="container">
        <ScrollReveal>
          <h1 className="page-title">Your Competitive Edge in Modern Politics</h1>
        </ScrollReveal>
        
        {/* Row 1 */}
        <div className="content-row">
          <ScrollReveal delay={0.1}>
            <div className="content-block">
              <h2>Digital-First Campaign Strategy</h2>
              <p>
                In an era where digital presence determines electoral success, BrahMoID provides 
                political leaders with cutting-edge tools to connect directly with constituents. 
                Our platform enables real-time communication, data-driven decision making, and 
                transparent governance practices that build trust and credibility.
              </p>
              <Link to="/about" className="btn">Learn More</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="content-block">
              <h2>Transparency as a Differentiator</h2>
              <p>
                Voters increasingly demand accountability from their representatives. BrahMoID's 
                transparent governance framework allows leaders to demonstrate integrity, track 
                performance, and build a reputation for honest public service. This transparency 
                becomes your strongest campaign asset.
              </p>
              <Link to="/about" className="btn">Learn More</Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Row 2 */}
        <div className="content-row">
          <ScrollReveal delay={0.3}>
            <div className="content-block">
              <h2>Data-Driven Constituency Management</h2>
              <p>
                Make informed decisions based on real constituency data. Track grievances, monitor 
                development projects, analyze feedback, and respond to citizen needs systematically. 
                This data-driven approach ensures you address the issues that matter most to your voters.
              </p>
              <Link to="/about" className="btn">Learn More</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.4}>
            <div className="content-block">
              <h2>Independent Platform Advantage</h2>
              <p>
                Unlike party-affiliated tools, BrahMoID operates independently, allowing you to 
                maintain your unique political identity while leveraging powerful governance 
                technology. Build your brand and reputation without being constrained by party limitations.
              </p>
              <Link to="/about" className="btn">Learn More</Link>
            </div>
          </ScrollReveal>
        </div>

        {/* Row 3 */}
        <div className="content-row">
          <ScrollReveal delay={0.5}>
            <div className="content-block">
              <h2>Cost-Effective Campaign Infrastructure</h2>
              <p>
                Traditional campaign infrastructure requires significant investment in technology, 
                personnel, and systems. BrahMoID provides a comprehensive governance platform at 
                a fraction of the cost, allowing you to allocate resources more effectively toward 
                direct voter engagement.
              </p>
              <Link to="/about" className="btn">Learn More</Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.6}>
            <div className="content-block">
              <h2>Sustainable Long-Term Engagement</h2>
              <p>
                Elections are won through consistent engagement, not just campaign season activity. 
                BrahMoID enables continuous communication with constituents, building lasting 
                relationships that translate into electoral support when it matters most.
              </p>
              <Link to="/about" className="btn">Learn More</Link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </div>
  );
};

export default Page1;
