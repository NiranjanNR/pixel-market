import React from 'react'
import Cardbig from '../Cardbig/Cardbig'
import Cardsmall from '../Cardsmall/Cardsmall'

const Explore = () => {
    return (
        <div className='text-white '>
            <div className=' text-5xl ml-8 font-semibold tracking-wide pb-2 mt-5 flex justify-center md:text-left'>Explore These Amazing Works</div>
            <div className='lg:mr-10'>
                <div className='mt-5 lg:flex justify-center'>
                    <div className=''>
                        <div className='flex justify-center'>
                            <Cardbig image={"https://unft-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F82dce500-a288-11ed-a914-990a0ee44d8e-31191.jpg&w=1920&q=60"} name={"Mood"} price={19} number={31} />
                        </div>

                    </div>
                    <div className='grid md:grid-cols-1 grid-cols-1'>
                        <div className=''>
                            <Cardsmall image={"https://unft-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2Fc3d63a90-fa2a-11ec-b458-99bc1b8dd3ef-card-pic-4.jpg&w=1920&q=60"} name={"Mood"} price={19} number={31} />
                        </div>
                        <div className=''>
                            <Cardsmall image={"https://unft-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F41ebb4b0-fa1b-11ec-b2b1-473235369c53-selection-pic-12x.jpg&w=1920&q=60"} name={"Rawr"} price={1} number={3} />
                        </div>
                        <div className=''>
                            <Cardsmall image={"https://unft-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F82dce500-a288-11ed-a914-990a0ee44d8e-31191.jpg&w=1920&q=60"} name={"Mood"} price={19} number={31} />
                        </div>
                        <div className=''>
                            <Cardsmall image={"https://unft-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F4909e910-fa1b-11ec-b2b1-473235369c53-fuu-j-emWddF4NrLo-unsplash-1.jpg&w=1920&q=60"} name={"woman"} price={19} number={91} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Explore