import React from "react";
import metaLogin from '../assets/portfolio/metaLogin.PNG'
import todoApp from '../assets/portfolio/todoApp.PNG'
import imageGallery from "../assets/portfolio/image-search.png"
import simon from "../assets/portfolio/Simon.png"
import dicee from "../assets/portfolio/Dicee.png"
import Notebook from "../assets/portfolio/NoteBook.png"
import Secrets from "../assets/portfolio/Secrets.png"



const Portfolio = () => {

const portfolios=[
    {
        id:1,
        src: Notebook,
        link: 'https://notebook-nglu.onrender.com/',
        code:'https://github.com/NwobiaDavid/notebook'
        
    },
    {
        id:2,
        src: Secrets,
        link:'https://secret-fkvw.onrender.com/',
        code:'https://github.com/NwobiaDavid/secret'
    },
    {
        id:3,
        src: imageGallery,
        link: 'https://aesthetic-boba-50acb6.netlify.app/',
        code:'https://github.com/NwobiaDavid/image-gallery'
        
    }

]



    return ( 
        <div name='portfolio' className=" bg-gray-900 text-white md:h-screen text-center md:text-left my-20">

  <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full  min-h-screen">
    <div className="pb-8 mt-20">
        <p className="text-4xl font-bold inline border-b-4
        border-gray-500 ">Port<span className="text-red-500">folio</span></p>

        <p className="py-6">Check out some of my works right here :</p>
    </div>



    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8
     px-12 sm:px-0">

        
{
    portfolios.map(({id,src,link,code})=>(


        <div key={id} className="shadow-md shadow-gray-500
         rounded-lg hover:scale-105 duration-200 overflow-hidden ">

            <img src={src} alt=""  className="rounded-t "/>
            <div className="flex item-center justify-center rounded-b bg-transparent ">

                <a href={code} target="_blank"  rel="noreferrer" className="w-1/2 text-white hover:font-bold  hover:text-blue-500 px-6 py-3 m-5 duration-200 
                hover:scale-105"> Code  </a>

                <a href={link} target="_blank"  rel="noreferrer" className="w-1/2  px-6  text-white hover:font-bold hover:text-blue-500 py-3 m-5 duration-200
                hover:scale-105"> Demo </a>

            </div>

        </div>
        
    ))
}

    </div>
  </div>



        </div>
     );
}
 
export default Portfolio;