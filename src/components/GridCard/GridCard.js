import React from 'react'
import Card from '../Card/Card'

const GridCard = () => {
    return (
        <div id="Cards" className='ml-6 overflow-x-scroll'>
            <div className='grid grid-cols-4'>
                <div>
                    <Card image={"https://unft-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2Fc3d63a90-fa2a-11ec-b458-99bc1b8dd3ef-card-pic-4.jpg&w=1920&q=60"} name={"Mood"} price={19} number={31} />
                </div>
                <div>
                    <Card image={"https://unft-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F82dce500-a288-11ed-a914-990a0ee44d8e-31191.jpg&w=1920&q=60"} name={"Bird"} price={9} number={13} />
                </div>
                <div>
                    <Card image={"https://unft-marketplace.vercel.app/_next/image?url=https%3A%2F%2Fimgix.cosmicjs.com%2F41ebb4b0-fa1b-11ec-b2b1-473235369c53-selection-pic-12x.jpg&w=1920&q=60"} name={"Rawr"} price={1} number={3} />
                </div>
                <div>
                    <Card image={"https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200"} name={"Ape"} price={19} number={30} />
                </div>
            </div>
        </div>
    )
}

export default GridCard