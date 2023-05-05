import React from 'react'
import NavBar from './components/NavBar/NavBar'
import LandingPage from './components/LandingPage/LandingPage'
import Sellitem from './components/Sellitem/Sellitem'
import GridCard from './components/GridCard/GridCard'
import Explore from './components/Explore/Explore'
import ProductPage from './components/ProductPage/ProductPage'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <div>
      
        <NavBar />
        <LandingPage />
        <GridCard />
        <Explore />
        <ProductPage />
        <Sellitem />
        <Footer />
        
    </div>
  )
}

export default App