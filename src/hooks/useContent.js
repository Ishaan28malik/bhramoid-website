import { useState, useEffect } from 'react';
import { loadStructuredContent, loadMarkdown } from '../utils/contentLoader';

/**
 * Custom hook to load and use structured content from markdown files
 * @param {string} contentPath - Relative path to content file
 * @returns {Object} - { content, loading, error }
 */
export const useContent = (contentPath) => {
  const [content, setContent] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadContent = async () => {
      try {
        setLoading(true);
        const data = await loadStructuredContent(contentPath);
        setContent(data);
        setError(null);
      } catch (err) {
        console.error(`Error loading content from ${contentPath}:`, err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    loadContent();
  }, [contentPath]);

  return { content, loading, error };
};

/**
 * Custom hook to load raw markdown (for full-document pages like policies, career, CTAs)
 * @param {string} contentPath - Relative path to markdown file (e.g. "Policies/privacy-policy.md")
 * @returns {Object} - { markdown, loading, error }
 */
export const useMarkdown = (contentPath) => {
  const [markdown, setMarkdown] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const text = await loadMarkdown(contentPath);
        setMarkdown(text);
        setError(null);
      } catch (err) {
        console.error(`Error loading markdown from ${contentPath}:`, err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [contentPath]);

  return { markdown, loading, error };
};

export default useContent;
