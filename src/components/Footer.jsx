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
        <div className="bg-darkblue text-white w-full flex justify-center items-center gap-6 relative -top-28">
          <div className="flex gap-4 w-[33%] justify-start flex-col pl-9 pr-9 ml-5 mr-11 mt-6 ">
            <BiLogoAmazon
              size={"60px"}
              className="flex justify-start  pb-2 "
            />
            <p className="text-left">
              {" "}
              A plateform was design to address the immediate need to increase
              the visibility of qualified affordable tutors to parents.
            </p>
            <p className="text-rakhodi"> ____________________________</p>
            <p> info@projexive.com</p>
            <p>
              {" "}
              <MdAddCall
                size={"20px"}
                className="inline-block text-darkpista"
              />{" "}
              +91 985-623-7849
            </p>
            <p> Address:7038 10th Street Mays landing, NJ 08330</p>
          </div>

          <div className=" gap-8 w-[33%] justify-start items-left pl-5 pr-5 mr-5 mt-8">
            <p className="mb-7  -ml-48">USEFUL LINKS</p>
            <div className="mr- grid grid-cols-2 gap-5">
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

          <div className="flex gap-5 w-[33%] mt-2 pt-16 pr-5 ml-5 mr-5 mb-24  justify-start items-start  flex-col">
            <h4>SUBSCRIBE US</h4>
            <p className="text-left">
              Sign-up for our mailing list to get latest updates and offers.{" "}
            </p>
            <div className="flex overflow-hidden rounded-lg text-white bg-mailbg">
              <input
                type="text"
                placeholder="   Email address...."
                className="rounded-lg h-10 bg-transparent text-white border-none max-w-96 "
              />
              <button className="bg-darkpista pl-2 pr-2 rounded-md ">
                Send
              </button>
            </div>
            <p>Your mail id is confidential</p>
            <p className="text-rakhodi"> ____________________________</p>
            <div className="flex flex-row gap-6">
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
        <footer className="bg-black flex flex-row text-white3 relative -top-28">
          <div>
            <p className="flex justify-left ml-16 pt-5 pb-5 ">
              Copyrights &copy;2020 All Rights are Reserved By &nbsp;
              <p className="text-darkpista inline-block"> E-cource</p>{" "}
            </p>
          </div>
          <p className="flex justify-right ml-96  pt-5 pb-5 ">
            Terms Of Use Privacy &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp; Security
            Statement
          </p>
        </footer>
      </div>
    </>
  );
}

export default Footer;
