import React, { useState } from 'react';

const Components = {
  Header: ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => (
    <header className="header">
      <div className="container">
        <div className="nav-brand">
          <h1 onClick={() => scrollToSection('home')}>Impact Immersive</h1>
        </div>
        
        <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-list">
            <li>
              <a 
                href="#services" 
                className={activeSection === 'services' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('services'); }}
              >
                Services
              </a>
            </li>
            <li>
              <a 
                href="#case-studies" 
                className={activeSection === 'case-studies' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('case-studies'); }}
              >
                Case Studies
              </a>
            </li>
            <li>
              <a 
                href="#benefits" 
                className={activeSection === 'benefits' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('benefits'); }}
              >
                Benefits
              </a>
            </li>
            <li>
              <a 
                href="#team" 
                className={activeSection === 'team' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('team'); }}
              >
                Team
              </a>
            </li>
            <li>
              <a 
                href="#contact" 
                className={activeSection === 'contact' ? 'active' : ''}
                onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button 
          className="menu-toggle"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  ),

  HeroSection: ({ scrollToSection }) => (
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
              src="https://images.unsplash.com/photo-1658555012297-edb48f0c2d4c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXR8ZW58MHx8fGJsdWV8MTc1Mjk1NjIyMHww&ixlib=rb-4.1.0&q=85" 
              alt="Grandmother and child using AR technology"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  ),

  WeKnowSection: () => (
    <section id="we-know" className="we-know-section">
      <div className="container">
        <div className="we-know-content">
          <h2 className="we-know-title">
            We Know You care<br />
            deeply.
          </h2>
          
          <div className="we-know-text">
            <p>
              And we understand how important it is for you to connect meaningfully with your community. That's why we specialize in building heartfelt connections between your story and the communities that you serve.
            </p>
            
            <p>
              We reach beyond the status quo to transform traditional communications. Transforming communications into interactive experiences with augmented reality that captivate, educate, and motivate social change in moving and enchanting ways.
            </p>
            
            <p className="tagline">
              It's easy not to care. We make it hard not to.
            </p>
          </div>
        </div>
      </div>
    </section>
  ),

  WhatIsARSection: () => (
    <section id="what-is-ar" className="what-is-ar-section">
      <div className="container">
        <div className="ar-content">
          <div className="ar-image">
            <img 
              src="https://images.unsplash.com/photo-1660100970983-645655a09b3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXR8ZW58MHx8fGJsdWV8MTc1Mjk1NjIyMHww&ixlib=rb-4.1.0&q=85" 
              alt="Person using AR with smartphone"
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
        
        <div className="pain-points">
          <div className="pain-point-questions">
            <p>Do you feel your education methods are outdated and not making the impact you want to make with your communities?</p>
            <p>Or maybe you find you are spending a lot of money on public outreach programs but don't see the value return?</p>
            <p>In this attention economy, do you feel like it's hard to be seen or, worse, left behind?</p>
            <p>Perhaps you want to be seen as a trendsetter...</p>
          </div>
          
          <div className="vision-statement">
            <p>We work with progressive organizations: non-profits, social enterprises, and municipalities who dream big and want to change the world.</p>
            <p>Imagine a world where everyone can follow their dreams and be fully self-expressed. A world accessible to all people, inspiring generations to live in harmony with each other and the ecosystems that sustain all of life.</p>
            <p className="services-intro">Our services help make that dream a reality.</p>
          </div>
        </div>
      </div>
    </section>
  ),

  ServicesSection: () => (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">We create immersive experiences that impact hearts and minds</h2>
        <p className="section-subtitle">
          Imagine together, we could create a limitless new reality. One where we are profoundly connected to ourselves, the planet, and each other.
        </p>
        
        <div className="services-grid">
          <div className="service-card">
            <div className="service-image">
              <img 
                src="https://images.unsplash.com/photo-1660020618837-aea80a4b7d87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXR8ZW58MHx8fGJsdWV8MTc1Mjk1NjIyMHww&ixlib=rb-4.1.0&q=85" 
                alt="Immersive AR Experiences"
                loading="lazy"
              />
            </div>
            <div className="service-content">
              <h3>Immersive AR Experiences</h3>
              <p>Create powerful augmented reality experiences that connect your organization with the community and drive meaningful engagement through interactive storytelling.</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img 
                src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHx0ZWFtJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjAzfDA&ixlib=rb-4.1.0&q=85" 
                alt="Community Engagement"
                loading="lazy"
              />
            </div>
            <div className="service-content">
              <h3>Community Engagement</h3>
              <p>Build heartfelt connections between your story and the communities you serve through innovative AR solutions that captivate, educate, and motivate social change.</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img 
                src="https://images.unsplash.com/photo-1580983553600-c49a1d083f54?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHx0ZWFtJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjAzfDA&ixlib=rb-4.1.0&q=85" 
                alt="Educational Innovation"
                loading="lazy"
              />
            </div>
            <div className="service-content">
              <h3>Educational Innovation</h3>
              <p>Transform traditional education methods into interactive AR experiences that enhance learning outcomes and create lasting positive impact.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),

  CaseStudiesSection: () => (
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
                src="https://images.unsplash.com/photo-1607510643672-6136fa994399?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxuYXR1cmUlMjBlbnZpcm9ubWVudHxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjI4fDA&ixlib=rb-4.1.0&q=85" 
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
                src="https://images.unsplash.com/photo-1656163158223-0150e7e12cc6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBlbnZpcm9ubWVudHxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjI4fDA&ixlib=rb-4.1.0&q=85" 
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
                src="https://images.unsplash.com/photo-1716703742196-9986679eb03f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjAzfDA&ixlib=rb-4.1.0&q=85" 
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
  ),

  BenefitsSection: () => {
    const [activeIndex, setActiveIndex] = useState(null);
    
    const benefits = [
      {
        title: "Immersive Engagement",
        description: "AR creates a highly engaging and immersive experience by overlaying digital content onto the real world–captivating users' attention and curiosity, making learning and storytelling more compelling. It engages more of the senses, enabling users to explore and interact with virtual worlds, fostering a deep sense of engagement and connection."
      },
      {
        title: "Behavior Change and Impact",
        description: "AR has the potential to drive behavior change by evoking empathy. Through virtual simulation, users can witness the consequences of their actions or explore real-world challenges. By experiencing these impacts viscerally, Individuals become inspired to try new behaviors, make informed decisions, and take action towards positive change. Changes such as adopting sustainable practices or embracing empathy towards others."
      },
      {
        title: "Accessibility and Convenience",
        description: "With the widespread availability of smartphones and tablets, AR breaks down barriers, making AR inclusive and reaching a wide range of users. It eliminates the need for specialized hardware, making AR more convenient and readily available."
      },
      {
        title: "Learning and Education",
        description: "AR enhances learning by providing interactive, hands-on, and personalized learning opportunities. It enables students to visualize complex concepts, explore simulations, and engage in experiential learning. Studies have shown that AR can increase attention, motivation, and knowledge retention, making it a powerful tool to enhance learning outcomes."
      },
      {
        title: "Gamification and Enjoyment",
        description: "Game mechanics, such as rewards, challenges, and progress tracking, add an element of fun and enjoyment to the user experience. Gamification enhances motivation, promotes active participation, and encourages users to explore and discover. Users spend more time engaging with the content, leading to deeper understanding and greater information retention."
      }
    ];

    const toggleBenefit = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    return (
      <section id="benefits" className="benefits-section">
        <div className="benefits-header">
          <div className="container">
            <h2 className="benefits-main-title">Benefits of Augmented Reality for Public Outreach</h2>
            <p className="benefits-subtitle">
              The immersive quality of augmented reality drives empathy, enhances learning and enjoyment, and makes a powerful tool for positive impact.
            </p>
          </div>
        </div>
        
        <div className="benefits-content">
          <div className="container">
            <div className="benefits-layout">
              <div className="benefits-image">
                <img 
                  src="https://images.unsplash.com/photo-1660020618837-aea80a4b7d87?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwzfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXR8ZW58MHx8fGJsdWV8MTc1Mjk1NjIyMHww&ixlib=rb-4.1.0&q=85" 
                  alt="AR Benefits Visualization"
                  loading="lazy"
                />
              </div>
              
              <div className="benefits-list">
                {benefits.map((benefit, index) => (
                  <div 
                    key={index} 
                    className={`benefit-item ${activeIndex === index ? 'active' : ''}`}
                  >
                    <div 
                      className="benefit-header"
                      onClick={() => toggleBenefit(index)}
                    >
                      <h3>{benefit.title}</h3>
                      <span className={`benefit-toggle ${activeIndex === index ? 'expanded' : ''}`}>
                        {activeIndex === index ? '−' : '+'}
                      </span>
                    </div>
                    <div className={`benefit-description ${activeIndex === index ? 'expanded' : ''}`}>
                      <p>{benefit.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },

  FounderSection: () => (
    <section id="founder" className="founder-section">
      <div className="container">
        <div className="founder-content">
          <div className="founder-image">
            <img 
              src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHx0ZWFtJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjAzfDA&ixlib=rb-4.1.0&q=85" 
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
  ),

  TeamSection: () => (
    <section id="team" className="team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <div className="team-content">
          <div className="team-text">
            <p>
              At Impact Immersive, collaboration is at the heart of our social mission. We embrace a networked approach, partnering with creators and vendors who bring specialized skills to your projects. This allows us to stay agile and efficient, while keeping costs affordable.
            </p>
            <p>
              We understand that your success relies on adaptability. We thrive on embracing change and quickly responding to new challenges and opportunities. In our dynamic work environment, every team member has a sense of purpose, autonomy, and the opportunity to make a meaningful contribution to the positive social impact you're committed to achieving.
            </p>
          </div>
          <div className="team-image">
            <img 
              src="https://images.unsplash.com/photo-1580983553600-c49a1d083f54?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHx0ZWFtJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXhlbnwwfHx8Ymx1ZXwxNzUyOTU2MjAzfDA&ixlib=rb-4.1.0&q=85" 
              alt="Our collaborative team"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  ),

  LogoSection: () => (
    <section id="partners" className="logo-section">
      <div className="container">
        <h2 className="logo-section-title">Trusted Partners & Collaborators</h2>
        <div className="logos-grid">
          <div className="logo-item">
            <img 
              src="https://via.placeholder.com/150x80/7c3aed/ffffff?text=Disney"
              alt="Disney"
              loading="lazy"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://via.placeholder.com/150x80/7c3aed/ffffff?text=Warner+Bros"
              alt="Warner Brothers"
              loading="lazy"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://via.placeholder.com/150x80/7c3aed/ffffff?text=Technicolor"
              alt="Technicolor"
              loading="lazy"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://via.placeholder.com/150x80/7c3aed/ffffff?text=Unity"
              alt="Unity Technologies"
              loading="lazy"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://via.placeholder.com/150x80/7c3aed/ffffff?text=Microsoft"
              alt="Microsoft"
              loading="lazy"
            />
          </div>
          <div className="logo-item">
            <img 
              src="https://via.placeholder.com/150x80/7c3aed/ffffff?text=Meta"
              alt="Meta"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  ),

  TermsOfServicePage: () => (
    <div className="terms-page">
      <div className="container">
        <div className="terms-content">
          <h1>Terms of Service</h1>
          <p className="last-updated">Last updated: January 2025</p>
          
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Impact Immersive Studio's services, you accept and agree to be bound by the terms and provision of this agreement.</p>
          </section>

          <section>
            <h2>2. Description of Service</h2>
            <p>Impact Immersive Studio provides augmented reality (AR) development services, consultation, and educational programs for purpose-driven organizations. Our services include but are not limited to:</p>
            <ul>
              <li>Custom AR experience development</li>
              <li>AR consultation and strategy</li>
              <li>Educational programs and training</li>
              <li>Community engagement solutions</li>
            </ul>
          </section>

          <section>
            <h2>3. User Responsibilities</h2>
            <p>Users of our services agree to:</p>
            <ul>
              <li>Provide accurate and complete information</li>
              <li>Use services only for lawful purposes</li>
              <li>Respect intellectual property rights</li>
              <li>Not interfere with or disrupt our services</li>
            </ul>
          </section>

          <section>
            <h2>4. Intellectual Property</h2>
            <p>All content, trademarks, and intellectual property on this website and in our services remain the property of Impact Immersive Studio or our licensors. Custom work developed for clients will be governed by separate project agreements.</p>
          </section>

          <section>
            <h2>5. Privacy and Data Protection</h2>
            <p>We are committed to protecting your privacy. Our collection and use of personal information is governed by our Privacy Policy, which forms part of these terms.</p>
          </section>

          <section>
            <h2>6. Limitation of Liability</h2>
            <p>Impact Immersive Studio shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of our services.</p>
          </section>

          <section>
            <h2>7. Service Availability</h2>
            <p>We strive to maintain consistent service availability but do not guarantee uninterrupted access. We reserve the right to modify or discontinue services with reasonable notice.</p>
          </section>

          <section>
            <h2>8. Modifications to Terms</h2>
            <p>These terms may be updated from time to time. Continued use of our services after changes constitutes acceptance of the modified terms.</p>
          </section>

          <section>
            <h2>9. Governing Law</h2>
            <p>These terms shall be governed by and construed in accordance with the laws of the State of California, United States.</p>
          </section>

          <section>
            <h2>10. Contact Information</h2>
            <p>For questions regarding these terms, please contact us at:</p>
            <p>
              Email: <a href="mailto:legal@impactimmersive.studio">legal@impactimmersive.studio</a><br/>
              Phone: <a href="tel:+13233251705">+1 (323) 325-1705</a>
            </p>
          </section>

          <div className="back-to-site">
            <button onClick={() => window.history.back()} className="back-button">
              ← Back to Site
            </button>
          </div>
        </div>
      </div>
    </div>
  ),
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      organization: '',
      impactFocus: '',
      impactRating: '3',
      arFamiliarity: '3',
      arPotential: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ 
        name: '', 
        email: '', 
        organization: '', 
        impactFocus: '', 
        impactRating: '3', 
        arFamiliarity: '3', 
        arPotential: '' 
      });
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <section id="contact" className="contact-section">
        <div className="contact-hero">
          <div className="contact-overlay">
            <div className="container">
              <h2 className="contact-title">Augment your Reality, Impact the World</h2>
              
              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="impactFocus">On what is your impact focused?</label>
                  <textarea
                    id="impactFocus"
                    name="impactFocus"
                    rows="3"
                    value={formData.impactFocus}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="impactRating">On a scale from 1-5 (one being not very much, five being stellar) how impactful are your communications?</label>
                  <select
                    id="impactRating"
                    name="impactRating"
                    value={formData.impactRating}
                    onChange={handleChange}
                    required
                  >
                    <option value="1">1 - Not very much</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 - Stellar</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="arFamiliarity">On a scale from 1-5 (one being not very much, five being expert) how familiar are you with augmented reality?</label>
                  <select
                    id="arFamiliarity"
                    name="arFamiliarity"
                    value={formData.arFamiliarity}
                    onChange={handleChange}
                    required
                  >
                    <option value="1">1 - Not very much</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5 - Expert</option>
                  </select>
                </div>
                
                <div className="form-group">
                  <label htmlFor="arPotential">How might augmented reality skyrocket your impact?</label>
                  <textarea
                    id="arPotential"
                    name="arPotential"
                    rows="3"
                    value={formData.arPotential}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>
                
                <div className="form-group">
                  <label htmlFor="name">First Name, Last Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <button type="submit" className="submit-button">Send</button>
              </form>
            </div>
          </div>
        </div>
        
        <div className="contact-footer">
          <div className="container">
            <div className="footer-main">
              <div className="footer-company-info">
                <h3>Impact Immersive</h3>
                <p>Los Angeles, California, USA</p>
                <p><a href="mailto:hello@impactimmersive.studio">hello@impactimmersive.studio</a></p>
                <p><a href="tel:+13233251705">+1 (323) 325-1705</a></p>
                <div className="social-links">
                  <a href="https://www.linkedin.com/company/impactimmersive" target="_blank" rel="noopener noreferrer">
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
            
            <div className="footer-separator"></div>
            
            <div className="footer-bottom">
              <div className="footer-copyright">
                <p>© 2025 Impact Immersive</p>
              </div>
              <div className="footer-legal">
                <a href="#terms">Terms</a>
                <a href="#privacy">Privacy Policy</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  },

  CookieConsent: () => {
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
  }
};

export default Components;