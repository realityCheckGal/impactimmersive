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
              We connect purpose-driven organizations to their community by 
              engaging hearts and minds with the persuasive power of Augmented 
              Reality (AR).
            </p>
            <button 
              className="cta-button"
              onClick={() => scrollToSection('about')}
            >
              dive in
            </button>
          </div>
          <div className="hero-image">
            <img 
              src="https://images.unsplash.com/photo-1658555012297-edb48f0c2d4c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXR8ZW58MHx8fGJsdWV8MTc1Mjk1NjIyMHww&ixlib=rb-4.1.0&q=85" 
              alt="AR Technology Experience"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  ),

  AboutSection: () => (
    <section id="about" className="about-section">
      <div className="container">
        <div className="section-content">
          <div className="text-content">
            <h2 className="section-title">What is Augmented Reality?</h2>
            <p className="section-description">
              Augmented Reality (AR) is a technology that combines the real world with 
              computer-generated elements. It overlays digital information, such as images, 
              360° sound, or 3D models, onto the physical world.
            </p>
          </div>
          <div className="image-content">
            <img 
              src="https://images.unsplash.com/photo-1660100970983-645655a09b3e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHx2aXJ0dWFsJTIwcmVhbGl0eSUyMGhlYWRzZXR8ZW58MHx8fGJsdWV8MTc1Mjk1NjIyMHww&ixlib=rb-4.1.0&q=85" 
              alt="AR Technology Demonstration"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  ),

  ServicesSection: () => (
    <section id="services" className="services-section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
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
              <p>Create powerful augmented reality experiences that connect your organization with the community and drive meaningful engagement.</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img 
                src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHx0ZWFtJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjAzfDA&ixlib=rb-4.1.0&q=85" 
                alt="Content Development"
                loading="lazy"
              />
            </div>
            <div className="service-content">
              <h3>Content Development</h3>
              <p>Develop high-quality, diverse content across various sectors that enhances engagement and creates meaningful impact.</p>
            </div>
          </div>
          
          <div className="service-card">
            <div className="service-image">
              <img 
                src="https://images.unsplash.com/photo-1580983553600-c49a1d083f54?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwzfHx0ZWFtJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjAzfDA&ixlib=rb-4.1.0&q=85" 
                alt="Educational Programs"
                loading="lazy"
              />
            </div>
            <div className="service-content">
              <h3>Educational Programs</h3>
              <p>Training and educational programs focused on immersive technologies, preparing the next generation of creators and innovators.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),

  CaseStudiesSection: () => (
    <section id="case-studies" className="case-studies-section">
      <div className="container">
        <h2 className="section-title">Case Studies</h2>
        <div className="case-studies-grid">
          <div className="case-study-card">
            <div className="case-study-image">
              <img 
                src="https://images.unsplash.com/photo-1607510643672-6136fa994399?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwyfHxuYXR1cmUlMjBlbnZpcm9ubWVudHxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjI4fDA&ixlib=rb-4.1.0&q=85" 
                alt="Concrete Oasis Project"
                loading="lazy"
              />
            </div>
            <div className="case-study-content">
              <h3>Concrete Oasis</h3>
              <p>Augmented reality will transform Pershing Square Park into a flourishing oasis. AR Experiences will educate the public about the water crisis.</p>
            </div>
          </div>
          
          <div className="case-study-card">
            <div className="case-study-image">
              <img 
                src="https://images.unsplash.com/photo-1656163158223-0150e7e12cc6?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjBlbnZpcm9ubWVudHxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjI4fDA&ixlib=rb-4.1.0&q=85" 
                alt="Flowrish Project"
                loading="lazy"
              />
            </div>
            <div className="case-study-content">
              <h3>Flowrish</h3>
              <p>A mobile app that helps local residents visualize native plants in their landscape using augmented reality.</p>
            </div>
          </div>
          
          <div className="case-study-card">
            <div className="case-study-image">
              <img 
                src="https://images.unsplash.com/photo-1716703742196-9986679eb03f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjAzfDA&ixlib=rb-4.1.0&q=85" 
                alt="Emergent Virtues Project"
                loading="lazy"
              />
            </div>
            <div className="case-study-content">
              <h3>Emergent Virtues</h3>
              <p>An AR networking app designed to incite conversation about potential futures shaped by emerging technologies.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  ),

  BenefitsSection: () => {
    const benefits = [
      {
        title: "Immersive Engagement",
        description: "Create deep, meaningful connections through immersive AR experiences that capture attention and drive emotional engagement."
      },
      {
        title: "Behavior Change and Impact",
        description: "Leverage the persuasive power of AR to drive real behavioral change and create lasting positive impact in communities."
      },
      {
        title: "Accessibility and Convenience",
        description: "Make complex concepts accessible and convenient for diverse audiences through intuitive AR interfaces."
      },
      {
        title: "Learning and Education",
        description: "Enhanced learning experiences through interactive AR that makes education more engaging and effective."
      },
      {
        title: "Gamification and Enjoyment",
        description: "Incorporate game-like elements that make learning and engagement enjoyable while achieving serious objectives."
      }
    ];

    return (
      <section id="benefits" className="benefits-section">
        <div className="container">
          <h2 className="section-title">Benefits of Augmented Reality for Public Outreach</h2>
          <p className="section-subtitle">
            The immersive quality of augmented reality drives empathy, enhances learning 
            and enjoyment, and makes a powerful tool for positive impact.
          </p>
          <div className="benefits-grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <h3>{benefit.title}</h3>
                <p>{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  },

  TeamSection: () => (
    <section id="team" className="team-section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <div className="team-content">
          <div className="team-text">
            <div className="founder-info">
              <h3>Suzan Oslin</h3>
              <p className="founder-title">Founder & Visionary Leader</p>
              <p className="founder-description">
                An award-winning visionary leader in the augmented reality industry with over 30 years of experience.
                Suzan brings decades of expertise in creating meaningful technology solutions that connect communities 
                and drive positive change.
              </p>
            </div>
            <div className="collaboration-info">
              <h3>Collaboration at Our Core</h3>
              <p>
                At Impact Immersive, collaboration is at the heart of our social mission. We work with a diverse 
                collective of professionals, academics, students, and consumers to create inclusive AR solutions 
                that serve all communities.
              </p>
            </div>
          </div>
          <div className="team-image">
            <img 
              src="https://images.unsplash.com/photo-1618544976420-1f213fcf2052?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1Nzh8MHwxfHNlYXJjaHwyfHx0ZWFtJTIwdGVjaG5vbG9neSUyMHdvcmtzcGFjZXxlbnwwfHx8Ymx1ZXwxNzUyOTU2MjAzfDA&ixlib=rb-4.1.0&q=85" 
              alt="Our collaborative team"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  ),

  ContactSection: () => {
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      organization: '',
      message: ''
    });

    const handleSubmit = (e) => {
      e.preventDefault();
      alert('Thank you for your message! We\'ll get back to you soon.');
      setFormData({ name: '', email: '', organization: '', message: '' });
    };

    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value
      });
    };

    return (
      <section id="contact" className="contact-section">
        <div className="container">
          <h2 className="section-title">Contact Us</h2>
          <div className="contact-content">
            <div className="contact-info">
              <div className="contact-item">
                <h3>Get In Touch</h3>
                <p>Ready to transform your public outreach with AR? Let's collaborate to create meaningful impact.</p>
              </div>
              <div className="contact-item">
                <h4>Location</h4>
                <p>Los Angeles, California, USA</p>
              </div>
              <div className="contact-item">
                <h4>Email</h4>
                <p>
                  <a href="mailto:hello@impactimmersive.studio">hello@impactimmersive.studio</a>
                </p>
              </div>
              <div className="contact-item">
                <h4>Phone</h4>
                <p>
                  <a href="tel:+13233251705">+1 (323) 325-1705</a>
                </p>
              </div>
              <div className="contact-item">
                <h4>LinkedIn</h4>
                <p>
                  <a href="https://www.linkedin.com/company/impactimmersive" target="_blank" rel="noopener noreferrer">
                    linkedin.com/company/impactimmersive
                  </a>
                </p>
              </div>
            </div>
            
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
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
              
              <div className="form-group">
                <label htmlFor="organization">Organization</label>
                <input
                  type="text"
                  id="organization"
                  name="organization"
                  value={formData.organization}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              
              <button type="submit" className="submit-button">Send Message</button>
            </form>
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
            <a href="#" className="cookie-policy">Privacy policy</a>
          </div>
        </div>
      </div>
    );
  }
};

export default Components;