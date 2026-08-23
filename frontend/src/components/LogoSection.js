import React from 'react';
import partnersLogos from '../assets/images/partners-logos.webp';

const LogoSection = () => (
  <section id="partners" className="logo-section">
    <div className="container">
      <h2 className="logo-section-title">Trusted Partners & Collaborators</h2>
      <div className="partners-image-container">
        <img 
          src={partnersLogos}
          alt="Clients, Partners, and Supporters - Including Disney, Warner Bros, Technicolor, TrueCar, OTIS, Citi, Fandango, Niantic, and more"
          loading="lazy"
          className="partners-full-image"
        />
      </div>
    </div>
  </section>
);

export default LogoSection;
