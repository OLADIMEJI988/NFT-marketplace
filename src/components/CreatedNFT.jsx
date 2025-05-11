import React from 'react'
import Avatar from "../assets/Avatar.png";

export default function CreatedNFT({ mainimg, title }) {
  return (
    <div className='mt-5 cursor-pointer relative group'>
        <img className='h-60 rounded-t-3xl' src={mainimg} alt="" />
        <div className='text-start bg-[#2B2B2B] py-4 px-6 text-white sans rounded-b-[13px]'>
            <p className='text-[16px]'>{title}</p>
            <div className='flex items-center gap-2 mt-2'>
                <img className='h-5' src={Avatar} alt="" />
                <p className='text-xs font-light spaceMono tracking-wide'>Animakid</p>
            </div>
            <div className='flex mt-5 justify-between'>
                <div className='spaceMono'>
                    <p className='text-[#858584] text-[13px]'>Price</p>
                    <p>1.63 ETH</p>
                </div>
                <div className='spaceMono'>
                    <p className='text-[#858584] text-[13px]'>Last Sale</p>
                    <p>0.33 wETH</p>
                </div>
            </div>
        </div>

        {/* Animated Buy Now Div */}
        <button className="absolute bottom-4 left-5 right-5 transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#A259FF] p-4 rounded-xl flex justify-between items-center">
            <p className="text-white font-bold text-sm">Buy Now</p>
            <p className="text-white font-semibold text-sm">1.63 ETH</p>
        </button>
    </div>
  )
}