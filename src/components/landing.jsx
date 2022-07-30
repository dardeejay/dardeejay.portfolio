import React from "react";
import ePic from "../assets/pic2.png";
function Landing() {
  return (
    <div className=" relative mx-auto bg-bgColor  ">
      <div className="  bg-bgColor flex flex-col-reverse mx-auto  left-0 right-0 absolute md:flex-row ">
        <div id="text" className="flex-col md:ml-28 md:mt-10 text-left p-4">
          <p className="text-white font-secondaryFont -mb-3 text-xl  ">
            Hi, my name is
          </p>
          <h1 className="md:text-6xl text-4xl font-primaryFont font-bold text-white ">
            Dardee Jay Calura.
          </h1>
          <h1 className="text-primaryColor font-primaryFont font-bold md:-mt-5 -mt-1 text-3xl md:text-4xl">
            An aspiring web developer.
          </h1>

          <p className="text-white font-secondaryFont text-lg md:w-7/12 w-auto leading-none mt-3 md:mt-7">
            I am a web development and programming hobbyist. I'm currently
            self-studying MERN stack to develop full-stack web application in
            the future.
          </p>
        </div>

        <img
          src={ePic}
          alt="bruh"
          className=" w-1/2 mx-auto sm:w-1/2 lg:w-1/3"
        />
      </div>
    </div>
  );
}

export default Landing;
