import React from 'react';
import './HeroSection.css'; 

const HeroSection = ({ backgroundImage, title, subtitle, ctaLink, ctaText }) => {
    // Inline style for background image
    const heroStyle = {
      background: `url(${backgroundImage}) no-repeat center center/cover`
    };
  
    return (
      <section className="hero" style={heroStyle}>
        <div className="hero-content">
            <h2>Find Your Perfect Ride</h2>
            <p>Explore a wide range of cars available for rent.</p>
            <a href="#features" className="cta-button">Discover More</a>
        </div>
      </section>
  );
};

export default HeroSection;
