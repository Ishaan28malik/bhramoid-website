import React, { useState, useEffect } from 'react';
import { useMarkdown } from '../hooks/useContent';
import MarkdownContent from './MarkdownContent';
import './CookieConsent.css';

const CookieConsent = () => {
  const [showBanner, setShowBanner] = useState(false);
  const [showPanel, setShowPanel] = useState(false);
  const [activeTab, setActiveTab] = useState('policy'); // 'policy' | 'preferences'
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });
  const { markdown: policyMarkdown, loading: policyLoading } = useMarkdown('Policies/cookie-policy.md');

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowBanner(true);
    } else {
      try {
        const saved = JSON.parse(consent);
        setPreferences(saved);
      } catch (_) {}
    }
  }, []);

  const close = () => {
    setShowBanner(false);
    setShowPanel(false);
  };

  const handleAcceptAll = () => {
    const all = { essential: true, analytics: true, marketing: true };
    setPreferences(all);
    localStorage.setItem('cookieConsent', JSON.stringify(all));
    close();
  };

  const handleRejectAll = () => {
    const essential = { essential: true, analytics: false, marketing: false };
    setPreferences(essential);
    localStorage.setItem('cookieConsent', JSON.stringify(essential));
    close();
  };

  const handleSavePreferences = () => {
    localStorage.setItem('cookieConsent', JSON.stringify(preferences));
    close();
  };

  if (!showBanner && !showPanel) return null;

  return (
    <>
      {showBanner && !showPanel && (
        <div className="cookie-banner-new" role="dialog" aria-label="Cookie consent">
          <div className="cookie-banner-inner">
            <div className="cookie-banner-icon">🍪</div>
            <div className="cookie-banner-copy">
              <h3 className="cookie-banner-title">We value your privacy</h3>
              <p className="cookie-banner-desc">
                We use cookies to run the site and improve your experience. You can accept all, 
                reject non-essential, or read our full Cookie Policy and choose what you allow.
              </p>
            </div>
            <div className="cookie-banner-actions">
              <button type="button" className="cookie-btn cookie-btn-ghost" onClick={handleRejectAll}>
                Reject non-essential
              </button>
              <button type="button" className="cookie-btn cookie-btn-secondary" onClick={() => setShowPanel(true)}>
                Cookie Policy & preferences
              </button>
              <button type="button" className="cookie-btn cookie-btn-primary" onClick={handleAcceptAll}>
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}

      {showPanel && (
        <div className="cookie-panel-overlay" onClick={() => setShowPanel(false)} role="presentation">
          <div className="cookie-panel" onClick={e => e.stopPropagation()} role="dialog" aria-labelledby="cookie-panel-title">
            <div className="cookie-panel-header">
              <h2 id="cookie-panel-title">Cookie Policy & Preferences</h2>
              <button type="button" className="cookie-panel-close" onClick={() => setShowPanel(false)} aria-label="Close">×</button>
            </div>
            <div className="cookie-panel-tabs">
              <button
                type="button"
                className={`cookie-tab ${activeTab === 'policy' ? 'active' : ''}`}
                onClick={() => setActiveTab('policy')}
              >
                Cookie Policy
              </button>
              <button
                type="button"
                className={`cookie-tab ${activeTab === 'preferences' ? 'active' : ''}`}
                onClick={() => setActiveTab('preferences')}
              >
                Preferences
              </button>
            </div>
            <div className="cookie-panel-body">
              {activeTab === 'policy' && (
                <div className="cookie-policy-embed">
                  {policyLoading && <p className="cookie-loading">Loading Cookie Policy…</p>}
                  {!policyLoading && policyMarkdown && (
                    <MarkdownContent content={policyMarkdown} className="cookie-policy-content" />
                  )}
                </div>
              )}
              {activeTab === 'preferences' && (
                <div className="cookie-preferences-new">
                  <p className="cookie-pref-intro">
                    Choose which cookies you allow. Essential cookies are required for the site to work.
                  </p>
                  <div className="cookie-pref-item">
                    <div className="cookie-pref-label">
                      <strong>Essential</strong>
                      <span>Required for the site to function</span>
                    </div>
                    <span className="cookie-pref-badge">Always on</span>
                  </div>
                  <div className="cookie-pref-item">
                    <div className="cookie-pref-label">
                      <strong>Analytics</strong>
                      <span>Help us understand how the site is used</span>
                    </div>
                    <label className="cookie-toggle">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={e => setPreferences(p => ({ ...p, analytics: e.target.checked }))}
                      />
                      <span className="cookie-toggle-slider" />
                    </label>
                  </div>
                  <div className="cookie-pref-item">
                    <div className="cookie-pref-label">
                      <strong>Marketing</strong>
                      <span>Used for relevant messaging (we do not sell data)</span>
                    </div>
                    <label className="cookie-toggle">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={e => setPreferences(p => ({ ...p, marketing: e.target.checked }))}
                      />
                      <span className="cookie-toggle-slider" />
                    </label>
                  </div>
                </div>
              )}
            </div>
            <div className="cookie-panel-footer">
              <button type="button" className="cookie-btn cookie-btn-ghost" onClick={handleRejectAll}>
                Reject non-essential
              </button>
              {activeTab === 'preferences' ? (
                <button type="button" className="cookie-btn cookie-btn-primary" onClick={handleSavePreferences}>
                  Save preferences
                </button>
              ) : (
                <button type="button" className="cookie-btn cookie-btn-primary" onClick={handleAcceptAll}>
                  Accept all
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CookieConsent;
