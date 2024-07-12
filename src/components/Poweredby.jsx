import React from "react";
import { SiLinkedin } from "react-icons/si";
import image from "./image.png";
import google from "./google.png";

function Poweredby() {
  return (
    <>
      <div className="content-center  flex justify-center relative -top-4 lg:-top-16 overflow-hidden z-10">
        <nav className=" gap-2 p-3 flex bg-white  rounded-3xl lg:gap-x-28 justify-center w-fit lg:text-xl">
          <p className=" text-xs pt-1 lg:pt-3 lg:my-3 lg:ml-8 text-power">
            {" "}
            Powered By :{" "}
          </p>
          <span className=" text-sm lg:pt-3 lg:mt-1 lg:my-3   text-linkedin flex justify-left items-center">
            {" "}
            Linked
            <SiLinkedin size={"11px"} />{" "}
          </span>
          <span className=" text-sm lg:pt-3 lg:my-3  text-facebook">
            {" "}
            facebook{" "}
          </span>
          <img
            src={google}
            className="w-10 h-5 pt-1 lg:w-16  lg:h-9 lg:my-3 lg:mt-5"
          />
          <img
            src={image}
            className="w-10 h-5 pt-1 lg:w-16  lg:h-9 lg:my-3 lg:mr-8 lg:mt-4 "
          />
        </nav>
      </div>
    </>
  );
}

export default Poweredby;
