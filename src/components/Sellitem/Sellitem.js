import React from 'react'
import Card from '../Card/Card'

const Sellitem = () => {
    return (
        <section id="SellItem" className='flex xl:gap-12 px-8 my-20 text-white'>
            <div className='flex-grow flex flex-col min-h-[100vh] ]'>
                <div className='text-3xl md:text-5xl lg:text-6xl font-semibold tracking-wide pb-2'>Sell single collectible</div>
                <div className='text-md text-gray-300 font-semibold pb-2 mt-6'>Upload file</div>
                <div className='text-sm text-gray-500 font-normal pb-2 mt-1'>Drag or choose your file to upload</div>
                <div className=' text-sm text-gray-500 font-normal w-full  h-[200px] bg-gray-500/25 mt-2 rounded-2xl flex justify-center items-center'>Drag your File Here</div>
                <div className='text-md text-gray-300 font-semibold pb-2 mt-6'>Item Details</div>
                <div className='text-sm text-gray-500 font-normal pb-2 '>Item Title</div>
                <input className='w-full  h-[50px] bg-gray-500/25 rounded-lg px-6 mb-6' placeholder='Enter Title' />
                <div className='text-sm text-gray-500 font-normal pb-2 '>Item Description</div>
                <input className='w-full  h-[50px] bg-gray-500/25 rounded-lg px-6' placeholder='Enter Description' />
                <div className='flex flex-wrap md:flex-nowrap mt-6 gap-4 w-full '>
                    <div className='w-full'>
                        <div className='text-md text-gray-300 font-semibold pb-2 '>Colors</div>
                        <input className='w-full xl:max-w-[200px] h-[50px] bg-gray-500/25 rounded-lg px-6' placeholder='Enter Color' />
                    </div>
                    <div className='w-full'>
                        <div className='text-md text-gray-300 font-semibold pb-2 '>Count</div>
                        <input className='w-full xl:max-w-[200px] h-[50px] bg-gray-500/25 rounded-lg px-6' placeholder='Enter Count' />
                    </div>
                    <div className='w-full'>
                        <div className='text-md text-gray-300 font-semibold pb-2 '>Seller name</div>
                        <input className='w-full xl:max-w-[200px] h-[50px] bg-gray-500/25 rounded-lg px-6' placeholder='Enter Seller' />
                    </div>
                </div>
                <div className='border-b border-gray-500/25 pb-6 w-full '>
                    <div className='text-md text-gray-300 font-semibold pb-2 mt-6'>Price</div>
                    <div className='text-sm text-gray-500 font-normal pb-2 '>Set your price</div>
                    <input className='w-full h-[50px] bg-gray-500/25 rounded-lg px-6 mb-6' placeholder='Enter Price' />
                    <div className='text-sm text-gray-500 font-normal pb-2 '>Royalties</div>
                    <input className=' w-full h-[50px] bg-gray-500/25 rounded-lg px-6' placeholder='Enter Royalties' />
                </div>
                <div className='text-md text-gray-300 font-semibold pb-2 mt-6'>Choose collection</div>
                <div className='text-sm text-gray-500 font-normal pb-2 '>Choose an exiting Categories</div>
                <div className='flex max-md:flex-wrap gap-6 mt-6 w-full '>
                    <div className='w-full'>
                        <div className='h-[100px] bg-gray-500/25 rounded-lg px-6 flex items-center justify-center'>Sale</div>
                    </div>
                    <div className='w-full'>
                        <div className='h-[100px] bg-gray-500/25 rounded-lg px-6 flex items-center justify-center' >Offers</div>
                    </div>
                    <div className='w-full'>
                        <div className='h-[100px] bg-gray-500/25 rounded-lg px-6 flex items-center justify-center'>Cosmos</div>
                    </div>
                    <div className='w-full'>
                        <div className=' h-[100px] bg-gray-500/25 rounded-lg px-6 flex items-center justify-center' >Artwork</div>
                    </div>
                </div>
                <button className='p-4 max-w-[200px] text-xl font-semibold border border-gray-500/25 px-6 mt-20 bg-indigo-700 hover:bg-indigo-600 mb-20'>Sell Item</button>
            </div>
            <div className='flex justify-center max-xl:hidden'>
                <Card image={"https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200"} name={"NFT"} price={19} number={3}/>
            </div>
        </section>
    )
}

export default Sellitem