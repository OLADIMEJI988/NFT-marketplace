import React from 'react'
import heroimg from "../assets/heroimg.png";
import Avatar from "../assets/Avatar.png";
import Rocket from "../assets/RocketLaunch.png";

import './Hero.css'

export default function Hero() {
  return (
    <div className='flex bg-[#2B2B2B] justify-center py-14 gap-10'>
        <div className='text-white text-start'>
            <p className='text-6xl sans w-96'>Discover digital art & Collect NFTs</p>
            <p className='tracking-wide sans mt-4 w-[340px] text-[15px]'>NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more Than 20k NFT artists.</p>
            <button className='flex items-center text-sm bg-[#A259FF] py-[10px] px-[30px] rounded-xl gap-[5px] hoverEffectBtn transition mt-5' onClick={() => {const subscribe = document.getElementById('subscribe');subscribe?.scrollIntoView({ behavior: 'smooth' });}}>
                <img className='h-[14px]' src={Rocket} alt="" />
                <p className='text-[12px] tracking-wide sans'>Get Started</p>
            </button>
            <div className='sans flex gap-14 mt-6 text-start'>
                <div>
                    <p className='text-xl spaceMono'>240k+</p>
                    <p className='font-light'>Total Sale</p>
                </div>
                <div>
                    <p className='text-xl spaceMono'>100k+</p>
                    <p className='font-light'>Auctions</p>
                </div>
                <div>
                    <p className='text-xl spaceMono'>240k+</p>
                    <p className='font-light'>Artists</p>
                </div>
            </div>
        </div>
        <div className='-mt-5'>
            <img className='h-80' src={heroimg} alt="" />
            <div className='text-start bg-[#3B3B3B] py-4 px-3 text-white sans rounded-b-[13px]'>
                <p className='text-[15px]'>Space Walking</p>
                <div className='flex items-center gap-2 mt-2'>
                    <img className='h-4' src={Avatar} alt="" />
                    <p className='text-xs font-light tracking-wide'>AnimaKid</p>
                </div>
            </div>
        </div>
    </div>
  )
}
