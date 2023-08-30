import React, { useState} from 'react';
import {FaBars, FaTimes} from "react-icons/fa";
import {Link} from "react-scroll";

const NavBar = () => {


    const [nav, setNav]= useState(false);

    const Links =[{
        id:1,
        link:'home'
    },
    {
        id:2,
        link:'about'
    },
    {
        id:3,
        link:'portfolio'
    },
    {
        id:4,
        link:'experience'
    },
    {
        id:5,
        link:'contact'
    },
]


    return ( 
        
        <div className='flex justify-between fixed items-center h-16 md:h-20 md:w-[90vw] w-screen py-1 z-10 rounded-full md:m-2 md:border md:border-gray-100 text-white px-4  bg-slate-900'>
           <div>
            <h1 className=' text-4xl md:text-5xl font-signature ml-2'>大<span className='text-red-500'>衛</span></h1>
           </div>

            <ul className='hidden md:flex'>

                {Links.map(({id, link})=>(
                    <li key={id} className='px-4 cursor-pointer uppercase font-medium text-gray-500 
                    hover:scale-105 duration-200 hover:text-white ease-in '>
                        <Link to={link} smooth duration={500}>
                            {link}</Link></li> 
                ))}
            </ul>

            <div 
            onClick={()=> setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden hover:text-red-500 duration-200'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                
            </div>

            {nav && (
 <ul className='flex flex-col mr-3 justify-center items-center absolute top-0 w-screen left-0 right-0 h-screen bg-black'>

                {Links.map(({id, link})=>(
                    <li key={id} className='px-4 cursor-pointer uppercase py-6 text-4xl text-gray-500 focus:text-white hover:text-white duration-200'><Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>
                    {link}</Link></li>
                ))}
            </ul>
            )}

        </div>
     );
}
 
export default NavBar;