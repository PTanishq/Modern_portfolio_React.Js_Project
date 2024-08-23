import React from 'react'
import{motion} from 'framer-motion'

function Marquee() {
  return (
        <div data-scroll data-scroll-speed=".25" data-scroll-section className='overflow-hidden w-full py-10 gap-10  bg-[#ffaa00] text-[#000] rounded-t-3xl' >
            <div className='border-t-2 flex border-b-2 border-[##FFFCE1]  '>
            <motion.h1 initial={{x:0}} animate = {{x:"-100%"}} transition = {{ease:"linear", repeat:Infinity, duration:10}} className=' text-[22vw] leading-none whitespace-nowrap font-bold font-["Oswald"]'>I AM TANISHQ!</motion.h1>
            <motion.h1 initial={{x:0}} animate = {{x:"-100%"}} transition = {{ease:"linear", repeat:Infinity, duration:10}} className=' text-[22vw] leading-none whitespace-nowrap font-bold font-["Oswald"]'>I AM TANISHQ!</motion.h1>
            </div>
        </div>
  )
}

export default Marquee