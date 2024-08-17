import React from 'react';
import './FeaturesSection.css'; 

const FeaturesSection = () => {
  return (
    <section className="features" id="features">
      <div className="feature">
        <h3>Wide Selection</h3>
        <p>Choose from a variety of cars to suit your needs.</p>
      </div>
      <div className="feature">
        <h3>Easy Booking</h3>
        <p>Book your car in just a few clicks.</p>
      </div>
      <div className="feature">
        <h3>24/7 Support</h3>
        <p>Get support anytime, anywhere.</p>
      </div>
    </section>
  );
};

export default FeaturesSection;
