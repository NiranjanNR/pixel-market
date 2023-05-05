import React from 'react'


const LandingPage = () => {
  return (
    <div className='text-white  flex justify-center lg:items-center h-[90vh]'>
        <div className='lg:flex'>
            <div className='w-[500px] '>
                <div className='text-xl text-gray-500 font-semibold pb-2'>THE NEW CREATIVE ECONOMY</div>
                <div className='text-6xl font-semibold tracking-wide pb-2'>Share your creations with <br /> the world</div>
                <div className='text-lg text-gray-500 font-light pb-10'>Collect and sell digital art, powered by the best online tools.</div>
                <button className='text-xl font-semibold border border-gray-500/25 p-6 mx-4 hover:bg-gray-500/25'>Discover More</button>
                <button className='text-xl font-semibold ml-8 border border-gray-500/25 p-6 mx-4 bg-indigo-700 hover:bg-indigo-600'>Create Item</button>
            </div>
            <div className='ml-10'>
                <img src='https://i.ibb.co/DVHBGCW/Screenshot-2023-05-05-at-1-35-00-PM.png'  alt='' />
            </div>
        </div>
    </div>
  )
}

export default LandingPage