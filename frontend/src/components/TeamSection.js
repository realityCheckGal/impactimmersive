import React from 'react';

const TeamSection = () => (
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
);

export default TeamSection;
