import React from 'react'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Sellitem from './components/Sellitem/Sellitem'
import GridCard from './components/GridCard/GridCard'

const App = () => {
  return (
    <div>
        <NavBar />
        <LandingPage />
        <GridCard />
        <Sellitem />
    </div>
  )
}

export default App