import React, { forwardRef } from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion"

const Card = ({data , reference}) => {

  return (
    <motion.div drag dragConstraints={reference} dragElastic={0.9} dragTransition={{bounceStiffness: 100, bounceDamping: 30}}  whileDrag={{scale: 1.1}} className='w-60 h-72 bg-zinc-900/90 rounded-[45px] flex-shrink-0 text-white py-10 px-8 relative overflow-hidden'>

<FaRegFileAlt />
<p className='text-xm mt-5 font-semibold leading-tight'>{data.desc}</p>

<div className='footer absolute bottom-0  w-full left-0 '>

   <div className='flex items-center justify-between px-8 py-3 mb-3'>
   <h5>{data.fileSize} </h5>
  <span className='w-7 h-7 bg-sky-600 rounded-full flex items-center justify-center'>
    {data.close ? <IoClose size=".8em" color='#fff' /> : <MdOutlineFileDownload size=".8em" color='#fff'/>}
  
  </span>
   </div>
    {data.tag.isOpen && (<div className={`tag ${data.tag.tagColor == "blue" ? "bg-blue-600" : "bg-green-600"} w-full h-10 py-5 flex items-center justify-center`}>
<h3 className='text-sm font-semibold'>
{data.tag.tagTitle}</h3>
   </div>) }
   
</div>

    </motion.div>
  )
}

export default Card
