import React from 'react';
import { Link } from 'react-router-dom';
import HeroSlider from '../components/HeroSlider';
import { ScrollReveal } from '../components/ScrollAnimation';
import { useContent } from '../hooks/useContent';
import MarkdownContent from '../components/MarkdownContent';
import './Home.css';

const SECTION_FILES = {
  section1: 'home/section1-competitive-edge.md',
  section3: 'home/section3-reform.md',
  section4: 'home/section4-transformation.md',
};

const chunk = (arr, size) => {
  const result = [];
  for (let i = 0; i < arr.length; i += size) {
    result.push(arr.slice(i, i + size));
  }
  return result;
};

const Home = () => {
  const s1 = useContent(SECTION_FILES.section1);
  const s3 = useContent(SECTION_FILES.section3);
  const s4 = useContent(SECTION_FILES.section4);

  const section1Blocks = s1.content ? Object.entries(s1.content) : [];
  const section3Blocks = s3.content ? Object.entries(s3.content) : [];
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
          {!s1.loading && section1Blocks.length > 0 && chunk(section1Blocks, 2).map((row, rowIndex) => (
            <div key={rowIndex} className="content-row">
              {row.map(([_, block], i) => (
                <ScrollReveal key={block.title} delay={0.1 * (rowIndex * 2 + i)}>
                  <div className="content-block enhanced-block">
                    {block.icon && <div className="block-icon">{block.icon}</div>}
                    <h3>{block.title}</h3>
                    {block.content && <MarkdownContent content={block.content} />}
                    <div className="block-cta">
                      <Link to={block.learn_more_slug || block['**learn_more_slug**'] || '/about'} className="btn">Learn More</Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          ))}
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
              {section3Blocks.map(([_, block], i) => (
                <ScrollReveal key={block.title} delay={0.1 * (i + 1)}>
                  <div className="reform-block enhanced-block">
                    {block.icon && <div className="reform-icon">{block.icon}</div>}
                    <h3>{block.title}</h3>
                    {block.problems && block.problems.length > 0 && (
                      <div className="problem-zone">
                        <h4>Problem Zone:</h4>
                        <ul>
                          {block.problems.map((p, j) => (
                            <li key={j}>{p}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    <div className="transition-line">
                      <div className="arrow-graphic">→</div>
                    </div>
                    {block.solution && (
                      <div className="solution-preview">
                        <h4>Solution Preview:</h4>
                        <MarkdownContent content={block.solution} />
                      </div>
                    )}
                    <div className="block-cta">
                      <Link to={block.learn_more_slug || block['**learn_more_slug**'] || '/about'} className="btn">Learn More</Link>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
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
