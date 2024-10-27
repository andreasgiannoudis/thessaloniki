import React, { useState, useEffect, useRef } from 'react';

function Stats() {
  const [population, setPopulation] = useState(0);
  const [culturalHeritage, setCulturalHeritage] = useState(0);
  const [studentHub, setStudentHub] = useState(0);
  const [portActivity, setPortActivity] = useState(0);
  const [hasStarted, setHasStarted] = useState(false);
  const statsRef = useRef(null);

  const targetValues = {
    population: 1000000,
    culturalHeritage: 15,
    studentHub: 150,
    portActivity: 16,
  };

  const animationDuration = 1000; // Duration in milliseconds for the count animation

  useEffect(() => {
    let animationFrameId;

    const animateCount = (startTime) => {
      const elapsedTime = Date.now() - startTime;
      const progress = Math.min(elapsedTime / animationDuration, 1);

      setPopulation(Math.floor(progress * targetValues.population));
      setCulturalHeritage(Math.floor(progress * targetValues.culturalHeritage));
      setStudentHub(Math.floor(progress * targetValues.studentHub));
      setPortActivity(Math.floor(progress * targetValues.portActivity));

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(() => animateCount(startTime));
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasStarted) {
            setHasStarted(true);
            requestAnimationFrame(() => animateCount(Date.now()));
          }
        });
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, [hasStarted]);

  return (
    <div ref={statsRef} className="counters">
      <div className="counter">
        <p>approximately </p>
        <h2>{population}+</h2>
        <p>people in the metropolitan area</p>
      </div>
      <div className="counter">
        <h2>{culturalHeritage}</h2>
        <p>UNESCO World Heritage Sites</p>
      </div>
      <div className="counter">
        <h2>{studentHub}</h2>
        <p> thousand students</p>
      </div>
      <div className="counter">
        <h2>{portActivity}</h2>
        <p>million tons of cargo annually</p>
      </div>
    </div>
  );
}

export default Stats;
