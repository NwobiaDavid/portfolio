import React, { useState } from 'react';
import imageGallery from '../assets/portfolio/image-search.webp';
import Notebook from '../assets/portfolio/NoteBook.webp';
import Secrets from '../assets/portfolio/Secrets.webp';
import ReactNat from '../assets/portfolio/react-native.webp';
import DailyMart from '../assets/portfolio/daily-mart.webp';

const PortfolioItem = ({ id, src, link, code, name, stack }) => {
  const [hover, setHover] = useState(false);

  const hoverEffect = () => {
    setHover(true);
  };

  const hoverOut = () => {
    setHover(false);
  };

  return (
    <div
      className={`bg-black flex flex-col  rounded-lg transition-transform transform border border-transparent  hover:border-white hover:scale-105 duration-300 ease-in-out overflow-hidden relative`}
      onMouseEnter={hoverEffect}
      onMouseLeave={hoverOut}
    >
      <h1 className="text-2xl text-center p-3">{name}</h1>
      <div className="flex flex-col w-full h-full  ">

        <div className="flex flex-col md:flex-row px-2">
          <div className="flex  flex-col rounded-l-lg justify-center">
            <img
              src={src}
              alt="project_image"
              className="rounded-tl h-[150px] flex justify-center"
            />
          </div>
          <div className="md:w-[40%] bg-black pt-2 md:pt-0 md:pl-2">
            <div className='mb-1'>
              <h3 className='text-red-500 '>Description</h3>
              <p className="text-sm opacity-90" >this is the description, not more than 20 words</p>
            </div>
            <span className='text-red-500 '>Tech stack: <span className="text-sm text-white opacity-90">{stack}</span></span>
          </div>
        </div>

        <div className="flex item-center my-2 justify-center rounded-b bg-transparent">
          <a
            href={code}
            target="_blank"
            rel="noreferrer"
            className="w-1/2 text-white hover:font-bold flex justify-center hover:text-blue-500 px-6 py-4 duration-200 hover:scale-105"
          >
            Code
          </a>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="w-1/2 px-6 flex justify-center text-white hover:font-bold hover:text-blue-500 py-4 duration-200 hover:scale-105"
          >
            Demo
          </a>
        </div>

      </div>

      {/* {hover && (
        <div className="text-white p-3 lg:w-full h-[60%] absolute top-[14%] left-0 bg-gray-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-50">
          <h2 className='text-2xl'><span className='text-red-500 font-bold'>Tech Stack:</span> {stack}</h2>
        </div>
      )} */}
    </div>
  );
};

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Notebook,
      name: 'NoteBook',
      link: 'https://notebook-nglu.onrender.com/',
      code: 'https://github.com/NwobiaDavid/notebook',
      stack: 'HTML, CSS, EJS, Mongo DB, Node JS, Express',
      desc: 'a web app with CRUD functionalities and authentication using passport.js'
    },
    {
      id: 2,
      src: Secrets,
      name: 'Secrets',
      link: 'https://secret-fkvw.onrender.com/',
      code: 'https://github.com/NwobiaDavid/secret',
      stack: 'HTML, CSS, EJS, Mongo DB, Node JS, Express',
      desc: 'a web app with a shared database for all users and authentication'
    },
    {
      id: 3,
      src: imageGallery,
      name: 'React ImageGallery',
      link: 'https://aesthetic-boba-50acb6.netlify.app/',
      code: 'https://github.com/NwobiaDavid/image-gallery',
      stack: 'React, Pixabay API',
    },
    {
      id: 4,
      src: DailyMart,
      name: 'Daily Mart',
      link: 'https://github.com/NwobiaDavid/DailyMart',
      code: 'https://github.com/NwobiaDavid/DailyMart',
      stack: 'React, Bootstrap, Tailwind CSS, Mongo DB, Node JS, Express',
    },
  ];

  return (
    <div
      name="portfolio"
      className=" bg-gray-900 w-screen overflow-hidden text-white md:h-[1020px] text-center md:text-left "
    >
      <div className=" p-4 flex lg:flex-row flex-col justify-center ">
        <div className="pb-8 lg:w-[50%] flex items-center flex-col mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500 ">
            Port<span className="text-red-500">folio</span>
          </p>
          <p className="py-6">Check out some of my works right here :</p>
        </div>

        <div className="grid w-full sm:grid-cols-2 md:grid-cols-2 gap-5 md:px-12 sm:px-0">
          {portfolios.map(({ id, src, link, code, name, stack }) => (
            <PortfolioItem
              key={id}
              name={name}
              id={id}
              stack={stack}
              src={src}
              link={link}
              code={code}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
