import React from 'react';
import thessaloniki1 from '/src/assets/img/thessaloniki1.jpg';

function HeroSection() {
  return (
    <div className="hero-section">
      <img src={thessaloniki1} alt="Thessaloniki 1" className="hero-image" />

      <div className="hero-overlay">
        <h1 className="hero-title">Explore Thessaloniki</h1>
        <h3>A place full of joy and love</h3>
        <button className="discover-btn">Discover More</button>
      </div>

    </div>
  );
}

export default HeroSection;
