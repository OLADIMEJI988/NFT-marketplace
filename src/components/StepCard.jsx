import React from 'react'

import './StepCard.css'



export default function ({ img, step, substep }) {
  return (
    <div className='bg-[#3B3B3B] h-[335px] w-[270px] px-5 rounded-2xl flex flex-col justify-center hoverEffect transition cursor-pointer'>
        <div className='flex justify-center'>
           <img className='h-[170px]' src={img} alt="" />
        </div>
        <div className='text-center sans mt-3'>
            <p className='font-semibold text-lg'>{step}</p>
            <p className='text-[12px] mt-[5px] font-normal mx-3'>{substep}</p>
        </div>
    </div>
  )
}
