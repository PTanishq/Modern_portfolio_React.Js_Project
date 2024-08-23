import { motion } from 'framer-motion'
import {Power4} from "gsap/all"
import React, { useState } from 'react'

function Featured() {
  
  return (
    <div className='w-full py-20 bg-[#0E100F] text-[#FFFCE1]'>
        <div className='px-20 w-full border-b-[1px] border-zinc-100'>
            <h1 className='pb-10 text-6xl text-[#FFFCE1] font-regular font-["Neue_Montreal"] '>Some of my favourite projects</h1>
        </div>
        <div className="cards px-20 flex gap-10 mt-10">

            <div 
            className=" cardcontainer hover:scale-105 transform transition-transform duration-500 ease-in-out w-1/2 h-[75vh] relative ">
                {/* <h1 className='flex absolute left-full text-[#CDEA68]  overflow-hidden -translate-x-[40%] top-1/2 -translate-y-1/2 z-[9] text-8xl font-["Neue_Montreal"] font-bold leading-none tracking-tight'>
                {"FYDE".split("").map((item, index)=> (

                        <span 
                        className='inline-block'>
                            {item}
                        </span>
                    ))}
                </h1> */}
                <div className="card bg-[url('https://media.licdn.com/dms/image/D4D2DAQGK6joUGjlPyg/profile-treasury-image-shrink_1920_1920/0/1719602845834?e=1722027600&v=beta&t=g-Asfjxo2-F-OqfrciOwA-6xPQH4EwaH410djWJP2oA')] backgroundSize:'120%' bg-center bg-cover w-full h-full bg-white rounded-md" ></div>
                    <button className='hover:bg-red-700 hover:text-black rounded-full border border-white px-4 py-1 mt-4 ' ><a href="#">oops, links is currently unavailable :(</a></button>
                </div>
            <div 
            className="cardcontainer hover:scale-105 transform transition-transform duration-500 ease-in-out relative w-1/2 h-[75vh] ">
                {/* <h1 className='flex absolute right-full text-[#CDEA68] translate-x-[40%] top-1/2 -translate-y-1/2 z-[9] text-8xl font-["Neue_Montreal"] font-bold leading-none tracking-tight'>
                    {"VISE".split("").map((item, index)=> (
                        <motion.span>
                            {item}
                        </motion.span>
                    ))}
                </h1> */}
                <div className="card bg-[url('https://media.licdn.com/dms/image/D4D2DAQFjs4g3stSsrQ/profile-treasury-image-shrink_1920_1920/0/1719602152421?e=1722027600&v=beta&t=aY416YCxEtJWCMlMadDsfuzWPJ1FnO_4tWUW366RADM')] bg-center bg-contain w-full h-full bg-white rounded-md"></div>
                    <button className='hover:bg-green-700 hover:text-white rounded-full border border-white px-4 py-1 mt-4 ' ><a href="https://ptanishq.github.io/Wizard-X-UI-Clone-/">check Now</a></button>
                </div>    
        </div>
        
    </div>

  )
}

export default Featured