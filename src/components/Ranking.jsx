import React from 'react';
import './Ranking.css';

export default function Ranking({ num, creatorimg, creatorname }) {
  return (
    <div className='bg-[#3B3B3B] flex flex-col md:flex-row md:items-center gap-4 md:gap-0 w-full max-w-5xl mx-auto px-4 md:px-6 py-4 rounded-2xl my-4 border border-[#424242]'>
      
      <div className='flex items-center'>
        <div className='flex-shrink-0 w-7 h-7 rounded-full bg-[#2B2B2B] flex items-center justify-center text-[#858584] text-[16px] mr-5'>
            <p>{num}</p>
        </div>

        <div className='flex flex-1 items-center gap-3'>
            <img className='h-9 w-9 rounded-full object-cover' src={creatorimg} alt={creatorname} />
            <p className='text-sm md:text-base tracking-wide'>{creatorname}</p>
        </div>
      </div>
      
      <div className='flex flex-row justify-center gap-10 md:ml-auto mt-3 md:mt-0 md:gap-12 text-sm md:text-base spaceMono'>
        <p className='text-[#00AC4F]'>+1.41%</p>
        <p className='text-white'>602</p>
        <p className='text-white'>12.4 ETH</p>
      </div>
      
    </div>
  );
}
