import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import Sellitem from './components/Sellitem/Sellitem'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProductPage from './components/ProductPage/ProductPage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sellitem" element={<Sellitem />} />
          <Route path="/product/:id" element={<ProductPage />} />
        </Routes>
      </Router>

    </div>
  );
};

export default App;
