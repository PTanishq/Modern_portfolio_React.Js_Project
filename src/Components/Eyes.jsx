import React, { useEffect, useState } from 'react'

function Eyes() {
    const [rotate, setRotate] = useState(0);

    useEffect(()=>{
        window.addEventListener("mousemove", (e)=>{
            let mouseX = e.clientX;
            let mouseY = e.clientY;

            let deltaX = mouseX - window.innerWidth/2;
            let deltaY = mouseY - window.innerHeight/2;

            var angle = Math.atan2(deltaX ,deltaY) * (180/Math.PI);
            setRotate(angle - 180)


        })
    })
  return (
    <div  className='eyes w-full h-screen overflow-hidden '>
        <div data-scroll data-scroll-speed="-.2" className="relative h-full w-full bg-[#ffea00] bg-cover bg-center">
        <div  className='absolute flex gap-10 left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='h-[15vw] w-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                    <div style={{transform : `translate(-50%,-50%) rotate(${rotate}deg)`}} className='w-full h-10 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                    </div>
                </div>
            </div>
            <div className='h-[15vw] w-[15vw] bg-zinc-100 rounded-full flex items-center justify-center'>
                <div className='w-2/3 h-2/3 bg-zinc-900 rounded-full relative'>
                    <div style={{transform : `translate(-50%,-50%) rotate(${rotate}deg)`}} className='w-full h-10 absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]'>
                        <div className='w-10 h-10 bg-zinc-100 rounded-full'></div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default Eyes