'use client';
import React from 'react'

const Button = () => {
    const sizes={
        size:'md:text-[15px] lg:text-[60px] hover:bg-blue-600',
        
    }
    //<Button/>
   // <h1 className="md:text-[14px] lg:text-[60px] sm:text-[80px] mt-[30px] text-white">Hello metaverses</h1>
  return (
    <div>Button
         <button className={`${sizes.size} text-white`}>click here</button>
    </div>
   
  )
}

export default Button