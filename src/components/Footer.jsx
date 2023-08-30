import React from 'react'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail} from "react-icons/hi";
import { BsFillPersonLinesFill} from "react-icons/bs";
import resume from "../assets/Resume_2.pdf"

export default function Footer() {
    
const Links =[
    {
        id:1,
        child:(
            <>  LinkedIn  < FaLinkedin  size={30}/>  </>    
        ),
        href:'https://www.linkedin.com/in/nwobia-david-a17693237/',
       

    },
    {
        id:2,
        child:(

            <>  GitHub  < FaGithub  size={30}/>  </>    

        ),
        href:'https://github.com/NwobiaDavid',

    },
    {
        id:3,
        child:(

            <>  Mail  < HiOutlineMail  size={30}/>  </>    

        ),
        href:'mailto:dnwobia@gmail.com',
   

    },
    {
        id:4,
        child:(

            <>  Resume  < BsFillPersonLinesFill  size={30}/>  </>    

        ),
        href:resume,
       
        download:true,

    }

]

  return (
    <div className='flex w-screen lg:hidden justify-center overflow-x-hidden  bg-red-500 items-center'>
        {Links.map(({id, child,href, download})=>(
     <div  key={id} 
     className={'flex justify-between items-center py-1 hover:font-bold px-3 md:ml-5 hover:rounded-md duration-200'}
     > 
        <a href={href}
        className='flex justify-between items-center w-full text-white' 
         download ={download}
         target="_blank"
         rel="noreferrer"
         >

           {child}
        </a>
    </div>
)
)}
    </div>
  )
}
