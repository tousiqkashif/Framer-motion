import React, { useRef, useState } from 'react'
import Card from './Card'



const Forground = () => {

    const ref = useRef(null);
    const data=[
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: {isOpen: true , tagTitle: "Downlod Now" , tagColor: "green"},

        },
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: {isOpen: true , tagTitle: "Upload" , tagColor: "blue"},

        },
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.",
            fileSize: ".9mb",
            close: true,
            tag: {isOpen: false , tagTitle: "Downlod Now" , tagColor: "green"},

        }
    ]
  return (
    <div ref={ref} className="fixed z-[3] w-full h-full top-0 left-0 flex  gap-10 flex-wrap p-5">

    {data.map((item , index) => (
        <Card data={item} reference={ref}/> 
    ))}

    </div>
  )
}

export default Forground
