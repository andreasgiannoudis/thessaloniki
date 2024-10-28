import React from 'react';
import { Link } from 'react-router-dom';
import sunset from '/src/assets/img/sunset.jpg';
import museum from '/src/assets/img/museum.jpg';
import souvlaki from '/src/assets/img/souvlaki.jpg';

function NightLifeInfo() {
  return (
    <div className="nightlife-info">
      <div className="grid-container">
        <Link to="/view" className="grid-item item1">
          <img src={sunset} alt="Sunset in Thessaloniki" />
          <div className="hover-content">
            <p>Explore the breathtaking views of Thessaloniki’s coastline at sunset.</p>
          </div>
        </Link>
        
        <Link to="/museums" className="grid-item item2">
          <img src={museum} alt="Museums in Thessaloniki" />
          <div className="hover-content">
            <p>From ancient history to modern art, Thessaloniki offers endless inspiration.</p>
          </div>
        </Link>
        
        <Link to="/food-drink" className="grid-item item3">
        <img src={souvlaki} alt="Food in Thessaloniki" />

          <div className="hover-content">
            <p>Experience the vibrant flavors and welcoming locals of Thessaloniki.</p>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NightLifeInfo;
