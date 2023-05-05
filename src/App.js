import React from 'react'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Sellitem from './components/Sellitem/Sellitem'
import GridCard from './components/GridCard/GridCard'
import Explore from './components/Explore/Explore'

const App = () => {
  return (
    <div>
        <NavBar />
        <LandingPage />
        <GridCard />
        <Explore />
        <Sellitem />
        
    </div>
  )
}

export default App