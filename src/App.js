import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import Home from './pages/Home';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Page4 from './pages/Page4';
import Page5 from './pages/Page5';
import Page6 from './pages/Page6';
import Page7 from './pages/Page7';
import Page8 from './pages/Page8';
import About from './pages/About';
import Team from './pages/Team';
import Partner from './pages/Partner';
import ComparisonPanchayat from './pages/ComparisonPanchayat';
import ComparisonIPAC from './pages/ComparisonIPAC';
import PrivacyPolicy from './pages/PrivacyPolicy';
import CookiePolicy from './pages/CookiePolicy';
import TermsOfUse from './pages/TermsOfUse';
import ModelComparison from './components/ModelComparison';
import './App.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="App">
          <Header />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/page1" element={<Page1 />} />
              <Route path="/page2" element={<Page2 />} />
              <Route path="/page3" element={<Page3 />} />
              <Route path="/page4" element={<Page4 />} />
              <Route path="/page5" element={<Page5 />} />
              <Route path="/page6" element={<Page6 />} />
              <Route path="/page7" element={<Page7 />} />
              <Route path="/page8" element={<Page8 />} />
              <Route path="/whom-we-serve" element={<Page8 />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/comparison-panchayat" element={<ComparisonPanchayat />} />
              <Route path="/comparison-ipac" element={<ComparisonIPAC />} />
              <Route path="/privacy-policy" element={<PrivacyPolicy />} />
              <Route path="/cookie-policy" element={<CookiePolicy />} />
              <Route path="/terms-of-use" element={<TermsOfUse />} />
              <Route path="/model-comparison" element={<ModelComparison />} />
            </Routes>
          </main>
          <Footer />
          <CookieConsent />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
