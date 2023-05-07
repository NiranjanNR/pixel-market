import React from 'react'
import LandingPage from './components/LandingPage/LandingPage'
import Sellitem from './components/Sellitem/Sellitem'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div>

      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sellitem" element={<Sellitem />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App