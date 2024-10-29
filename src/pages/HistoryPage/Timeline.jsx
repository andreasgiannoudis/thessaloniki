import React from 'react';

const Timeline = () => {
  return (
    <div className="timeline">
      <div className="timeline-event">
        <div className="timeline-date">315 BC</div>
        <div className="timeline-content">
          <h3>Founding of Thessaloniki</h3>
          <p>Thessaloniki was founded by King Cassander...</p>
        </div>
      </div>
      <div className="timeline-event">
        <div className="timeline-date">49 AD</div>
        <div className="timeline-content">
          <h3>Arrival of Paul the Apostle</h3>
          <p>Paul preached in Thessaloniki, influencing the early Christian community.</p>
        </div>
      </div>
      <div className="timeline-event">
        <div className="timeline-date">1430</div>
        <div className="timeline-content">
          <h3>Ottoman Rule Begins</h3>
          <p>Thessaloniki becomes part of the Ottoman Empire.</p>
        </div>
      </div>
      <div className="timeline-event">
        <div className="timeline-date">1912</div>
        <div className="timeline-content">
          <h3>Incorporation into Greece</h3>
          <p>Thessaloniki is officially incorporated into the Kingdom of Greece.</p>
        </div>
      </div>
      <div className="timeline-event">
        <div className="timeline-date">2024</div>
        <div className="timeline-content">
          <h3>Modern Thessaloniki</h3>
          <p>Thessaloniki is celebrated for its rich cultural life.</p>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
