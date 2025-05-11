import React from 'react'

import './Collection.css'


export default function ({ mainImg, priImg, secImg, title, avatarName, avatarImg }) {
  return (
    <div>
        <img className='cursor-pointer hoverEffect transition' src={mainImg} alt="" />
        <div className='flex gap-[13px] mt-2'>
            <img className='h-20 cursor-pointer hoverEffect transition' src={priImg} alt="" />
            <img className='h-20 cursor-pointer hoverEffect transition' src={secImg} alt="" />
            <div className='h-20 w-20 bg-[#A259FF] text-white rounded-xl flex justify-center items-center spaceMono cursor-pointer hoverEffect transition'><p>1025+</p></div>
        </div>
        <div className='mt-3 sans'>
            <p className='text-[15px]'>{title}</p>
            <div className='flex items-center gap-2 mt-2'>
                <img className='h-5' src={avatarImg} alt="" />
                <p className='font-light text-[12px]'>{avatarName}</p>
            </div>
        </div>
        
    </div>
  )
}
