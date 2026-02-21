import React from 'react';
import { useMarkdown } from '../hooks/useContent';
import MarkdownContent from './MarkdownContent';
import './MarkdownPage.css';

/**
 * Page that loads a single markdown file from content and renders it.
 * @param {string} contentPath - Path relative to content/ (e.g. "Policies/privacy-policy.md")
 * @param {string} pageTitle - Optional title for the page (shown while loading / as fallback)
 */
const MarkdownPage = ({ contentPath, pageTitle = '' }) => {
  const { markdown, loading, error } = useMarkdown(contentPath);

  if (loading) {
    return (
      <div className="page markdown-page">
        <div className="container">
          {pageTitle && <h1 className="page-title">{pageTitle}</h1>}
          <p className="section-loading">Loading...</p>
        </div>
      </div>
    );
  }

  if (error || !markdown) {
    return (
      <div className="page markdown-page">
        <div className="container">
          {pageTitle && <h1 className="page-title">{pageTitle}</h1>}
          <p>Unable to load content.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="page markdown-page content-page">
      <div className="container">
        <div className="markdown-page-content">
          <MarkdownContent content={markdown} className="markdown-content-rich" />
        </div>
      </div>
    </div>
  );
};

export default MarkdownPage;
