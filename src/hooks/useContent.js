import { useState, useEffect } from 'react';
import { loadStructuredContent } from '../utils/contentLoader';

/**
 * Custom hook to load and use content from markdown files
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

export default useContent;
