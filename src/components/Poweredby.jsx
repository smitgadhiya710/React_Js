import React from "react";
import { SiLinkedin } from "react-icons/si";
import image from './image.png'
import google from './google.png'

function Poweredby() {
  return (
    <div>
        <div className="content-center flex justify-center relative -top-16 overflow-hidden z-10">
      <nav className="flex bg-white pb-4 pt-4 mr rounded-3xl gap-x-28 justify-center w-fit text-xl">
        <p className="pt-3 my-3 ml-8 text-power"> Powered By : </p>
        <span className="pt-3 mt-1 my-3   text-linkedin flex justify-left items-center">
          {" "}
          Linked
          <SiLinkedin size={"20px"} />{" "}
        </span>
        <span className="pt-3 my-3  text-facebook"> facebook </span>
        <img src={google} className="w-16 h-9 my-3 mt-5" />
        <img src={image} className="w-16 h-9 my-3 mr-8 mt-4 " />
      </nav>
      </div>
    </div>
  );
}

export default Poweredby;
    