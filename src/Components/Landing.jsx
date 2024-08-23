import { motion } from 'framer-motion';
import React from 'react'
import { MdArrowOutward } from "react-icons/md";


function Landing() {
  return (
    <div data-scroll data-scroll-speed="-0.3" className='bg-[#0E100F] h-auto mb-[5vw] w-full text-white pt-1'>
        <div className="text-struct  px-[5vw] pt-44 ">
            {["Why You","Should ","Choose Tanishq"].map((item, index) =>{
                return <div className="masker ">
                    <div className='w-fit flex items-end overflow-hidden '>
                        {index === 1 && (<motion.div
                          initial={{width:0}}
                          animate={{width:"9vw"}}
                          transition={{ease: [0.76, 0, 0.24, 1], duration:1}}
                          className="w-[9vw] h-[5vw] mr-[1vw] bg-[url('https://assets.entrepreneur.com/content/3x2/2000/20180703190744-rollsafe-meme.jpeg?format=pjeg&auto=webp&crop=16:9')] bg-center bg-cover relative -top-[0.3vw] rounded-lg"
                          ></motion.div>)}
                        <h1 className=" font-['oswald'] text-[#FFFCE1] overflow-hidden tracking-wide text-[6vw] leading-[6vw] font-bold uppercase">{item}</h1>
                    </div>
                </div>
            })}
        </div>
        <motion.div initial={{y: "100%"}} animate={{y: "5%"}} transition={{ease: [0.76, 0, 0.24, 1], duration: 1}} className=" border-t-[1px] border-zinc-700 mt-32 flex justify-between px-[3vw] items-center">
            {["For Crazy looking Websites?","mmm... For never ending creativity?"].map((item,index) => {
                return <p className='font-light mt-10 tracking-tighter text-[#FFFCE1] leading-none capitalize text-[1rem]'>{item}</p>
            })}
        <div className="start flex items-center gap-5 text-[0.8rem] uppercase px-3 py-1 border-[1px] border-[#FFF]  rounded-full font-light mt-10">
            <p>let's check some projects</p>
            <div className="circle h-8 w-8 flex items-center justify-center rounded-full border-[2px] border-zinc-200 ">
                <MdArrowOutward />
            </div>
        </div>
        
        </motion.div>
        
    </div>
  )
}

export default Landing