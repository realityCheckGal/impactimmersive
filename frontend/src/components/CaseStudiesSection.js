import React from 'react';

const CaseStudiesSection = () => (
  <section id="case-studies" className="case-studies-section">
    {/* Purple header section with title */}
    <div className="case-studies-header">
      <div className="container">
        <h2 className="case-studies-title">Case Studies</h2>
      </div>
    </div>

    {/* Case Study 1: Image Left, Text Right */}
    <div className="case-study-full-width">
      <div className="container">
        <div className="case-study-content-wrapper case-study-image-left">
          <div className="case-study-image">
            <img 
              src="/images/concrete-oasis.png" 
              alt="Concrete Oasis Project"
              loading="lazy"
            />
          </div>
          <div className="case-study-text">
            <div className="project-header">
              <span className="project-label">Project</span>
              <div className="orange-line"></div>
            </div>
            <h3>Concrete Oasis</h3>
            <p>Augmented reality will transform Pershing Square Park into a flourishing oasis. AR Experiences will be installed throughout the park that will educate the public about the water crisis, including facts about LA's water sources, the devastating impact on ecosystems when water is diverted from its natural flow, and revolutionary water technologies.</p>
            <p className="case-study-impact">It's designed to inspire collective action toward a sustainable water future.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Purple separator line */}
    <div className="case-study-separator"></div>

    {/* Case Study 2: Text Left, Image Right */}
    <div className="case-study-full-width">
      <div className="container">
        <div className="case-study-content-wrapper case-study-text-left">
          <div className="case-study-text">
            <div className="project-header">
              <span className="project-label">Project</span>
              <div className="orange-line"></div>
            </div>
            <h3>Flowrish</h3>
            <p>Flowrish is a mobile app that helps local residents visualize native plants placed in their landscape, seen with augmented reality.</p>
            <p>By replacing non-native species with native ones, our water supply can be maximized, the ecosystem can be restored, and native species can return to thrive. This helps to heal the watershed and puts the flow back into the rivers.</p>
          </div>
          <div className="case-study-image">
            <img 
              src="/images/flowrish.png" 
              alt="Flowrish Project"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>

    {/* Purple separator line */}
    <div className="case-study-separator"></div>

    {/* Case Study 3: Image Left, Text Right */}
    <div className="case-study-full-width">
      <div className="container">
        <div className="case-study-content-wrapper case-study-image-left">
          <div className="case-study-image">
            <img 
              src="/images/emergent-virtues.png" 
              alt="Emergent Virtues Project"
              loading="lazy"
            />
          </div>
          <div className="case-study-text">
            <div className="project-header">
              <span className="project-label">Project</span>
              <div className="orange-line"></div>
            </div>
            <h3>Emergent Virtues</h3>
            <p>Emergent Virtues was an AR networking app designed to incite conversation about potential futures shaped by emerging technologies. Participant badges included a QR code that when scanned displayed an object representing one of six virtues necessary for society to create a positive future.</p>
            <p>To encourage interaction with each other, participants were prompted to collect all six objects, or virtues. The day concluded with a panel discussion among the creators of the objects representing the six virtues.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default CaseStudiesSection;
