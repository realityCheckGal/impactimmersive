import React, { useState } from 'react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const subject = encodeURIComponent(`Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    window.location.href = `mailto:hello@impactimmersive.studio?subject=${subject}&body=${body}`;
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
          <h2 className="contact-title">Augment your Reality, Impact the World</h2>
          
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
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            
            <button type="submit" className="submit-button">Send</button>
          </form>
        </div>
      </div>
      
      <div className="contact-footer">
        <div className="container">
          <div className="footer-main">
            <div className="footer-company-info">
              <h3>Impact Immersive</h3>
              <p>Los Angeles, California, USA</p>
              <p><a href="mailto:hello@impactimmersive.studio">hello@impactimmersive.studio</a></p>
              <p><a href="tel:+13238422096">+1 (323) 842-2096</a></p>
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
