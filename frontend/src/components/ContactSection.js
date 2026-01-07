import React, { useState } from 'react';

const ContactSection = () => {
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
              <a href="/terms.html">Terms</a>
              <a href="#privacy">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
