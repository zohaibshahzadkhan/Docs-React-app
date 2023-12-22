import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <div className='relative w-60 h-72 rounded-[45px] bg-zinc-800 text-white px-8 py-10 overflow-hidden'>
        <FaRegFileAlt/>
        <p className='text-sm mt-5 leading-tight font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className='footer absolute bottom-0 w-full left-0'>
            <div className='flex items-center px-8 py-3 justify-between mb-3'>
                <h5>.4mb</h5>
                <span className='w-7 h-7  bg-zinc-500 rounded-full flex justify-center items-center'>
                <LuDownload size=".8em" color='#000' />
                </span>
            </div>
            <div className='tag w-full py-4 bg-green-600'>
                <h3 className='text-sm  font-semibold flex items-center justify-center'>Download Now</h3>
            </div>
        </div>
        footer
    </div>
  )
}

export default Card