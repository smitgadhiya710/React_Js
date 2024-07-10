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
      <div className=" bg-lightpista lg:py-px size-full ">
        <nav className="max-w-[1240] flex bg-white  lg:mt-7 lg:ml-8 lg:mr-8 lg:mb-7 lg:pb-4 lg:pt-4  rounded-3xl  justify-end">
          <div className="width=20px mr-auto lg:mt-1">
            <BiLogoAmazon size={"40px"} className="content-start lg:ml-7" />
          </div>
          {toggle ? (
            <></>
          ) : (
            <MdMenu
              onClick={() => {
                settoggle(!toggle);
                // disableBodyScroll(document);
                console.log("check");
              }}
              size={"25px"}
              className="sm:hidden block sm:mt-2 sm:mr-2"
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

        {/* -------------------------------------Mobile Navbar-------------------------------------------------------------------------------------- */}

        <div
          className={`"md:hidden  z-50  gap-3 pl-5 text-left w-screen h-screen text-black bg-darkblue fixed right-0 top-0 bottom-0 flex flex-col  ${
            toggle ? "left-[0%]" : "left-[-100%]"
          }`}
        >
          <IoCloseSharp
            onClick={() => {
              settoggle(!toggle);
              // enableBodyScroll(document);
            }}
            size={"25px"}
            className="sm:hidden block mt-8 absolute right-5 text-white" 
          />
          <span className="text-darkpista  pt-24"> Home </span>
          <span className="pt-3"> Our Services </span>
          <span className="pt-3"> Our process </span>
          <span className="pt-3"> Why Choose Us </span>
          <button className="bg-darkpista text-white  font-semibold py-2 px-4 w-fit border rounded-lg mr-4 ">
            Order Now
          </button>
          <button className="bg-transparent  text-darkpista font-semibold py-2 px-9 mr-5 w-fit border border-darkpista rounded-lg ">lg:
            Login
          </button>
        </div>
        {/* -------------------------------------Mobile Navbar-------------------------------------------------------------------------------------- */}

        <div className="w-full flex flex-col lg:flex-row justify-center items-left">
          <div className="w-[50%] lg:mb-56 ">
            <div className="text-left inline-grid w-3/5  ">
              <h1 className="text-darkpista font-mono text-2xl lg:mt-36">
                WE PROVIDE
              </h1>
              <h1 className="text-neutral-950 font-serif text-xl font-semibold">
                ACTION-PROVOKING
              </h1>
              <h3 className="font-medium lg:mb-8">TO HELP YOU GROW AUDIENCE</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
                officia error, molestias recusandae blanditiis similique eveniet
                vitae facilis libero fugiat.
              </p>

              <div className="text-left">
                <button className="bg-black  text-white font-semibold lg:py-2 lg:px-4 border border-black  rounded lg:mr-6 lg:mt-28">
                  Free Proposal
                </button>
                <button className="bg-transparent  text-black font-semibold lg:py-2 lg:px-8 border border-black rounded">
                  Chat Now
                </button>
              </div>
            </div>
          </div>
          <div className="w-[50%]  ">
            <div className="justify-end overflow-hidden lg:ml-32">
              <img src="Saly-1.png"></img>
            </div>
            <div className="w-fit flex justify-right  bg-white rounded-lg lg:mb-56">
              <div className=" w-fit lg:grid grid-cols-2 lg:ml-4 lg:mr-4 gap-1 lg:mt-3  lg:mb-3">
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
