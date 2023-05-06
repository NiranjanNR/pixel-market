import React from 'react'
import './NavBar.css'

const NavBar = () => {
    return (
        <div className='md:mx-3 border-b border-gray-500/25 z-index'>
            <div className='py-4 flex justify-center items-center text-slate-100'>
                <div className='mr-auto text-3xl ml-10 font-extrabold'>
                    <span><img className="h-16" src={require('../../assets/logo_text.png')} alt="PIXEL MARKET" /></span>
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