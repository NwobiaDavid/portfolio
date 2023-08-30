import React from "react";

const Contact = () => {
    return ( 
        <div name='contact' className="w-full lg:h-screen bg-gray-900 text-white text-center ">
            
  <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto  h-full">
    <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-500">Con<span className="text-red-500">tact</span></p>
        <p className="py-6">submit the form below to get in touch with me</p>
    </div>

    <div className="flex justify-center items-center">

        <form action="https://getform.io/f/421ac3cf-f724-40c6-8146-43d85739e0ab"
         method='POST' className="flex flex-col w-full md:w-1/2">
            <input type="text" name="name"
            className="p-2 bg-transparent border-2 rounded-md text-white
            focus:outline-none" placeholder="name"/>

            <input type="text" name="email"
            className="p-2 bg-transparent my-4 border-2 rounded-md text-white focus:outline-none" placeholder="email"/>

            <textarea name="message" rows="10" 
            className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            placeholder="enter your message"></textarea>

            <button className="text-white bg-red-500 px-6 mx-auto my-8  py-3 flex items-center rounded-md hover:scale-110 duration-300">Let's talk</button>
        </form>
    </div>
  </div>

        </div>
     );
}
 
export default Contact;