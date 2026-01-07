import React, { useState } from 'react';

const BenefitsSection = () => {
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
                src="/images/benefits-image.png" 
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
};

export default BenefitsSection;
