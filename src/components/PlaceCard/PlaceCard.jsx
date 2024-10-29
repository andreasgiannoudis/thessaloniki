import React from 'react';

function PlaceCard({ place }) {
  return (
    <div className="place-card">
      <img src={place.image} alt={place.name} />
      <div className="place-content">
        <h3>{place.name}</h3>
        <span className="place-type">{place.type}</span>
        <p>{place.description}</p>
        <span className="place-location">{place.location}</span>
        <span className="place-rating">Rating: {place.rating}</span>
        <div className="tags">
          {place.tags.map((tag, index) => (
            <span key={index} className="tag">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PlaceCard;
