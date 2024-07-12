import React from "react";
import Group41 from "./Group41.png";

function Process() {
  return (
    <div className="bg-white2 relative ">
      <div className="relative flex top-16 -mt-11 lg:-top-24 ">
        <div className="lg:w-[40%] text-left lg:mb-11 lg:mt-16 lg:pt-20 lg:pl-10 lg:gap-11">
          <h1 className="pl-6 text-neutral-950 font-serif text-xl font-semibold lg:mb-11 lg:pt-11 lg:ml-8 lg:mr-16">
            Our Simple Process To Order
          </h1>
          <div className="lg:hidden size-auto ">
            <img src={Group41}></img>
          </div>

          <p className="ml-6 mr-2 mb-4 text-xs lg:text-xl lg:mb-11 lg:ml-8 lg:mr-16">
            Cutomer Satisfaction is our priority sit amet consectetur
            adipisicing elit. Velit officia error, molestias recusandae
            blanditiis similique eveniet vitae facilis libero fugiat.
          </p>
          <p className="ml-6 mr-2 mb-4 text-xs lg:text-xl lg:mb-11 lg:ml-8 lg:mr-16">
            We meet challenging is our priority sit amet consectetur adipisicing
            elit. Velit officia error, molestias recusandae blanditiis similique
            eveniet vitae facilis libero fugiat.
          </p>
          <p className="ml-6 mr-2 mb-4 text-xs lg:text-xl lg:mb-11 lg:ml-8 lg:mr-16">
            But who has time to run We meet challenging is our priority sit amet
            consectetur adipisicing elit. Velit officia error, molestias
            recusandae blanditiis.
          </p>
          <button className="bg-black  ml-6 text-white font-semibold py-1 px-2 mt-11 lg:py-2 lg:px-4 border border-black  rounded lg:mr-6 lg:mt-28">
            Free Proposal
          </button>
          <button className="bg-transparent ml-6  text-black font-semibold py-1 px-5 sm:ml-11 lg:py-2 lg:px-8 border border-black rounded">
            Chat Now
          </button>
        </div>
        {/* 
        <div className="sm:hidden  lg:w-[60%] lg:text-left  lg:mt-16  lg:pt-20 lg:pl-1 lg:pb-1   ">
          <img src={Group41}></img>
        </div> */}
      </div>
      {/* <h3>Calculate your price :</h3> */}
      <div className="bg-white3 mt-28 ml-6 mr-5 pl text-sm lg:relative flex lg:flex-col lg:-top-20  lg:ml-24 lg:mr-24 shadow-darkwhite   text-center lg:pb-4 lg:pt-4 lg:mr rounded-3xl justify-left w-fit ">
        <div className="lg:w-[80%] m-4 text-left">
          <div className="flex flex-col lg:flex-row text-left lg:gap-3  lg:ml-7 lg:w-32 ">
            <div>
              <p className="text-darkpista">Service Type</p>
              <select className="bg-darkwhite min-w-48 h-6  lg:min-w-96 lg:h-10 rounded-md ">
                <option value="Option 1"> Writing</option>
                <option value="Option 2"> abc</option>
                <option value="Option 3"> def</option>
              </select>
            </div>
            <div>
              <p className="text-darkpista">Quantity</p>
              <input
                type="number"
                className="bg-darkwhite  max-w-48 h-6   lg:min-w-96  lg:h-10 rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col mt-5 lg:flex-row text-left lg:gap-20 lg:ml-7  lg:mt-9">
            <div>
              <p className="text-darkpista">Due Date</p>
              <input
                type="text"
                className="bg-darkwhite max-w-48 h-6 lg:max-w-52 lg:h-10 rounded-md"
              />
            </div>
            <div>
              <p className="text-darkpista"> Words</p>
              <input
                type="number"
                className="bg-darkwhite max-w-48 h-6  lg:max-w-52 lg:h-10 rounded-md"
              />
            </div>
            <div>
              <p className="text-darkpista"> Quality</p>
              <select className="bg-darkwhite min-w-48 h-6  lg:min-w-48 lg:h-10 rounded-md">
                <option value="Option 1"> Experts</option>
                <option value="Option 2"> abc</option>
                <option value="Option 3"> def</option>
              </select>
            </div>
          </div>
        </div>

        <div className="lg:w-[20%] text-center mt-24 mr-2 lg:text-left text-darkpista justify-center lg:pt-6 lg:pl-10 ">
          <p className="lg:text-5xl text-3xl "> $11.7</p>
          <p className="lg:text-xl text-sm">.......................</p>
          <button className="bg-black  text-white font-semibold lg:py-2 lg:px-4 border border-black  rounded lg:text-xl lg:mt-2  ">
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
}

export default Process;
