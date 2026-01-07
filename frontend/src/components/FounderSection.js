import React from 'react';

const FounderSection = () => (
  <section id="founder" className="founder-section">
    <div className="container">
      <div className="founder-content">
        <div className="founder-image">
          <img 
            src="/images/founder.png" 
            alt="Suzan Oslin - Founder"
            loading="lazy"
          />
        </div>
        <div className="founder-info">
          <div className="founder-header">
            <span className="founder-label">Founder</span>
            <div className="founder-orange-line"></div>
          </div>
          <h3>Suzan Oslin</h3>
          <p>
            Suzan Oslin is an award-winning visionary leader in the augmented reality industry. She is a creative technologist with more than 30 years in design, technology, and team management at companies including Disney, Warner Brothers, and Technicolor. Suzan is passionate about bringing together diverse teams to create projects with a positive social impact.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default FounderSection;
