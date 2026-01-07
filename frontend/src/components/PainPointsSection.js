import React from 'react';

const PainPointsSection = () => (
  <section id="pain-points" className="pain-points-section">
    <div className="container">
      <div className="pain-points-content">
        <div className="pain-points-text">
          <div className="pain-point-questions">
            <p>Do you feel your education methods are outdated and not making the impact you want to make with your communities?</p>
            <p>Or maybe you find you are spending a lot of money on public outreach programs but don't see the value return?</p>
            <p>In this attention economy, do you feel like it's hard to be seen or, worse, left behind?</p>
            <p>Perhaps you want to be seen as a trendsetter...</p>
          </div>
        </div>
        <div className="pain-points-visual">
          <div className="giant-question-mark">
            <svg viewBox="0 0 400 600" className="question-mark-svg">
              <path d="M200 80 Q320 80 320 180 Q320 250 200 280 L200 380" 
                    stroke="white" 
                    strokeWidth="40" 
                    fill="none" 
                    strokeLinecap="round"/>
              <circle cx="200" cy="500" r="30" fill="white"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PainPointsSection;
