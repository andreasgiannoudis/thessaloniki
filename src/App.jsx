import './App.scss';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import HomePage from './pages/Homepage/HomePage';
// import WhatToDoPage from './pages/WhatToDoPage/WhatToDoPage';
import HistoryPage from './pages/HistoryPage/HistoryPage';
// import ContactPage from './pages/ContactPage/ContactPage';
import FoodDrink from './pages/FoodDrink/FoodDrink';
import NightLife from './pages/NightLife/NightLife';

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/what-to-do" element={<WhatToDoPage />} /> */}
        <Route path="/history" element={<HistoryPage />} />
        {/* <Route path="/contact" element={<ContactPage />} /> */}
        <Route path="/food-drink" element={<FoodDrink />} />
        <Route path="/nightlife" element={<NightLife />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
