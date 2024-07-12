import React, { useState } from "react";
import { BiLogoAmazon } from "react-icons/bi";
import { FaAngleDoubleRight } from "react-icons/fa";
import { IoLogoFacebook } from "react-icons/io";
import { IoLogoTwitter } from "react-icons/io";
import { FaGooglePlusG } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdAddCall } from "react-icons/md";
import Array from "./Array";

function Footer() {
  return (
    <>
      <div>
        <div className="bg-darkblue text-white flex-col lg:flex-row  lg:w-full lg:flex lg:justify-center lg:items-center lg:gap-6 relative  ">
          <div className="flex ml-6 mr-4 lg:gap-4 lg:w-[33%] justify-start flex-col lg:pl-9 lg:pr-9 lg:ml-5 lg:mr-11 lg:mt-6 ">
            <BiLogoAmazon
              size={"60px"}
              className="lg:flex lg:justify-start mt-11  lg:pb-2 "
            />
            <p className="text-left">
              {" "}
              A plateform was design to address the immediate need to increase
              the visibility of qualified affordable tutors to parents.
            </p>
            <p className="text-rakhodi text-left">
              {" "}
              ____________________________
            </p>
            <p className="text-left"> info@projexive.com</p>
            <p className="text-left">
              {" "}
              <MdAddCall
                size={"20px"}
                className="inline-block  text-darkpista"
              />{" "}
              +91 985-623-7849
            </p>
            <p className="text-left">
              {" "}
              Address:7038 10th Street Mays landing, NJ 08330
            </p>
          </div>

          <div className="lg:gap-8 lg:w-[33%] justify-start items-left pl-6 pr-2 pt-16 pb-1 lg:pl-5 lg:pr-5 lg:mr-5 lg:mt-8">
            <p className="mb-6 text-left ml-1 lg:mb-7  lg:-ml-48">
              USEFUL LINKS
            </p>
            <div className="gap-1 grid grid-cols-2 lg:gap-5">
              <Array
                arr={[
                  { text: "Science" },
                  {
                    text: "Language",
                  },
                  {
                    text: "Humenities",
                  },
                  {
                    text: "Body & Mind",
                  },
                  {
                    text: "Arts & Crafts",
                  },
                  {
                    text: "LangBusinessage",
                  },
                  {
                    text: "Mathematics",
                  },
                  {
                    text: "About Us",
                  },
                  {
                    text: "Career",
                  },
                  {
                    text: "Why Tutor",
                  },
                  {
                    text: "Policies",
                  },
                  {
                    text: "Meet Team",
                  },
                  {
                    text: "Latest News",
                  },
                  {
                    text: "Projects",
                  },
                ]}
              >
                <FaAngleDoubleRight size={"15px"} className="text-darkpista" />
              </Array>
            </div>
          </div>

          <div className="flex justify-center text-center ml-6 mt-16 gap-2 lg:gap-5 lg:w-[33%] lg:mt-2 lg:pt-16 lg:pr-5 lg:ml-5 lg:r-5 lg:mb-24  lg:justify-start items-start  flex-col">
            <h4 className="mb-4">SUBSCRIBE US</h4>
            <p className="text-left">
              Sign-up for our mailing list to get latest updates and offers.{" "}
            </p>
            <div className="flex overflow-hidden rounded-lg text-white bg-mailbg">
              <input
                type="text"
                placeholder="   Email address...."
                className="rounded-lg  h-8 lg:h-10 bg-transparent text-white border-none max-w-96 "
              />
              <button className="bg-darkpista pl-2 pr-2 rounded-md ">
                Send
              </button>
            </div>
            <p>Your mail id is confidential</p>
            <p className="text-rakhodi"> ________________________</p>
            <div className="flex flex-row mb-4  gap-6">
              <p>
                <IoLogoFacebook size={"25px"} />
              </p>
              <p>
                {" "}
                <IoLogoTwitter size={"25px"} />
              </p>
              <p>
                <FaGooglePlusG size={"25px"} />
              </p>
              <p>
                <FaLinkedin size={"25px"} />
              </p>
            </div>
          </div>
        </div>
        <footer className="bg-black text-xs text-center pt-3 pb-3  flex flex-row lg:flex-col  text-white3 relative lg:-top-28">
          <div className="flex w-full flex-col gap-1 text-center">
            <div>
              <p className=" lg:justify-left lg:ml-16 lg:pt-5 lg:pb-5 ">
                Copyrights &copy;2020 All Rights are Reserved By &nbsp;
                <p className="text-darkpista inline-block"> E-cource</p>{" "}
              </p>
            </div>
            <div>
            <p className=" lg:justify-right lg:ml-96  lg:pt-5 lg:pb-5 ">
              Terms Of Use Privacy &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
              Security Statement
            </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default Footer;
