/**
 * Content Loader Utility
 * Loads content from markdown files in the content folder
 */

// Cache for loaded content
const contentCache = {};

/**
 * Load markdown content from a file
 * @param {string} path - Path to the markdown file (relative to /content/)
 * @returns {Promise<string>} - Markdown content as string
 */
export const loadMarkdown = async (path) => {
  // Check cache first
  if (contentCache[path]) {
    return contentCache[path];
  }

  try {
    // In production, content files are in public/content; encode path segments for spaces/special chars
    const encodedPath = path.split('/').map(segment => encodeURIComponent(segment)).join('/');
    const fullPath = `/content/${encodedPath}`;
    const response = await fetch(fullPath);
    
    if (!response.ok) {
      throw new Error(`Failed to load content: ${path} (${response.status})`);
    }
    
    const content = await response.text();
    contentCache[path] = content;
    return content;
  } catch (error) {
    console.error(`Error loading content from ${path}:`, error);
    return null;
  }
};

/**
 * Parse structured content from markdown
 * Supports our custom format with sections and key-value pairs
 * @param {string} markdown - Markdown content
 * @returns {Object} - Parsed structured data
 */
export const parseStructuredContent = (markdown) => {
  if (!markdown) return {};

  const sections = {};
  let currentSection = null;

  const lines = markdown.split('\n');

  lines.forEach((line, index) => {
    const trimmedLine = line.trim();
    
    // Skip empty lines
    if (!trimmedLine) return;

    // Section header (##)
    if (trimmedLine.startsWith('## ')) {
      const sectionName = trimmedLine.substring(3).trim();
      currentSection = sectionName;
      sections[currentSection] = {};
    }
    // Key-value pairs (key: value)
    else if (trimmedLine.includes(':') && currentSection && !trimmedLine.startsWith('-')) {
      const colonIndex = trimmedLine.indexOf(':');
      const key = trimmedLine.substring(0, colonIndex).trim();
      let value = trimmedLine.substring(colonIndex + 1).trim();
      
      // Remove quotes if present
      if ((value.startsWith('"') && value.endsWith('"')) || 
          (value.startsWith("'") && value.endsWith("'"))) {
        value = value.slice(1, -1);
      }
      
      // Initialize problems/items as array so following list items are collected
      if ((key === 'problems' || key === 'items') && !value) {
        value = [];
      }
      sections[currentSection][key] = value;
    }
    // List items (starting with -)
    else if (trimmedLine.startsWith('- ') && currentSection) {
      let item = trimmedLine.substring(2).trim();
      if ((item.startsWith('"') && item.endsWith('"')) || (item.startsWith("'") && item.endsWith("'"))) {
        item = item.slice(1, -1);
      }
      // Determine if it's problems or items list
      if (sections[currentSection].problems) {
        if (!Array.isArray(sections[currentSection].problems)) {
          sections[currentSection].problems = [];
        }
        sections[currentSection].problems.push(item);
      } else if (sections[currentSection].items) {
        if (!Array.isArray(sections[currentSection].items)) {
          sections[currentSection].items = [];
        }
        sections[currentSection].items.push(item);
      } else {
        // Default to items
        sections[currentSection].items = sections[currentSection].items || [];
        sections[currentSection].items.push(item);
      }
    }
    // Paragraph / body content (lines that are not ##, key:, or -)
    else if (currentSection) {
      const body = (sections[currentSection].body || '') + trimmedLine + '\n';
      sections[currentSection].body = body;
    }
  });

  // Trim body fields
  Object.keys(sections).forEach((key) => {
    if (sections[key].body) {
      sections[key].body = sections[key].body.trim();
    }
  });

  return sections;
};

/**
 * Load and parse structured content
 * @param {string} path - Path to the markdown file (relative to content/)
 * @returns {Promise<Object>} - Parsed structured content
 */
export const loadStructuredContent = async (path) => {
  const markdown = await loadMarkdown(path);
  if (!markdown) {
    console.warn(`No content loaded from ${path}, returning empty object`);
    return {};
  }
  return parseStructuredContent(markdown);
};

/**
 * Clear content cache (useful for development)
 */
export const clearContentCache = () => {
  Object.keys(contentCache).forEach(key => delete contentCache[key]);
};
