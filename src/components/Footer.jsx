import React from 'react'
import logo from "../assets/logo.png";
import DiscordLogo from "../assets/DiscordLogo.png";
import YoutubeLogo from "../assets/YoutubeLogo.png";
import TwitterLogo from "../assets/TwitterLogo.png";
import InstagramLogo from "../assets/InstagramLogo.png";
import divider from "../assets/Divider.png";



export default function Footer() {
  return (
    <div className='bg-[#3B3B3B] py-10 flex flex-col items-center text-[#CCCCCC] text-start' id='footer'>
        <div className='flex gap-14'>
            <div>
                <img className='h-6' src={logo} alt="" />
                <p className='tracking-wide text-sm mt-4 w-52'>NFT marketplace UI created with Anima for Figma.</p>
                <p className='tracking-wide text-sm my-[13px]'>Join our community</p>
                <div className='flex gap-1'>
                    <img className='h-6 cursor-pointer' src={DiscordLogo} alt="" />
                    <img className='h-6 cursor-pointer' src={YoutubeLogo} alt="" />
                    <img className='h-6 cursor-pointer' src={TwitterLogo} alt="" />
                    <img className='h-6 cursor-pointer' src={InstagramLogo} alt="" />
                </div>
            </div>

            <div className='sans text-sm'>
                <p className='tracking-wide text-sm text-white text-lg spaceMono'>Explore</p>
                <p className='mb-3 mt-4'>Marketplace</p>
                <p>Rankings</p>
                <p className='mt-3'>Connect a wallet</p>
            </div>

            <div className='spaceMono text-sm'>
                <p className='tracking-wide text-sm text-white text-lg'>Join Our Weekly Digest</p>
                <p className='mb-3 mt-4 w-80'>Get exclusive promotions & updates straight to your inbox.</p>
                <div className='text-black text-sm flex items-center mt-6'>
                    <input className='py-3 pl-5 pr-9 rounded-xl outline-none box-shadow-none border-none' type="text" placeholder='Enter your email' />
                    <button className='flex items-center text-sm bg-[#A259FF] py-3 px-[30px] rounded-xl gap-[5px] cursor-pointer -translate-x-10'>
                        <p className='text-[12px] tracking-wide sans text-white'>Subscribe</p>
                    </button>
                </div>
            </div>

        </div>

        <div className='mt-7 auto'>
            <img src={divider} alt="" />
            <p className='text-xs spaceMono mt-3'>NFT Market.</p>
        </div>
    </div>
  )
}
