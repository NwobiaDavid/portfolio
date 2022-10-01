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
        
        <div className='flex justify-between items-center h-20 w-fill
         text-white px-4   bg-gray-900'>
           <div>
            <h1 className='text-5xl font-signature ml-2'>大<span className='text-red-500'>衛</span></h1>
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
            onClick={()=> setNav(!nav)} className='cursor-pointer 
            pr-4 z-10 text-gray-500 md:hidden hover:text-red-500 duration-200'>
                {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
                
            </div>

            {nav && (

                

            

            <ul className='flex flex-col justify-center items-center absolute top-0 
            w-screen left-0 h-screen bg-black'>

                {Links.map(({id, link})=>(
                    <li key={id} className='px-4 cursor-pointer 
                    uppercase py-6 text-4xl text-gray-500 focus:text-white hover:text-white duration-200'><Link onClick={()=> setNav(!nav)} to={link} smooth duration={500}>
                    {link}</Link></li>
                ))}
            </ul>
            )}

        </div>
     );
}
 
export default NavBar;