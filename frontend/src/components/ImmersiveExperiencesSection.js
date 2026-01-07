import React from 'react';

const ImmersiveExperiencesSection = ({ scrollToSection }) => (
  <section id="immersive-experiences" className="immersive-experiences-section">
    <div className="container">
      <div className="immersive-content">
        <div className="immersive-text">
          <h2>We create immersive experiences that impact hearts and minds</h2>
          <p>
            Imagine together, we could create a limitless new reality. One where we are profoundly connected to ourselves, the planet, and each other.
          </p>
          <button 
            className="orange-cta-button"
            onClick={() => scrollToSection('contact')}
          >
            Let's make that dream a reality.
          </button>
        </div>
        
        <div className="immersive-image-upper-right">
          <img 
            src="/images/transparent-upper-right.png" 
            alt="Natural growth and connection"
            loading="lazy"
          />
        </div>
        
        <div className="immersive-image-lower-left">
          <img 
            src="/images/transparent-lower-left.png" 
            alt="Team collaboration"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  </section>
);

export default ImmersiveExperiencesSection;
