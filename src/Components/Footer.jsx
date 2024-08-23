import React from 'react'

function Footer() {
  return (
    <div data-scroll data-scroll-speed="-.2" className='overflow-hidden w-full h-screen bg-[#0D21A1]  flex flex-col'>
        <div className=" w-full h-[90%] p-10 flex">
            <div className="left w-1/2 h-full">
                <h1 className='text-[#FFFCE1] text-[8rem] font-bold font-["Bebas_Neue"] leading-none '>so, <br /> Will You <br></br>choose Me?</h1>
            </div>
            <div className="right">
            <h1 className='text-[#FFFCE1] text-[8rem] font-bold font-["Bebas_Neue"] leading-none '>if yes then ⬇</h1>
            <ul className=' text-[#FFFCE1] h-full w-full text-[1.2rem]'>
                <ul>
                    <a href="https://www.instagram.com/musicby.tanishq/">
                        Instagram
                    </a> 
                </ul>
                <ul>
                    <a href="https://www.linkedin.com/in/p-tanishq-493792253/">
                        LinkedIn
                    </a> 
                </ul>
                <ul>tanishqtanishq246@gmail.com</ul>
                <br />
                <ul>IIT Madras, Chennai</ul>
                <ul>Chhattisgarh</ul>
                <ul>India</ul>
                <ul></ul>
                <br />
                
            </ul>
            

            </div>
        </div>
        <div className="overflow-hidden foot w-full h-[10%] bg-[#0E100F] p-5 flex align-center justify-between">
                    <img src="/2.svg" className='h-20 w-20 -mt-6' />
                    <h3 className='text-white'>A Website By Tanishq</h3>
                    <h3 className='text-white'>Made With Love :)</h3>

        </div>

    </div>
  )
}

export default Footer