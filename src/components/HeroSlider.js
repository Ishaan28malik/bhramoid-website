import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import BrahMoID3D from './BrahMoID3D';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { content, loading, error } = useContent('home/hero.md');

  // Default slides (fallback) – match hero.md
  const defaultSlides = [
    { title: "Political Culture Shift / Merit & Performance", subtitle: "Changing the Way Politics Works in India", description: "Replacing caste and cash politics with merit, accountability, and performance-driven leadership.", id: 1 },
    { title: "Digital Democracy & Participation", subtitle: "Upgrading Legacy Democracy with Digital Innovation", description: "From paper-based administration to real-time citizen participation across villages, towns, and cities.", id: 2 },
    { title: "Anti-Corruption & Transparency", subtitle: "Tacking Corruption Through Transparency and Accountability", description: "Every rupee tracked. Every project verified. Every leader answerable.", id: 3 },
    { title: "National Vision / Transformation", subtitle: "From Developing to Developed -- The Journey Starts from the Group Up", description: "From Panchayat to Parliament, we are rebuilding governance so that it can be seen, measured, and trusted.", id: 4 },
    { title: "Identity & Future Governance", subtitle: "Digital identity as the Foundation of Modern Governance", description: "Unified citizen identity that powers insights, inclusion, and trustworthy decision-making.", id: 5 }
  ];

  // Parse slides from content (supports Slide 1 through Slide 5 from home/hero.md)
  const slides = React.useMemo(() => {
    if (!content) return defaultSlides;
    return [1, 2, 3, 4, 5].map((i) => {
      const key = `Slide ${i}`;
      const slideContent = content[key];
      const fallback = defaultSlides[i - 1];
      return {
        title: (slideContent && slideContent.title) || fallback.title,
        subtitle: (slideContent && slideContent.subtitle) || fallback.subtitle,
        description: (slideContent && slideContent.description) || fallback.description,
        id: i
      };
    });
  }, [content]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isPaused, slides.length]);

  if (loading) {
    return <div className="hero-slider loading">Loading...</div>;
  }

  return (
    <div 
      className="hero-slider"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="hero-background-pattern"></div>
      
      <div className="slider-container">
        <AnimatePresence mode="wait">
          {slides.map((slide, index) => (
            index === currentSlide && (
              <motion.div
                key={slide.id}
                className="slide active"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
              >
                <div className="slide-content">
                  <motion.div
                    className="slide-subtitle"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    {slide.subtitle}
                  </motion.div>
                  <motion.h1 
                    className="slide-title"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h1>
                  <motion.p 
                    className="slide-description"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                  >
                    {slide.description}
                  </motion.p>
                </div>
              </motion.div>
            )
          ))}
        </AnimatePresence>
      </div>

      {/* 3D Model Section */}
      <div className="hero-3d-model">
        <BrahMoID3D model={2} />
      </div>

      {/* Static CTA - Always visible */}
      <motion.div 
        className="hero-cta"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <div className="cta-container">
          <Link to="/start-a-pilot" className="btn btn-primary">
            <span>Start a Pilot</span>
          </Link>
          <Link to="/request-a-demo" className="btn btn-primary">
            <span>Request a Demo</span>
          </Link>
          <Link to="/partner" className="btn btn-secondary">
            <span>Partner With Us</span>
          </Link>
        </div>
      </motion.div>

      {/* Slide indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7"/>
        </svg>
      </motion.div>
    </div>
  );
};

export default HeroSlider;
