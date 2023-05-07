import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import Sellitem from './components/Sellitem/Sellitem'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AboutUs from './components/AboutUs/AboutUs';
import ProductPage from './components/ProductPage/ProductPage';
import Discover from './components/Discover/Discover';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sellitem" element={<Sellitem />} />
          <Route path="/aboutus" element={<AboutUs/>} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;
