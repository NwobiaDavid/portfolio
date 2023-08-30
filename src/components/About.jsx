import React from "react";

const About = () => {
    return ( 
        <div name='about' className="w-full md:h-[720px]  bg-gray-900 text-white  lg:first-letter:mb-[300px] ">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-center md:text-left">
                <div className="pb-8 mt-20 ">
                    <p className="text-4xl font-bold inline border-b-4 border-gray-500"><span className=" text-red-500">Ab</span>out</p>
                </div>

                <p className="text-xl md:mt-20">
                I am flexible, reliable and possess excellent time keeping skills,
                I am an enthusiastic, self-motivated, reliable, responsible
                 and hard working person and I am a mature team worker 
                 and adaptable to all challenging situations.

                </p>
                <br />
                <p className="text-xl">
               

                 I am a talented, ambitious and hardworking individual, with broad skills and experience in digital marketing, social media and leading projects.
Furthermore, I am adept at handling multiple tasks on a daily basis competently and at working well under pressure.

A key strength is communication; building strong relationships with people in order to deliver the best results.
                </p>
            </div>
        </div>
     );
}
 
export default About;