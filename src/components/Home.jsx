import React, { useState, useEffect } from "react";
import ProfilePic from "../assets/profilepic.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {

  // const typedTexts = [
  //   " front-end developer",
  //   " back-end developer",
  //   " full-stack developer",
  //   " writer",
  //   " digital artist",
  // ];

  // const [textIndex, setTextIndex] = useState(0);
  // const [currentText, setCurrentText] = useState("");
  // const [typing, setTyping] = useState(true);
  // const [charIndex, setCharIndex] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (typing) {
  //       if (charIndex < typedTexts[textIndex].length) {
  //         setCurrentText((prevText) => prevText + typedTexts[textIndex][charIndex]);
  //         setCharIndex((prevIndex) => prevIndex + 1);
  //       } else {
  //         setTimeout(() => {
  //           setTyping(false);
  //           setTimeout(() => {
  //             setCurrentText("");
  //             setCharIndex(0);
  //             setTyping(true);
  //             setTextIndex((prevIndex) => (prevIndex + 1) % typedTexts.length);
  //           }, 2000); // Pause for 2 seconds before typing next text
  //         }, 2000); // Pause for 2 seconds before backspacing
  //       }
  //     } else {
  //       if (charIndex > 0) {
  //         setCurrentText((prevText) => prevText.slice(0, -1));
  //         setCharIndex((prevIndex) => prevIndex - 1);
  //       } else {
  //         setTyping(true);
  //       }
  //     }
  //   }, 100); // Type a new character every 100 milliseconds

  //   return () => clearInterval(interval);
  // }, [typing, charIndex, textIndex]);

  return (
    <div name="home" className="h-[720px] w-full mt-10 lg:mt-0 bg-slate-900 ">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 lg:flex-row">
      
      <div className="md:mr-5">
          <img
            src={ProfilePic}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 lg:w-full"
          />
        </div>

        <div className="flex flex-col lg:w-[80%] justify-center h-full lg:items-start items-center">
          <h2 className="text-4xl h-[20%] lg:text-left text-center lg:text-7xl font-bold text-white">
            <span>Full-Stack Engineer</span>
          </h2>

          <p className="text-gray-500  py-4 max-w-md text-center lg:text-left">
            Hi, I am Nwobia David, a full-stack web developer based in Nigeria
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 mb-4 sm:mb-0 my-2 flex items-center rounded-md hover:bg-red-600 bg-red-500  cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Home;
