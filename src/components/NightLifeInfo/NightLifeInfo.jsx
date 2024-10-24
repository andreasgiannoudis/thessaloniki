import React from 'react';
import sunset from '/src/assets/img/sunset.jpg';


function NightLifeInfo() {
  return (
    <div className="nightlife-info">
      <div className="grid-container">
        <div className="grid-item item1">
          <img src={sunset} alt="Sunset in Thessaloniki" />
        </div>
        <div className="grid-item item2">
          <p>A city that inspires</p>
        </div>
        <div className="grid-item item3">
          <p>Delicious food</p>
        </div>
        <div className="grid-item item4">
          <p>Amazing and warm folk</p>
        </div>
      </div>
    </div>
  );
}

export default NightLifeInfo;
