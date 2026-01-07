import React from 'react';

const HeroSection = ({ scrollToSection }) => (
  <section id="home" className="hero-section">
    <div className="container">
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Public Outreach<br />
            Reimagined
          </h1>
          <p className="hero-description">
            We connect purpose-driven organizations to their community by engaging hearts and minds with the persuasive power of Augmented Reality (AR).
          </p>
          <button 
            className="cta-button"
            onClick={() => scrollToSection('we-know')}
          >
            dive in
          </button>
        </div>
        <div className="hero-image">
          <img 
            src="/images/hero-image.jpg" 
            alt="AR Technology Headset"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
