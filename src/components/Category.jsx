import React from 'react'

import './Category.css'

export default function Category({ img, category }) {
  return (
    <div className='cursor-pointer hoverEffect transition'>
        <img className='h-48' src={img} alt="" />
        <div className='text-start bg-[#3B3B3B] w-48 py-4 px-5 text-white sans rounded-b-[13px]'>
            <p className='text-[15px]'>{category}</p>
        </div>
    </div>
  )
}
