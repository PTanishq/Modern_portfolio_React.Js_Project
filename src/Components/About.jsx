import React from 'react'
import { GoDotFill } from "react-icons/go";


function About() {
  return (
    <div data-scroll data-scroll-speed="-.2" data-scroll-section className='  py-20 px-20 rounded-tl-3xl w-full bg-[#0D21A1] text-[#FFFCE1]'>
        <h1 className='text-[2.5vw] leading-[3.2vw]  w-[85%] font-["Neue_Montreal"]'>
        So, Tanishq is a front-end developer based in India, known for crafting vibrant, engaging websites with a flair for hot UI and a contagious energy that brings every project to life.
           <span className=''> raise funds, sell products, explain complex ideas, and hire great people.</span>
        </h1>
        <div className='w-full mt-20 border-t-[2px] border-[#a1b562]'>
            <div className='flex font-["Neue_Montreal"]'>
                <div className="left w-[50%]">
                    <h1 className='text-[4vw]'>
                        Tanishq's approach:
                    </h1>
                    <button className='flex bg-[#212121] text-white p-5 py-4  gap-5 items-center justify-center rounded-full' >
                        be "REAL", that's it <GoDotFill /> 
                    </button>
                </div>
                <div className="right w-[50%] h-[70vh] mt-10 rounded-3xl flex align-center justify-end py-5 bg-[url('./public/tanishqiitm.svg')] bg-grayscale bg-cover bg-center"> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default About