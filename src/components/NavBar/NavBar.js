import { useState } from "react";
import './NavBar.css'
import { VscChromeClose } from "react-icons/vsc";
import { TiThMenu } from "react-icons/ti";
const NavBar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return (
        <div className='md:mx-3 border-b border-gray-500/25 z-index'>
        <div className='py-4 flex justify-center items-center text-slate-100'>
          <div className='mr-auto text-3xl ml-10 font-extrabold'>
            <span>
              <img className="h-16" src={require('../../assets/logo_text.png')} alt="PIXEL MARKET" />
            </span>
          </div>
          <div className='hidden md:flex font-semibold text-lg'>
            <button className='hover:text-white/75 px-5'>About us</button>
            <button className='hover:text-white/75 px-5'>Discover</button>
            <button className='hover:text-white/75 px-5'>Support</button>
            <button className='hover:text-white/75 px-5'>Blog</button>
          </div>
          <div className='md:hidden'>
            <button className='text-white text-xl font-bold mr-5 scale-125' onClick={toggleMenu}>
              {isMenuOpen ? (<VscChromeClose/>) : (<TiThMenu/>)}
            </button>
          </div>
          <div className={`md:hidden absolute top-16 right-0 bg-black/90 w-full ${isMenuOpen ? '' : 'hidden'}`}>
            <div className='flex flex-col items-center text-lg py-2'>
              <button className='hover:text-white/75 my-2' onClick={toggleMenu}>About us</button>
              <button className='hover:text-white/75 my-2' onClick={toggleMenu}>Discover</button>
              <button className='hover:text-white/75 my-2' onClick={toggleMenu}>Support</button>
              <button className='hover:text-white/75 my-2' onClick={toggleMenu}>Blog</button>
            </div>
          </div>
          <button className='hidden md:block text-xl font-bold ml-auto pr-10 sign-up'>Login</button>
        </div>
      </div>

    )
    // const [navbar, setNavbar] = useState(false);

    // return (
    //     <nav className="w-full bg-white shadow">
    //         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
    //             <div>
    //                 <div className="flex items-center justify-between py-3 md:py-5 md:block">
    //                     <a href="javascript:void(0)">
    //                         <h2 className="text-2xl font-bold">LOGO</h2>
    //                     </a>
    //                     <div className="md:hidden">
    //                         <button
    //                             className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
    //                             onClick={() => setNavbar(!navbar)}
    //                         >
    //                             {navbar ? (
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="w-6 h-6"
    //                                     viewBox="0 0 20 20"
    //                                     fill="currentColor"
    //                                 >
    //                                     <path
    //                                         fillRule="evenodd"
    //                                         d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
    //                                         clipRule="evenodd"
    //                                     />
    //                                 </svg>
    //                             ) : (
    //                                 <svg
    //                                     xmlns="http://www.w3.org/2000/svg"
    //                                     className="w-6 h-6"
    //                                     fill="none"
    //                                     viewBox="0 0 24 24"
    //                                     stroke="currentColor"
    //                                     strokeWidth={2}
    //                                 >
    //                                     <path
    //                                         strokeLinecap="round"
    //                                         strokeLinejoin="round"
    //                                         d="M4 6h16M4 12h16M4 18h16"
    //                                     />
    //                                 </svg>
    //                             )}
    //                         </button>
    //                     </div>
    //                 </div>
    //             </div>
    //             <div>
    //                 <div
    //                     className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
    //                         navbar ? "block" : "hidden"
    //                     }`}
    //                 >
    //                     <ul className="items-center justify-center space-y-8 md:flex md:space-x-6 md:space-y-0">
    //                         <li className="text-gray-600 hover:text-blue-600">
    //                             <a href="javascript:void(0)">Home</a>
    //                         </li>
    //                         <li className="text-gray-600 hover:text-blue-600">
    //                             <a href="javascript:void(0)">Blog</a>
    //                         </li>
    //                         <li className="text-gray-600 hover:text-blue-600">
    //                             <a href="javascript:void(0)">About US</a>
    //                         </li>
    //                         <li className="text-gray-600 hover:text-blue-600">
    //                             <a href="javascript:void(0)">Contact US</a>
    //                         </li>
    //                     </ul>
    //                 </div>
    //             </div>
    //         </div>
    //     </nav>
    // );
}

export default NavBar