import React, { useState } from "react";
import { BiLogoAmazon } from "react-icons/bi";
import { IoMdCheckmarkCircle } from "react-icons/io";
import { MdMenu } from "react-icons/md";
import { IoCloseSharp, IoHandLeft } from "react-icons/io5";
import Array from "./Array";
import { enableBodyScroll, disableBodyScroll } from "body-scroll-lock";

function Header_Navbar() {
  const [toggle, settoggle] = useState();

  return (
    <>
      <div className=" bg-lightpista py-px size-full  ">
        <nav className="max-w-[1250] flex bg-white  mt-7 ml-8 mr-8 mb-7 pb-4 pt-4  rounded-3xl  justify-end">
          <div className="width=20px mr-auto lg:mt-1">
            <BiLogoAmazon size={"40px"} className="content-start ml-5" />
          </div>
          {toggle ? (
            <></>
          ) : (
            <MdMenu
              onClick={() => {
                settoggle(!toggle);
                disableBodyScroll(document);
                console.log("check");
              }}
              size={"25px"}
              className="sm:hidden block mt-2 mr-2"
            />
          )}

          <div className="hidden sm:flex text-black lg:gap-5">
            <span className="text-darkpista  lg:pt-3"> Home </span>
            <span className="lg:pt-3"> Our Services </span>
            <span className="lg:pt-3"> Our process </span>
            <span className="lg:pt-3"> Why Choose Us </span>
            <button className="bg-darkpista text-white  font-semibold lg:py-2 lg:px-4 border rounded-lg lg:mr-4 ">
              Order Now
            </button>
            <button className="bg-transparent  text-darkpista font-semibold lg:py-2 lg:px-9 lg:mr-5 border border-darkpista rounded-lg ">
              Login
            </button>
          </div>
        </nav>

        {/* -------------------------------------------------------------Mobile Navbar-------------------------------------------------------------- */}

        <div
          className={`"sm:hidden z-50  gap-3 pl-5 text-left w-screen h-screen text-white  bg-darkblue fixed right-0 top-0 bottom-0 flex flex-col  ${
            toggle ? "left-[0%]" : "left-[-110%]"
          }`}
        >
          <IoCloseSharp
            onClick={() => {
              settoggle(!toggle);
              enableBodyScroll(document);
            }}
            size={"25px"}
            className="sm:hidden block mt-8 absolute right-5 text-white"
          />
          <span className="text-darkpista  pt-24"> Home </span>
          <span className="pt-3"> Our Services </span>
          <span className="pt-3"> Our process </span>
          <span className="pt-3"> Why Choose Us </span>
          <button className="bg-darkpista text-white  font-semibold px-4 py-1 mt-4  w-fit border rounded-lg mr-4 ">
            Order Now
          </button>
          <button className="bg-transparent  text-darkpista font-semibold py-1 px-9 mr-5 mt-4 w-fit border border-darkpista rounded-lg ">
           Login
          </button>
        </div>
        {/* -------------------------------------------------------------Mobile Navbar-------------------------------------------------------------- */}

        <div className="w-full flex flex-col lg:flex-row justify-center items-left">
          <div className="lg:w-[50%] lg:mb-56 ">
            <div className="text-left inline-grid m-6 lg:w-3/5  ">
              <h1 className="text-darkpista font-mono text-2xl lg:text-4xl  mt-6 lg:mt-36">
                WE PROVIDE
              </h1>
              <h1 className="text-neutral-950 font-serif lg:text-3xl font-semibold">
                ACTION-PROVOKING
              </h1>
              <h3 className="lg:text-2xl mb-6 lg:mb-8">
                TO HELP YOU GROW AUDIENCE
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                officia error, molestias recusandae blanditiis similique eveniet
                vitae facilis libero fugiat.
              </p>

              <div className="text-left flex-row ">
                <button className="bg-black  text-white font-semibold py-1 px-2 mt-11 lg:py-2 lg:px-3 border border-black  rounded lg:mr-6 lg:mt-28">
                  Free Proposal
                </button>
                <button className="bg-transparent  text-black font-semibold py-1 px-5 ml-4 mt-5  lg:ml-4 sm:ml-11 lg:py-2 lg:px-6 border border-black rounded">
                  Chat Now
                </button>
              </div>
            </div>
          </div>
          <div className="lg:w-[50%]  ">
            <div className="justify-end overflow-hidden m-6  lg:ml-32">
              <img src="Saly-1.png"></img>
            </div>
            <div className="w-fit flex lg:justify-right mb-20 m-6  bg-white rounded-lg lg:mb-56">
              <div className=" w-fit  lg:grid lg:grid-cols-2 pl-3 pr-3 pt-3 pb-3 lg:ml-4 lg:mr-4 gap-1 lg:mt-3  lg:mb-3">
                <Array
                  arr={[
                    {
                      text: "Field Specific Writers",
                    },
                    {
                      text: "Flexible Rivision Policy",
                    },
                    {
                      text: "Complate Ownership",
                    },
                    {
                      text: "Money-Back Guarantee",
                    },
                    {
                      text: "Customer Support",
                    },
                    {
                      text: "plagiarism Free Content",
                    },
                  ]}
                >
                  <IoMdCheckmarkCircle
                    size={"15px"}
                    className="text-darkpista"
                  />
                </Array>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header_Navbar;
