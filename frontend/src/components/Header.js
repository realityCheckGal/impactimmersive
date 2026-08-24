import React from 'react';

const Header = ({ activeSection, scrollToSection, isMenuOpen, setIsMenuOpen }) => (
  <header className="header">
    <div className="container">
      <div className="nav-brand">
        <h1 onClick={() => scrollToSection('home')}>Impact Immersive</h1>
      </div>
      
      <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
        <ul className="nav-list">
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
              href="#founder" 
              className={activeSection === 'founder' ? 'active' : ''}
              onClick={(e) => { e.preventDefault(); scrollToSection('founder'); }}
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
);

export default Header;
