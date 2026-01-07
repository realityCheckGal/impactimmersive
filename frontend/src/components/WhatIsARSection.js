import React from 'react';

const WhatIsARSection = () => (
  <section id="what-is-ar" className="what-is-ar-section">
    <div className="container">
      <div className="ar-content">
        <div className="ar-image">
          <img 
            src="/images/what-is-ar-background.jpg" 
            alt="Person using AR technology"
            loading="lazy"
          />
        </div>
        <div className="ar-text">
          <h2 className="section-title">What is Augmented Reality?</h2>
          <p>
            Augmented Reality (AR) is a technology that combines the real world with computer-generated elements. It overlays digital information, such as images, 360° sound, or 3D models, onto the physical world, typically through the use of a smartphone, tablet, or specialized AR glasses.
          </p>
          <p>
            Because virtual elements appear as if they are part of the physical environment, it allows users to interact with and manipulate virtual objects in real-time and 3D-space. These enhancements can provide valuable information, enjoyable entertainment, or unlock new educational possibilities.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default WhatIsARSection;
