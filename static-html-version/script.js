// Smooth scrolling navigation
function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
  // Close mobile menu if open
  const nav = document.getElementById('nav');
  nav.classList.remove('nav-open');
}

// Mobile menu toggle
function toggleMenu() {
  const nav = document.getElementById('nav');
  nav.classList.toggle('nav-open');
}

// Contact form handling
function handleSubmit(event) {
  event.preventDefault();
  const form = event.target;
  const formData = new FormData(form);
  
  // Get form values
  const name = formData.get('name');
  const email = formData.get('email');
  const organization = formData.get('organization');
  const message = formData.get('message');
  
  // Show confirmation message
  alert('Thank you for your message! We\'ll get back to you soon.');
  
  // Reset form
  form.reset();
}

// Cookie consent handling
function acceptCookies() {
  const cookieConsent = document.getElementById('cookie-consent');
  cookieConsent.classList.add('hidden');
}

// Active navigation highlighting based on scroll position
function updateActiveNavigation() {
  const sections = ['home', 'about', 'services', 'case-studies', 'benefits', 'team', 'contact'];
  const scrollPosition = window.scrollY + 100;

  sections.forEach(section => {
    const element = document.getElementById(section);
    const navLink = document.querySelector(`a[href="#${section}"]`);
    
    if (element && navLink) {
      const offsetTop = element.offsetTop;
      const offsetHeight = element.offsetHeight;
      
      if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
        // Remove active class from all links
        document.querySelectorAll('.nav-list a').forEach(link => {
          link.classList.remove('active');
        });
        // Add active class to current link
        navLink.classList.add('active');
      }
    }
  });
}

// Scroll event listener for active navigation
window.addEventListener('scroll', updateActiveNavigation);

// Close mobile menu when clicking on navigation links
document.addEventListener('DOMContentLoaded', function() {
  const navLinks = document.querySelectorAll('.nav-list a');
  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      scrollToSection(targetId);
    });
  });

  // Initialize active navigation on page load
  updateActiveNavigation();
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
  const nav = document.getElementById('nav');
  const menuToggle = document.querySelector('.menu-toggle');
  
  if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
    nav.classList.remove('nav-open');
  }
});

// Benefits section interaction
let activeBenefitIndex = null;

function toggleBenefit(index) {
  const description = document.getElementById(`description-${index}`);
  const toggle = document.getElementById(`toggle-${index}`);
  const benefitItem = description.closest('.benefit-item');
  
  // Close currently active benefit if it's not the one being clicked
  if (activeBenefitIndex !== null && activeBenefitIndex !== index) {
    const activeDescription = document.getElementById(`description-${activeBenefitIndex}`);
    const activeToggle = document.getElementById(`toggle-${activeBenefitIndex}`);
    const activeBenefitItem = activeDescription.closest('.benefit-item');
    
    activeDescription.classList.remove('expanded');
    activeToggle.classList.remove('expanded');
    activeToggle.textContent = '+';
    activeBenefitItem.classList.remove('active');
  }
  
  // Toggle the clicked benefit
  if (activeBenefitIndex === index) {
    // Close if already active
    description.classList.remove('expanded');
    toggle.classList.remove('expanded');
    toggle.textContent = '+';
    benefitItem.classList.remove('active');
    activeBenefitIndex = null;
  } else {
    // Open the benefit
    description.classList.add('expanded');
    toggle.classList.add('expanded');
    toggle.textContent = '−';
    benefitItem.classList.add('active');
    activeBenefitIndex = index;
  }
}

// Simple animations on scroll (optional)
function animateOnScroll() {
  const elements = document.querySelectorAll('.service-card, .case-study-card, .benefit-card');
  
  elements.forEach(element => {
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < window.innerHeight - elementVisible) {
      element.style.opacity = '1';
      element.style.transform = 'translateY(0)';
    }
  });
}

// Add initial styles for animation
document.addEventListener('DOMContentLoaded', function() {
  const elements = document.querySelectorAll('.service-card, .case-study-card, .benefit-card');
  
  elements.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  });
  
  // Run animation on scroll
  window.addEventListener('scroll', animateOnScroll);
  
  // Run animation on page load
  setTimeout(animateOnScroll, 100);
});