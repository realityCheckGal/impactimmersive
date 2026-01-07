import React, { useState } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleAccept = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookie-consent">
      <div className="cookie-content">
        <p>We use cookies to ensure that we give you the best experience on our website. If you continue to use this site we will assume that you are happy with it.</p>
        <div className="cookie-buttons">
          <button onClick={handleAccept} className="cookie-ok">OK</button>
          <a href="#privacy" className="cookie-policy">Privacy policy</a>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
