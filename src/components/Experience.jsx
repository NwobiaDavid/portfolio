import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import github from "../assets/github.png";
import nextjs from "../assets/nextjs.png";
import git from "../assets/git.png";
import ejs from "../assets/ejs.png"
import bootstrap from "../assets/bootstrap.png"
import jquery from "../assets/jquery.png"
import node from "../assets/node better.png"
import mongo from "../assets/MongoDB-removebg-preview.png"


const Experience = () => {

const techs=[
    {
        id:1,
        src: html,
        title:'HTML',
        style:'shadow-orange-500'
    },
    {
        id:2,
        src: css,
        title:'CSS',
        style:'shadow-blue-500'
    },
    {
        id:3,
        src: javascript,
        title:'JavaScript',
        style:'shadow-yellow-500'
    },
    {
        id:4,
        title:'React',
        src:reactImage,
        style:'shadow-blue-600'
    },
    {
        id:5,
        src: tailwind,
        title:'Tailwind',
        style:'shadow-sky-500'
    },
    {
        id:6,
        src: node,
        title:'Node js',
        style:'shadow-green-400'
    },
    {
        id:7,
        src: github,
        title:'GitHub',
        style:'shadow-gray-500'
    },
    {
        id:8,
        src: git,
        title:'git',
        style:'shadow-orange-700'
    },{
        id:9,
        src: ejs,
        title:'ejs',
        style:'shadow-lime-700'
    },{
        id:10,
        src: jquery,
        title:'jquery',
        style:'shadow-blue-300'
    },{
        id:11,
        src: bootstrap,
        title:'bootstrap',
        style:'shadow-indigo-500'
    },{
        id:12,
        src: mongo,
        title:'Mongo DB',
        style:'shadow-green-500'
    }

]


    return ( 
        <div name='experience' className=" bg-gray-900 h-[720px] text-center  md:text-left">

        <div className=" p-4 flex lg:flex-row flex-col px-[10%] justify-center  text-white">
    <div className="lg:w-[50%] flex flex-col items-center mt-20">
        <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline"><span className="text-red-500">Ex</span>perience</p>
        <p className="py-6">These are the technologies i've worked with :</p>
    </div>

    <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">


            {
                techs.map(({id, src, title, style})=>(
                <div key={id} className={`shadow-md hover:scale-105 duration-500 
                  py-2 rounded-lg ${style}`}>
                            <img src={src} alt="" className="w-20 mx-auto" />
                            <p className="mt-4">{title}</p>
                        </div>

                ))
            }


       
    </div>
</div>

        </div>
     );
}
 
export default Experience;