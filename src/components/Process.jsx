import React from 'react'
import Group41 from './Group41.png'


function Process() {
  return (
    <div className='bg-white2 relative  -top-28'>
    <div className='relative flex -top-24 '>
    <div className='w-[40%] text-left mb-11 mt-16 pt-20 pl-10 gap-11'>
      <h1 className="text-neutral-950 font-serif text-xl font-semibold mb-11 pt-11 ml-8 mr-16">
                Our Simple Process To Order
              </h1>
              <p className='mb-11 ml-8 mr-16'>
                Cutomer Satisfaction is our priority sit amet consectetur adipisicing elit. Velit
                officia error, molestias recusandae blanditiis similique eveniet
                vitae facilis libero fugiat.
              </p>
              <p className='mb-11 ml-8 mr-16'>
                We meet challenging is our priority sit amet consectetur adipisicing elit. Velit
                officia error, molestias recusandae blanditiis similique eveniet
                vitae facilis libero fugiat.
              </p>
              <p className='mb-11 ml-8 mr-16'>
                But who has time to run  We meet challenging is our priority sit amet consectetur adipisicing elit. Velit
                officia error, molestias recusandae blanditiis.
              </p>
              <button className="bg-black  text-white font-semibold py-2 px-4 border border-black  rounded mr-6 mt-2 ml-8">
                  Free Proposal
                </button>
                <button className="bg-transparent  text-black font-semibold py-2 px-8 border border-black rounded">
                  Chat Now
                </button>
    </div>

    <div className='w-[60%] text-left  mt-16  pt-20 pl-1 pb-1   '>
      <img src={Group41}></img>
    </div>
    </div>

        {/* <h3>Calculate your price :</h3> */}
    <div className='bg-white relative flex -top-20  ml-24 mr-24 shadow-darkwhite   text-center pb-4 pt-4 mr rounded-3xl justify-center '>
        <div className='w-[80%] text-left'>
            <div className='flex flex-row text-left gap-3  ml-7 w-32 '>
            <div>
            <p className='text-darkpista'>Service Type</p>
            <select className='bg-darkwhite min-w-96 h-10 rounded-md '>    
            <option value="Option 1"> Writing</option>
                <option value="Option 2"> abc</option>
                <option value="Option 3"> def</option>
                </select>
            </div>
            <div>
            <p className='text-darkpista'>Quantity</p>
            <input type='number' className='bg-darkwhite  min-w-96  h-10 rounded-md'/> 
            </div>
                

            </div>

            <div className='flex flex-row text-left gap-20 ml-7  mt-9'>
                <div>
                <p className='text-darkpista'>Due Date</p>
                <input type='text' className='bg-darkwhite  max-w-52 h-10 rounded-md'/> 
                </div>
                <div> 
                <p className='text-darkpista'> Words</p>
                <input type='number' className='bg-darkwhite  max-w-52 h-10 rounded-md'/> 
                </div>
                <div>
                <p className='text-darkpista'> Quality</p>
                <select className='bg-darkwhite min-w-48 h-10 rounded-md'>
                <option value="Option 1"> Experts</option>
                <option value="Option 2"> abc</option>
                <option value="Option 3"> def</option>
                </select>
                </div>
            </div>
        </div>

        <div className='w-[20%] text-left text-darkpista justify-center pt-6 pl-10 '>
        <p className='text-5xl' > $11.7</p>
        <p className='text-xl'>.........................</p>
        <button className="bg-black  text-white font-semibold py-2 px-4 border border-black  rounded text-xl mt-2  ">
                  Order Now
                </button>
        </div>
        
    </div>

    </div>
  )
}

export default Process
