import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";
import { IoClose } from "react-icons/io5";
import { motion } from 'framer-motion'


const colors = {
    green: 'green',
    blue: 'blue',
    orange: 'orange'
}

const bgColors = {
    bgGreen: 'bg-green-600',
    bgBlue: 'bg-blue-600',
    bgOrange: 'bg-orange-600'
}

function getColor(color) {
    if (color === colors.green) return bgColors.bgGreen
    else if (color === colors.blue) return bgColors.bgBlue
    else if (color === colors.orange) return bgColors.bgOrange



}

function Card({ data, reference }) {
    return (
        <motion.div drag dragConstraints={reference} whileDrag={{ scale: 1.2 }} dragElastic={0.1} className='relative w-60 h-72 rounded-[45px] flex-shrink-0 bg-zinc-800 text-white px-8 py-10 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight font-semibold'>{data.description}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center px-8 py-3 justify-between mb-3'>
                    <h5>{data.fileSize}</h5>
                    <span className='w-7 h-7  bg-zinc-500 rounded-full flex justify-center items-center'>
                        {data.close ? <IoClose /> : <LuDownload size=".8em" color='#000' />}
                    </span>
                </div>
                {
                    (data.tag.isOpen) && (
                        <div className={`tag w-full py-4 ${getColor(data.tag.tagColor)} justify-center items-center`}>
                            <h3 className='text-sm  font-semibold flex items-center justify-center'>{data.tag.tagTitle}</h3>
                        </div>
                    )
                }

            </div>
        </motion.div>
    )
}

export default Card