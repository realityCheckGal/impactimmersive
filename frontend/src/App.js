import React, { useState, useEffect } from 'react';
import './App.css';
import Components from './components';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { 
    Header, 
    HeroSection, 
    AboutSection, 
    ServicesSection, 
    CaseStudiesSection, 
    BenefitsSection, 
    TeamSection, 
    ContactSection,
    CookieConsent
  } = Components;

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'case-studies', 'benefits', 'team', 'contact'];
      const scrollPosition = window.scrollY + 100;

      sections.forEach(section => {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="App">
      <Header 
        activeSection={activeSection}
        scrollToSection={scrollToSection}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
      
      <main>
        <HeroSection scrollToSection={scrollToSection} />
        <AboutSection />
        <ServicesSection />
        <CaseStudiesSection />
        <BenefitsSection />
        <TeamSection />
        <ContactSection />
      </main>
      
      <CookieConsent />
    </div>
  );
}

export default App;