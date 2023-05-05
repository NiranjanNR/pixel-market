import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='mx-3 border-b border-gray-500/25 pb-6 	'>
            <div className=' flex justify-center text-slate-100 pt-6'>
                <div className='mr-auto text-3xl ml-10 font-extrabold'>
                    <p className=''>Pixel Market</p>
                </div>
                <div className=' flex justify-center'>
                    <div className=' font-semibold text-lg '>
                        <button className='hover:text-white/75 px-5'>About us</button>
                        <button className='hover:text-white/75 px-5'>Discover</button>
                        <button className='hover:text-white/75 px-5'>Support</button>
                        <button className='hover:text-white/75 px-5'>Blog</button>
                    </div>
                </div>
                <button className='text-xl font-bold ml-auto pr-10 sign-up'>Login</button>
            </div>
        </div>

    )
}

export default NavBar