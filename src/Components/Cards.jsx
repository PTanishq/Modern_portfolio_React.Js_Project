import React from 'react'

function Cards() {
  return (
    <div className='relative w-full h-screen bg-[#0E100F] p-20 flex gap-10 align-center'>
        <div className="cardscontainer top-50% w-1/2 h-[80%]">
            <div className="relative card w-full rounded-xl h-full bg-[#fff]">
                <img className=" absolute inset-0 m-auto h-1/4 " src="https://cdn.worldvectorlogo.com/logos/gucci.svg" alt="" />
                <button className='hover:bg-black hover:text-white text-[1vw] border-[#000] text-[#000] border rounded-full px-4 py-1 absolute top-[85%] ml-4'> inspiration </button>
            </div>
        </div>
        <div className="cardscontainer flex align-center justify-center top-50% w-1/2 h-[80%] flex gap-10">
            <div className="card w-1/2 rounded-xl h-full bg-[#fff] relative">
                <img className="h-1/4 absolute inset-0 m-auto" src="https://cdn.worldvectorlogo.com/logos/christian-dior.svg" alt="" />
                <button className='hover:bg-black hover:text-white text-[1vw] border rounded-full px-4 py-1 absolute top-[85%] ml-4 text-[#000] border-[#000]'> inspiration </button>
            </div>
            <div className="card w-1/2 rounded-xl h-full bg-[url('./public/music.jpg')] bg-center bg-cover relative">
                <img className="h-1/4 absolute inset-0 m-auto" src="" alt="" />
                <button className='hover:bg-white hover:text-black text-[1vw] border rounded-full px-4 py-1 absolute top-[85%] ml-4'> I'm also a Music Artist </button>
            </div>
        </div>
    </div>
  )
}

export default Cards