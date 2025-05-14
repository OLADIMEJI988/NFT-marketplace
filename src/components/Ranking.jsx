import React from 'react'

import './Ranking.css';


export default function Ranking({ num, creatorimg, creatorname}) {
  return (
    <div className='bg-[#3B3B3B] flex items-center mx-32 text-sm w-[950px] px-5 py-3 rounded-2xl my-5 border border-[#424242]'>
        <div className='mr-6 h-6 w-6 rounded-full bg-[#2B2B2B] flex items-center justify-center text-[#858584]'>
            <p>{num}</p>
        </div>
        <div className='flex w-[440px] items-center gap-3 tracking-wide'>
            <img className='h-9' src={creatorimg} alt="" />
            <p>{creatorname}</p>
        </div>
        <div className='flex spaceMono'>
            <p className='font-thin text-[#00AC4F]'>+1.41%</p>
            <p className='mx-28 font-light'>602</p>
            <p className='font-light'>12.4 ETH</p>
        </div>
    </div>
  )
}
