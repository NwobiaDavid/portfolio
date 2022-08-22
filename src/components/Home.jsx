import React from "react";
import ProfilePic from "../assets/profilepic.png";
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
import { Link } from "react-scroll";


const Home = () => {
    return ( 
       
        <div name='home' className="h-screen w-full bg-black">

         <div className="max-w-screen-lg mx-auto flex flex-col 
         items-center justify-center h-full px-4 md:flex-row ">
            <div className="flex flex-col justify-center h-full">
                <h2 className="text-4xl sm:text-7xl font-bold text-white">
                    i'm a <span className="text-blue-500">front-<span className="text-red-500">end</span> developer</span>
                </h2>
                <p className="text-gray-500 py-4 max-w-md">
                    Lorem ipsum dolor sit amet consectetur
                     adipisicing elit. Veritatis illo distinctio
                      magni cupiditate quam dolorem, mollitia ut 
                      consectetur repellendus harum? Nisi id eligendi libero 
                      quasi modi fugiat similique minus aliquid.
                </p>
                <div>
                    <Link to="portfolio" smooth duration={500} 
                    
                    className="group text-white w-fit px-6 py-3 
                    my-2 flex items-center rounded-md bg-red-500  cursor-pointer">
                        Portfolio 
                        <span className="group-hover:rotate-90 duration-300">
                            <MdOutlineKeyboardArrowRight size={25} 
                            className="ml-1"/>
                         </span>
                    </Link>
                </div>
            </div>

            <div>
                <img src={ProfilePic} alt="my profile"
                className="rounded-2xl mx-auto w-2/3 md:w-full" />
            </div>

         </div>
        </div>
     );
};
 
export default Home;