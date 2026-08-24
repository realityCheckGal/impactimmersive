import React from 'react';
import questionMarkImg from '../assets/images/question-mark.png';

const PainPointsSection = () => (
  <section id="pain-points" className="pain-points-section">
    <div className="container">
      <div className="pain-points-content">
        <div className="pain-points-text">
          <div className="pain-point-questions">
            <p>Do you feel your education methods are outdated and not making the impact you want to make with your communities?</p>
            <p>Or maybe you find you are spending a lot of money on public outreach programs but don't see the value return?</p>
            <p>In this attention economy, do you feel like it's hard to be seen or, worse, left behind?</p>
            <p className="trendsetter">Perhaps you want to be seen as a trendsetter...</p>
          </div>
        </div>
        <div className="pain-points-visual">
          <div className="giant-question-mark">
            <img 
              src={questionMarkImg} 
              alt="Question mark" 
              className="question-mark-img"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default PainPointsSection;
