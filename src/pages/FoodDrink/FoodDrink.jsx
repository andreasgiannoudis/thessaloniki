import React, { useEffect, useState } from 'react';
import { db } from '../../firebase';
import { collection, getDocs, query, where } from 'firebase/firestore';
import PlaceCard from '../../components/PlaceCard/PlaceCard';

function FoodDrink() {
  const [places, setPlaces] = useState([]);

  useEffect(() => {
    const fetchPlaces = async () => {
      const placesCollection = collection(db, 'places');

      const cafesQuery = query(placesCollection, where('type', '==', 'Cafe'));

      const placesSnapshot = await getDocs(cafesQuery);
      const placesList = placesSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      
      setPlaces(placesList);
    };

    fetchPlaces();
  }, []);

  return (
    <div className="places-page">
      {places.map(place => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default FoodDrink;
