import React from 'react'
import './Creators.css'
import { Link } from 'react-router-dom'


export default function Creators({num, img, creatorName}) {
  return (
    <>
    <Link to="/ArtistPage">
      <div className='bg-[#3B3B3B] w-[220px] rounded-2xl py-4 px-5 cursor-pointer hoverEffect transition'>
        <div className='flex'>
          <div className='bg-[#2B2B2B] h-8 w-8 rounded-full flex justify-center items-center text-[#858584] spaceMono'>
              <p>{num}</p>
          </div>
          <img src={img} alt="" />
        </div>
        <p className='flex justify-center text-xl sans mt-5'>{creatorName}</p>
        <p className='sans text-[#858584] text-sm flex mt-2 mb-1 justify-center tracking-wide'>Total Sales:<span className='spaceMono text-white ml-1'>34.53 ETH</span></p>  
      </div>
    </Link>
    
    </>
    
  )
}
