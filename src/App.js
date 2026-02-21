import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
import About from './pages/About';
import Team from './pages/Team';
import Partner from './pages/Partner';
import PartnerWhomWeServe from './pages/PartnerWhomWeServe';
import PartnerWhyAdopt from './pages/PartnerWhyAdopt';
import PartnerOperatingModel from './pages/PartnerOperatingModel';
import PartnerSpringboard from './pages/PartnerSpringboard';
import PartnerFunding from './pages/PartnerFunding';
import Career from './pages/Career';
import CareerCandidateSelection from './pages/CareerCandidateSelection';
import CareerIncome from './pages/CareerIncome';
import CareerProgressiveLadder from './pages/CareerProgressiveLadder';
import CareerSyllabus from './pages/CareerSyllabus';
import StartAPilot from './pages/StartAPilot';
import RequestDemo from './pages/RequestDemo';
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
              <Route path="/page8" element={<Navigate to="/partner/whom-we-serve" replace />} />
              <Route path="/whom-we-serve" element={<Navigate to="/partner/whom-we-serve" replace />} />
              <Route path="/about" element={<About />} />
              <Route path="/team" element={<Team />} />
              <Route path="/partner" element={<Partner />} />
              <Route path="/partner/whom-we-serve" element={<PartnerWhomWeServe />} />
              <Route path="/partner/why-adopt" element={<PartnerWhyAdopt />} />
              <Route path="/partner/operating-model" element={<PartnerOperatingModel />} />
              <Route path="/partner/springboard" element={<PartnerSpringboard />} />
              <Route path="/partner/funding" element={<PartnerFunding />} />
              <Route path="/career" element={<Career />} />
              <Route path="/career/candidate-selection" element={<CareerCandidateSelection />} />
              <Route path="/career/income" element={<CareerIncome />} />
              <Route path="/career/progressive-ladder" element={<CareerProgressiveLadder />} />
              <Route path="/career/syllabus" element={<CareerSyllabus />} />
              <Route path="/start-a-pilot" element={<StartAPilot />} />
              <Route path="/request-a-demo" element={<RequestDemo />} />
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
