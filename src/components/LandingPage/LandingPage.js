import React from 'react'
import NavBar from '../NavBar/NavBar'
import GridCard from '../GridCard/GridCard'
import Footer from '../Footer/Footer'
import Explore from '../Explore/Explore'
import {Link} from 'react-router-dom'
import FeaturePage from '../FeaturePage/FeaturePage'


const LandingPage = () => {
  return (
    <div>
    <div className='lg:items-center min-h-screen'>
      <NavBar />
      <section className='lg:mt-16 lg:ml-6 py-6 text-white flex justify-center '>
      <div className='flex lg:justify-between flex-col-reverse lg:flex-row'>
        <div className='flex-grow w-full lg:w-[500px] lg:mx-auto text-center lg:text-left lg:self-center'>
          <div className='text-xl text-gray-500 font-semibold pb-2'>THE NEW CREATIVE ECONOMY</div>
          <div className='text-4xl lg:text-6xl font-semibold tracking-wide pb-2'>Share your creations with the world</div>
          <div className='text-lg text-gray-500 font-light pb-10'>Collect and sell digital art, powered by the best online tools.</div>
          <div className='flex flex-col lg:flex-row'>
            <a href="#Explore">
              <button className='text-xl font-semibold border border-gray-500/25 p-6 mx-4 hover:bg-gray-500/25 transition-all ease-in-out active:scale-95 rounded-sm'>Discover More</button>
            </a>
            <Link to="/sellitem">
              <button className='text-xl font-semibold mt-4 lg:mt-0 lg:ml-8 border border-gray-500/25 p-6 mx-4 bg-indigo-700 hover:bg-indigo-600 transition-all ease-in-out active:scale-95 rounded-sm'>Create Item</button>
            </Link>
          </div>
        </div>
        <div className='flex-grow lg:block lg:w-[calc(100% - 500px)] mt-8 lg:mt-0'>
          <img src='https://i.ibb.co/DVHBGCW/Screenshot-2023-05-05-at-1-35-00-PM.png' alt='' />
        </div>
      </div>
    </section>
    </div>
    <h1 className='text-[3rem] text-center text-white min-h-[40px]'>Your Top Collection</h1>
    <GridCard/>
    <Explore/>
    <h1 className='text-[3rem] text-center text-white min-h-[40px]'>Art on Demand</h1>
    <FeaturePage/>
    <Footer/>
    </div>
  )
}




export default LandingPage