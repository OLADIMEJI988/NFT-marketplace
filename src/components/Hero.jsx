import React from 'react';
import heroimg from "../assets/heroimg.png";
import Avatar from "../assets/Avatar.png";
import Rocket from "../assets/RocketLaunch.png";

export default function Hero() {
  return (
    <div className='flex flex-col lg:flex-row items-center bg-[#2B2B2B] justify-between py-14 px-6 lg:px-20 gap-10'>
      
      <div className='text-white text-start max-w-lg w-full'>
        <p className='text-4xl sm:text-5xl lg:text-6xl font-semibold sans leading-tight'>
          Discover digital art & Collect NFTs
        </p>
        <p className='tracking-wide sans mt-4 text-[15px] text-gray-300'>
          NFT marketplace UI created with Anima for Figma. Collect, buy and sell art from more than 20k NFT artists.
        </p>
        <button
          className='flex items-center text-sm bg-[#A259FF] py-[10px] px-[30px] rounded-xl gap-[5px] hover:bg-[#924CFF] transition mt-5'
          onClick={() => {
            const subscribe = document.getElementById('subscribe');
            subscribe?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <img className='h-[14px]' src={Rocket} alt="Rocket Icon" />
          <p className='text-[12px] tracking-wide sans'>Get Started</p>
        </button>

        <div className='sans flex justify-between sm:justify-start sm:gap-10 mt-6 text-start'>
          <div>
            <p className='text-xl sm:text-2xl spaceMono font-bold'>240k+</p>
            <p className='font-light text-sm sm:text-base'>Total Sale</p>
          </div>
          <div>
            <p className='text-xl sm:text-2xl spaceMono font-bold'>100k+</p>
            <p className='font-light text-sm sm:text-base'>Auctions</p>
          </div>
          <div>
            <p className='text-xl sm:text-2xl spaceMono font-bold'>240k+</p>
            <p className='font-light text-sm sm:text-base'>Artists</p>
          </div>
        </div>
      </div>

      <div className='w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xs xl:max-w-sm'>
        <img className='w-full rounded-t-[13px]' src={heroimg} alt="Hero Art" />
        <div className='text-start bg-[#3B3B3B] py-4 px-3 text-white sans rounded-b-[13px]'>
          <p className='text-[15px] font-medium'>Space Walking</p>
          <div className='flex items-center gap-2 mt-2'>
            <img className='h-4 w-4 object-cover rounded-full' src={Avatar} alt="Avatar" />
            <p className='text-xs font-light tracking-wide'>AnimaKid</p>
          </div>
        </div>
      </div>
    </div>
  );
}
