import React from 'react';
import { useContent } from '../hooks/useContent';
import MarkdownContent from '../components/MarkdownContent';
import './Page.css';

const Page8 = () => {
  const { content, loading, error } = useContent('whom-we-serve.md');

  if (loading) {
    return (
      <div className="page">
        <div className="container">
          <h1 className="page-title">Whom Do We Serve</h1>
          <p className="section-loading">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !content) {
    return (
      <div className="page">
        <div className="container">
          <h1 className="page-title">Whom Do We Serve</h1>
          <p>Unable to load content.</p>
        </div>
      </div>
    );
  }

  const entries = Object.entries(content);
  const keyMessageSection = entries.length > 0 ? entries[entries.length - 1] : null;
  const serveBlocks = keyMessageSection ? entries.slice(0, -1) : entries;

  return (
    <div className="page">
      <div className="container">
        <h1 className="page-title">Whom Do We Serve</h1>

        <div className="serve-blocks">
          {serveBlocks.map(([sectionName, section]) => (
            <div key={sectionName} className="serve-block">
              <h2>{sectionName}</h2>
              {(section.body || section.content) && (
                <MarkdownContent content={section.body || section.content} />
              )}
            </div>
          ))}
        </div>

        {keyMessageSection && (
          <div className="serve-message-strip">
            <h2>{keyMessageSection[0]}</h2>
            {(keyMessageSection[1].body || keyMessageSection[1].content) && (
              <MarkdownContent content={keyMessageSection[1].body || keyMessageSection[1].content} />
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Page8;
