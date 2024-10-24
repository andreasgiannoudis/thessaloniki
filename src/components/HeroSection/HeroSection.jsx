import React from 'react';
import thessaloniki1 from '/src/assets/img/thessaloniki1.jpg';

function HeroSection() {
  return (
    <div className="hero-section">
      <img src={thessaloniki1} alt="Thessaloniki 1" className="hero-image" />

      <div className="hero-overlay">
        <h1 className="hero-title">Thessaloniki</h1>
        <h3>Explore a place full of joy and love!</h3>
      </div>

    </div>
  );
}

export default HeroSection;
