import React from "react";
import { SiLinkedin } from "react-icons/si";
import image from "./image.png";
import google from "./google.png";
import Vector from './Vector.png'

function Poweredby() {
  return (
    <>
      <div className="content-center  flex justify-center relative -top-4 lg:-top-16 overflow-hidden z-10">
        <nav className=" gap-2 p-3 flex bg-white  rounded-3xl lg:gap-x-20 justify-center w-fit lg:text-xl">
          <p className=" text-xs pt-1 lg:text-2xl lg:pt-3 lg:my-3 lg:ml-8 text-power">
            {" "}
            Powered By :{" "}
          </p>
         <img src={Vector}className="w-10 h-5 pt-1 lg:w-28  lg:h-9 lg:my-3 lg:mt-6"/>
          <span className=" text-sm lg:pt-3 lg:my-3 lg:text-3xl  text-facebook">
            {" "}
            facebook{" "}
          </span>
          <img
            src={google}
            className="w-10 h-5 pt-1 lg:w-28  lg:h-9 lg:my-3 lg:mt-7"
          />
          <img
            src={image}
            className="w-10 h-5 pt-1 lg:w-28  lg:h-9 lg:my-3 lg:mr-8 lg:mt-7 "
          />
        </nav>
      </div>
    </>
  );
}

export default Poweredby;
