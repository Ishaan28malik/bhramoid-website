import React from 'react';
import { useContent } from '../hooks/useContent';
import MarkdownContent from '../components/MarkdownContent';
import './Page.css';
import './Team.css';

const Team = () => {
  const { content, loading, error } = useContent('team.md');

  if (loading) {
    return (
      <div className="page page-team">
        <div className="container">
          <h1 className="page-title">Our Team</h1>
          <p className="section-loading">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="page page-team">
        <div className="container">
          <h1 className="page-title">Our Team</h1>
          <p>Unable to load content.</p>
        </div>
      </div>
    );
  }

  const sections = Object.entries(content);

  return (
    <div className="page page-team content-page">
      <div className="container">
        <h1 className="page-title">Our Team</h1>

        <div className="team-blocks">
          {sections.map(([sectionName, section]) => (
            <div key={sectionName} className="team-block content-block-full">
              <h2 className="team-block-title">{sectionName}</h2>
              {(section.body || section.content) && (
                <div className="team-block-body">
                  <MarkdownContent content={section.body || section.content} />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Team;
