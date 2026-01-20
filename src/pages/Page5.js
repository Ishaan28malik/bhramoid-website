import React from 'react';
import './Page.css';

const Page5 = () => {
  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Why Adopt BrahMoID?</h1>
        
        <div className="content-blocks">
          <div className="content-block-full">
            <h2>Proven Model: RSS/BJP Success Story</h2>
            <p>
              Just as the RSS provided organizational infrastructure that enabled BJP's political 
              success, BrahMoID provides governance infrastructure that enables political leaders 
              to excel. We don't dictate ideology or policy—we provide the tools and systems that 
              make effective governance possible, regardless of political affiliation.
            </p>
          </div>

          <div className="content-block-full">
            <h2>Platform Power: Twitter/Trump Analogy</h2>
            <p>
              Twitter didn't create Donald Trump's political message, but it provided the platform 
              that amplified his reach and enabled direct communication with constituents. Similarly, 
              BrahMoID doesn't create your political vision, but it provides the platform that 
              amplifies your governance effectiveness and enables direct engagement with citizens.
            </p>
          </div>

          <div className="content-block-full">
            <h2>Strategic Advantage: I-PAC Model</h2>
            <p>
              I-PAC demonstrated how professional campaign management and data-driven strategies 
              can transform electoral outcomes. BrahMoID applies similar professional standards 
              to governance, providing data-driven tools, systematic processes, and strategic 
              frameworks that help leaders deliver results and build electoral credibility.
            </p>
          </div>

          <div className="content-block-full">
            <h2>Independent and Neutral Platform</h2>
            <p>
              Unlike party-affiliated organizations, BrahMoID operates independently, serving 
              leaders across the political spectrum. This neutrality ensures that our platform 
              remains focused on governance excellence rather than partisan agendas, making it 
              a trusted partner for any political leader committed to transparent, accountable governance.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page5;
