import React, { useState } from 'react';
import imageGallery from '../assets/portfolio/image-search.webp';
import Notebook from '../assets/portfolio/NoteBook.webp';
import Secrets from '../assets/portfolio/Secrets.webp';
import ReactNat from '../assets/portfolio/react-native.webp';
import DailyMart from '../assets/portfolio/daily-mart.webp';

const PortfolioItem = ({ id, src, link, code, name , stack}) => {
  const [hover, setHover] = useState(false);

  const hoverEffect = () => {
    setHover(true);
  };

  const hoverOut = () => {
    setHover(false);
  };

  return (
    <div
      className={`shadow-md shadow-gray-500 flex flex-col rounded-lg transition-transform transform hover:scale-105 duration-300 ease-in-out overflow-hidden relative`}
      onMouseEnter={hoverEffect}
      onMouseLeave={hoverOut}
    >
    <h1 className='text-2xl p-2'>{name}</h1>
      <div className="flex flex-col w-full justify-center">
      
        <img
          src={src}
          alt="project_image"
          className="rounded-tl h-[150px] flex justify-center"
        />
        <div className="flex item-center justify-center rounded-b bg-transparent">
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="w-1/2 text-white hover:font-bold flex justify-center hover:text-blue-500 px-6 py-3 m-5 duration-200 hover:scale-105"
          >
            Code
          </a>
          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="w-1/2 px-6 flex justify-center text-white hover:font-bold hover:text-blue-500 py-3 m-5 duration-200 hover:scale-105"
          >
            Demo
          </a>
        </div>
      </div>

      {hover && (
        <div className="text-white p-3 lg:w-full h-[60%] absolute top-[14%] left-0 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
          <h2 className='text-2xl'><span className='text-red-500 font-bold'>Tech Stack:</span> {stack}</h2>
        </div>
      )}
    </div>
  );
};

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Notebook,
      name: "NoteBook",
      link: 'https://notebook-nglu.onrender.com/',
      code: 'https://github.com/NwobiaDavid/notebook',
     stack: "HTML, CSS, EJS, Mongo DB, Node JS, Express"
    },
    {
      id: 2,
      src: Secrets,
      name: "Secrets",
      link: 'https://secret-fkvw.onrender.com/',
      code: 'https://github.com/NwobiaDavid/secret',
      stack: "HTML, CSS, EJS, Mongo DB, Node JS, Express"
    },
    {
      id: 3,
      src: imageGallery,
      name: "React ImageGallery",
      link: 'https://aesthetic-boba-50acb6.netlify.app/',
      code: 'https://github.com/NwobiaDavid/image-gallery',
      stack: "React, Pixabay API"
    },
    {
      id: 4,
      src: ReactNat,
      name: "Job App",
      link: 'https://github.com/NwobiaDavid/reactNativeJobApp',
      code: 'https://github.com/NwobiaDavid/reactNativeJobApp',
      stack: "React native, CSS"
    },
    {
      id: 5,
      src: DailyMart,
      name: "Daily Mart",
      link: 'https://github.com/NwobiaDavid/DailyMart',
      code: 'https://github.com/NwobiaDavid/DailyMart',
      stack: "React, Bootstrap, Tailwind CSS, Mongo DB, Node JS, Express"
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gray-900 lg:px-[10%] w-screen overflow-hidden text-white md:h-[1020px] text-center md:text-left "
    >
      <div className=" p-4 flex lg:flex-row flex-col justify-center ">
      
        <div className="pb-8 lg:w-[50%] flex items-center flex-col mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Port<span className="text-red-500">folio</span>
          </p>
          <p className="py-6">Check out some of my works right here :</p>
        </div>

        <div className="grid w-full sm:grid-cols-2 md:grid-cols-3 gap-5 md:px-12 sm:px-0">
          {portfolios.map(({ id, src, link, code, name , stack}) => (
            <PortfolioItem key={id} name={name} id={id} stack={stack} src={src} link={link} code={code} />
          ))}
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
