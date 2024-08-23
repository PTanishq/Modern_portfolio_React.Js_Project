import React from 'react'
import { motion } from 'framer-motion';


function Navbar() {
  return (
    <div className='bg-[#0E100F] overflow-hidden Navbar h-[5vw] w-full px-20 py-2 font-["Neue Montreal"] flex justify-between items-center fixed z-[999]'>
        <div className="logo h-[8vw] w-[8vw]">
        <img src="./public/2.svg" alt="" />
        </div>

        <div className=" links flex gap-10 opacity-[0.5]">
            {["services","My work","About Me","Contact"].map((items,index)=> (
                <a className={` text-[1rem] capitalize font-light ${index === 3 && "ml-32"}` }>{items}</a>
            ) )}
        </div>
    </div>
  )
}

export default Navbar