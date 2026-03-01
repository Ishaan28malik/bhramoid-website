import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { ScrollReveal } from '../components/ScrollAnimation';
import { useContent } from '../hooks/useContent';
import MarkdownContent from '../components/MarkdownContent';
import './Home.css';

const SECTION_FILES = {
  section1: 'home/section1-competitive-edge.md',
  section3: 'home/section2-reform.md',
  section4: 'home/section4-transformation.md',
};

const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

// Trim body to only landing content: remove "### Summary" heading and content after --- or ===
const trimSection1Body = (raw) => {
  if (!raw || typeof raw !== 'string') return '';
  let s = raw.replace(/^###\s*Summary\s*\n*/i, '').trim();
  const sep = s.match(/\n---\s*\n|\n=+\s*\n/);
  if (sep) s = s.slice(0, sep.index).trim();
  return s;
};

// Trim solution text to stop at --- or LEARN MORE DETAIL PAGES
const trimSolution = (raw) => {
  if (!raw || typeof raw !== 'string') return '';
  const sep = raw.match(/\n---\s*\n|\n=+\s*\n|LEARN MORE DETAIL PAGES/i);
  return sep ? raw.slice(0, sep.index).trim() : raw.trim();
};

const Home = () => {
  const s1 = useContent(SECTION_FILES.section1);
  const s3 = useContent(SECTION_FILES.section3);
  const s4 = useContent(SECTION_FILES.section4);

  // Section 1: first 5 sections are landing blocks (file order); support **key** or key
  const section1Entries = s1.content ? Object.entries(s1.content) : [];
  const section1Blocks = section1Entries.slice(0, 5);
  // Section 3 Reform: first 4 sections are landing blocks
  const section3Entries = s3.content ? Object.entries(s3.content) : [];
  const section3Blocks = section3Entries.slice(0, 4);
  const section4Blocks = s4.content ? Object.entries(s4.content) : [];

  return (
    <div className="home">
      {/* 1. Sliders */}
      <HeroSlider />

      {/* 2. Competitive Edge */}
      <section className="home-section section-competitive">
        <div className="section-graphic section-graphic-1"></div>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Your Competitive Edge in Modern Politics</h2>
          </ScrollReveal>
          {s1.loading && <p className="section-loading">Loading...</p>}
          {!s1.loading && section1Blocks.length > 0 && (
            <div className="section-competitive-grid">
              {section1Blocks.map(([_, block], i) => {
                const title = block.title || block['**title**'];
                const icon = block.icon || block['**icon**'];
                const rawContent = block.content || block.body || '';
                const content = rawContent ? trimSection1Body(rawContent) : '';
                const learnMoreSlug = block.learn_more_slug || block['**learn_more_slug**'] || '/about';
                return (
                  <ScrollReveal key={title || i} delay={0.1 * i}>
                    <div className="content-block enhanced-block">
                      {icon && <div className="block-icon">{icon}</div>}
                      <h3>{title}</h3>
                      <div className="content-block-body">
                        {content && <MarkdownContent content={content} />}
                      </div>
                      <div className="block-cta">
                        <Link to={learnMoreSlug} className="btn">Learn More</Link>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 3. Need for Reform in Governance */}
      <section className="home-section section-reform">
        <div className="section-graphic section-graphic-3"></div>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Need for Reform in Governance</h2>
          </ScrollReveal>
          {s3.loading && <p className="section-loading">Loading...</p>}
          {!s3.loading && section3Blocks.length > 0 && (
            <div className="reform-blocks">
              {section3Blocks.map(([sectionName, block], i) => {
                const title = block.title || block['**title**'] || sectionName;
                const icon = block.icon || block['**icon**'];
                const problems = block.problems || block.items || [];
                const rawSolution = block.solution || (block.body && block.body.includes('### Solution') ? block.body.split('### Solution')[1] : '');
                const solution = rawSolution ? trimSolution(rawSolution) : null;
                const learnMoreSlug = block.learn_more_slug || block['**learn_more_slug**'] || '/about';
                return (
                  <ScrollReveal key={title || sectionName || i} delay={0.1 * (i + 1)}>
                    <div className="reform-block enhanced-block">
                      {icon && <div className="reform-icon">{icon}</div>}
                      <h3 className="reform-block-title">{title}</h3>
                      {problems.length > 0 && (
                        <div className="problem-zone">
                          <h4>Problem Zone:</h4>
                          <ul>
                            {problems.map((p, j) => (
                              <li key={j}>{p}</li>
                            ))}
                          </ul>
                        </div>
                      )}
                      <div className="transition-line">
                        <div className="arrow-graphic">→</div>
                      </div>
                      {solution && (
                        <div className="solution-preview">
                          <h4>Solution Preview:</h4>
                          <MarkdownContent content={solution} />
                        </div>
                      )}
                      <div className="block-cta">
                        <Link to={learnMoreSlug} className="btn">Learn More</Link>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          )}
        </div>
      </section>

      {/* 4. Our Governance Transformation Strategy */}
      <section className="home-section section-transformation">
        <div className="section-graphic section-graphic-4"></div>
        <div className="container">
          <ScrollReveal>
            <h2 className="section-title">Our Governance Transformation Strategy</h2>
          </ScrollReveal>
          {s4.loading && <p className="section-loading">Loading...</p>}
          {!s4.loading && section4Blocks.length > 0 && (
            <div className="content-blocks">
              {section4Blocks.map(([_, block], i) => (
                <ScrollReveal key={block.title} delay={0.1 * (i + 1)}>
                  <div className="content-block-full enhanced-block">
                    {block.icon && <div className="block-icon-large">{block.icon}</div>}
                    <h3>{block.title}</h3>
                    {block.content && <MarkdownContent content={block.content} />}
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Home;
