import React from 'react';
import Timeline from './Timeline'; // Ensure this path is correct based on your file structure

function HistoryPage() {
  return (
    <div className="history-page">
      <section className="history-hero">
        <h1>History of Thessaloniki</h1>
        <p>
          Discover the vibrant history of Thessaloniki, a city shaped by centuries of diverse cultures, pivotal moments, and a spirit that has influenced the course of history.
        </p>
      </section>

      <section className="history-content">
        <article>
          <h2>Ancient Beginnings</h2>
          <p>
            Thessaloniki was founded in 315 BC by King Cassander of Macedon, who named it after his wife, Thessalonike, the sister of Alexander the Great. Located at a key crossroads between East and West, the city quickly became a major hub for trade and culture in the ancient world.
          </p>
        </article>

        <article>
          <h2>Roman and Byzantine Eras</h2>
          <p>
            Thessaloniki flourished under Roman rule, becoming the capital of the Roman province of Macedonia. The city’s importance only grew in the Byzantine era, as it became a center of Christian scholarship and architecture. Many of its famous churches, such as the Rotunda and Hagios Demetrios, were built during this period and are still standing as UNESCO World Heritage sites.
          </p>
        </article>

        <article>
          <h2>Ottoman Rule and Cultural Melting Pot</h2>
          <p>
            From 1430 to 1912, Thessaloniki was part of the Ottoman Empire. During this time, it became a vibrant multicultural center with thriving Jewish, Christian, and Muslim communities. Known as the "Jerusalem of the Balkans," Thessaloniki’s Jewish population was one of the largest in the world at the time, contributing greatly to the city's cultural landscape.
          </p>
        </article>

        <article>
          <h2>Modern Era and Greek Incorporation</h2>
          <p>
            Thessaloniki was incorporated into the Kingdom of Greece in 1912, following the Balkan Wars. The city endured significant challenges in the 20th century, including the Great Fire of 1917, which destroyed much of the city center, and the tragic loss of its Jewish community during World War II. Despite these hardships, Thessaloniki emerged as a resilient city, rebuilding and modernizing while honoring its rich past.
          </p>
        </article>

        <article>
          <h2>Today’s Thessaloniki</h2>
          <p>
            Today, Thessaloniki is known as Greece’s cultural capital, celebrated for its festivals, vibrant nightlife, and historical sites. It continues to blend tradition with modernity, offering a unique experience that reflects its diverse past and its dynamic present.
          </p>
        </article>
      </section>

      <Timeline /> {/* Add the Timeline component */}
    </div>
  );
}

export default HistoryPage;
