import React from 'react'
import { BsInstagram,BsYoutube,BsLinkedin } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="p-20 bg-[#141416] border-t border-gray-500/25 mt-4 ">
      <footer>
        <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 text-white place-items-center">
         
          <div>
            <h5 className="text-xl font-bold mb-2.5">The New Creative </h5>
            <h5 className="text-xl font-bold mb-2.5 ml-8"> Economy</h5>
            <img className="h-16 ml-6" src={require('../../assets/logo_text.png')} alt="PIXEL MARKET" />
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
            <h5 className="text-xl font-bold mb-2.5">About Pixel Market</h5>
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