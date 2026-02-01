import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { useContent } from '../hooks/useContent';
import BrahMoID3D from './BrahMoID3D';
import './HeroSlider.css';

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const { content, loading } = useContent('home/hero.md');

  // Parse slides from content
  const slides = React.useMemo(() => {
    if (!content) {
      // Fallback to default content
      return [
        {
          title: "Rebuilding Indian Governance from the Ground Up",
          subtitle: "Take control of your democracy today",
          description: "Advanced leader? Total beginner? Now you can manage governance, engage citizens, and more with comprehensive transparency tools in one secure solution.",
          id: 1
        },
        {
          title: "Upgrading Legacy Democracy with Digital Innovation",
          subtitle: "Don't trust, verify",
          description: "BrahMoID's secure governance platform makes it easier for you to protect and manage your democratic participation with complete transparency.",
          id: 2
        },
        {
          title: "Tackling Corruption Through Transparency and Accountability",
          subtitle: "Your governance. Your rules. Your future.",
          description: "Industry-leading transparency, absolute ease of use, and all-in-one connectivity for modern political leadership.",
          id: 3
        }
      ];
    }

    // Parse slides from markdown content
    const slide1 = content['Slide 1'] || {};
    const slide2 = content['Slide 2'] || {};
    const slide3 = content['Slide 3'] || {};

    return [
      {
        title: slide1.title || "Rebuilding Indian Governance from the Ground Up",
        subtitle: slide1.subtitle || "Take control of your democracy today",
        description: slide1.description || "Advanced leader? Total beginner? Now you can manage governance, engage citizens, and more with comprehensive transparency tools in one secure solution.",
        id: 1
      },
      {
        title: slide2.title || "Upgrading Legacy Democracy with Digital Innovation",
        subtitle: slide2.subtitle || "Don't trust, verify",
        description: slide2.description || "BrahMoID's secure governance platform makes it easier for you to protect and manage your democratic participation with complete transparency.",
        id: 2
      },
      {
        title: slide3.title || "Tackling Corruption Through Transparency and Accountability",
        subtitle: slide3.subtitle || "Your governance. Your rules. Your future.",
        description: slide3.description || "Industry-leading transparency, absolute ease of use, and all-in-one connectivity for modern political leadership.",
        id: 3
      }
    ];
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
          <Link to="/partner" className="btn btn-primary">
            <span>Start a Pilot</span>
          </Link>
          <Link to="/partner" className="btn btn-primary">
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
