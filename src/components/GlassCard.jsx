import React from 'react'
import './Test.css'

export default function GlassCard({text, img}) {
  return (
    <div className='flex mt-[55px] mobile:max-mdxl:mt-[82px]'>
        <div className='glassEffect flex items-center gap-5 px-3 py-3'>
            <p className='text-[9px] text-start w-40'>{text}</p>
            <img className='rounded-full h-32 w-32 mobile:max-minxl:h-28 mobile:max-minxl:w-28 img' src={img} alt="" />
        </div>
   </div>
  )
}
