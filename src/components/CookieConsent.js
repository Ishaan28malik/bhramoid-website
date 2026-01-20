import React, { useState, useEffect } from 'react';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [preferences, setPreferences] = useState({
    essential: true, // Always true, cannot be disabled
    analytics: false,
    marketing: false
  });

  useEffect(() => {
    // Check if user has already made a choice
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(consent);
      setPreferences(savedPreferences);
    }
  }, []);

  const handleAcceptAll = () => {
    const allAccepted = {
      essential: true,
      analytics: true,
      marketing: true
    };
    setPreferences(allAccepted);
    localStorage.setItem('cookieConsent', JSON.stringify(allAccepted));
    setShowBanner(false);
  };

  const handleRejectAll = () => {
    const onlyEssential = {
      essential: true,
      analytics: false,
      marketing: false
    };
    setPreferences(onlyEssential);
    localStorage.setItem('cookieConsent', JSON.stringify(onlyEssential));
    setShowBanner(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleCustomize = () => {
    setShowPreferences(true);
  };

  if (!showBanner && !showPreferences) {
    return null;
  }

  return (
    <>
      {showBanner && !showPreferences && (
        <div className="cookie-banner">
          <div className="cookie-banner-content">
            <div className="cookie-banner-text">
              <h3>Cookie Consent</h3>
              <p>
                We use cookies to enhance your browsing experience, analyze site traffic, and 
                personalize content. By clicking "Accept All", you consent to our use of cookies. 
                You can customize your preferences or reject non-essential cookies.
              </p>
            </div>
            <div className="cookie-banner-buttons">
              <button className="btn btn-secondary" onClick={handleRejectAll}>
                Reject All
              </button>
              <button className="btn" onClick={handleCustomize}>
                Customize
              </button>
              <button className="btn" onClick={handleAcceptAll}>
                Accept All
              </button>
            </div>
          </div>
        </div>
      )}

      {showPreferences && (
        <div className="cookie-preferences-modal">
          <div className="cookie-preferences-content">
            <div className="cookie-preferences-header">
              <h2>Cookie Preferences</h2>
              <button 
                className="close-button" 
                onClick={() => setShowPreferences(false)}
                aria-label="Close"
              >
                ×
              </button>
            </div>

            <div className="cookie-preferences-body">
              <p>
                Manage your cookie preferences. You can enable or disable different types of cookies 
                below. Essential cookies cannot be disabled as they are necessary for the website to function.
              </p>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div>
                    <h3>Essential Cookies</h3>
                    <p>Required for the website to function properly</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={preferences.essential}
                      disabled
                      readOnly
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <p className="cookie-description">
                  These cookies are necessary for the website to function and cannot be disabled. 
                  They include session management, security, and basic functionality.
                </p>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div>
                    <h3>Analytics Cookies</h3>
                    <p>Help us understand how visitors use our website</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) =>
                        setPreferences({ ...preferences, analytics: e.target.checked })
                      }
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <p className="cookie-description">
                  These cookies collect anonymous information about how you use our website, helping 
                  us improve performance and user experience.
                </p>
              </div>

              <div className="cookie-category">
                <div className="cookie-category-header">
                  <div>
                    <h3>Marketing Cookies</h3>
                    <p>Used to deliver relevant advertisements</p>
                  </div>
                  <label className="toggle-switch">
                    <input
                      type="checkbox"
                      checked={preferences.marketing}
                      onChange={(e) =>
                        setPreferences({ ...preferences, marketing: e.target.checked })
                      }
                    />
                    <span className="toggle-slider"></span>
                  </label>
                </div>
                <p className="cookie-description">
                  These cookies track your browsing habits to deliver personalized advertisements 
                  and measure campaign effectiveness.
                </p>
              </div>

              <div className="cookie-preferences-footer">
                <a href="/cookie-policy" className="cookie-policy-link">
                  Learn more in our Cookie Policy
                </a>
                <div className="cookie-preferences-actions">
                  <button className="btn btn-secondary" onClick={handleRejectAll}>
                    Reject All
                  </button>
                  <button className="btn" onClick={handleSavePreferences}>
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
