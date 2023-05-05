import React from 'react'
import { BsInstagram,BsYoutube,BsLinkedin,BsBasketFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="p-20 bg-[#23262F]">
      <footer>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 text-white">
         
          <div>
            <h5 className="text-xl font-bold mb-2.5">The New Creative </h5>
            <h5 className="text-xl font-bold mb-2.5"> Economy</h5>
            <BsBasketFill className='w-12 h-12'/>
          </div>
          <div>
            <h5 className="font-bold mb-2.5 text-xl">Quick Links</h5>

            <ul className="list-none mb-0 ">
              <li className='mb-2'>
                
                 Menu
                
              </li>
              <li className='mb-2'>
                
                  Discover
                
              </li>
              <li className='mb-2'>
                
                  Create Item
                
              </li>
              <li className='mb-2'>
                
                 About Us
                
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-xl font-bold mb-2.5">About Cosmic</h5>
            <ul className="list-none mb-0 ">
              <li className='mb-2'>
                
                Documentation
                
              </li>
              <li className='mb-2'>
                
                  Contact Us
                
              </li>
              
            <li className='flex justify-start gap-4'>
                <div>
             <BsInstagram className='w-5 h-5'/>
             </div>
             <div>
             <BsYoutube className='w-5 h-5'/>
             </div>
             <div>
             <BsLinkedin className='w-5 h-5'/>
             </div>
            </li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer