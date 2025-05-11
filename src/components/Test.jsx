import React from 'react'
import im_3 from "../assets/im_3.jpg";
import im4 from "../assets/im4.jpg";
import im_2 from "../assets/im_2.jpg";
import './Test.css'
import GlassCard from './LandingPageComponents/GlassCard';



export default function Test() {
  return (
    <div className='background text-[#cfd7e6] px-10'>
        <div className='flex py-3 items-center'>
            <p className='mr-auto text-3xl font-orbitron'>10</p>
            <div className='flex gap-12 text-[11px]'>
                <p>HOME</p>
                <p>ABOUT</p>
                <p>SERVICES</p>
                <p>CONTACT</p>
            </div>
        </div>

        <div className='text-start mt-[124px]'>
            <p className='text-sm'>AI Artwork By Mass AI</p>
            <p className='text-[118px] mobile:max-minxl:text-[110px] tracking-widest text-[#f7fbfd] flex items-center font-orbitron'>AT
                <span>
                    <div className='h-24 w-24 mobile:max-mdxl:h-[94px] mobile:max-mdxl:w-[94px] bg-[#85f900c5] rounded-full flex items-center justify-center mr-[6px] -ml-2'>
                        <div className='h-[68px] w-[68px] bg-black rounded-full'></div>
                    </div>
                </span>MIC</p>
            <div className='flex items-center'>
                <button className='flex items-center border border-[#f7fbfd] rounded-bl-2xl pl-7 pr-1 py-[1px] gap-5 mt-3'>
                    <p className='text-xs'>Discover</p>
                    <div className='bg-[#f7fbfd] h-7 w-7 rounded-full flex items-center justify-center text-black'>-</div>
                </button>
                <div className='ml-2 h-8 mt-3 bg-white w-[1px]'></div>
                <div className='flex mt-2 items-center ml-2'>
                    <div className='h-7 w-7 bg-[#696f6d] rounded-full flex items-center justify-center'>
                        <div className='h-5 w-5 bg-[#beef3f] rounded-full'></div>
                    </div>
                    <p className='text-[13px] ml-1 font-semibold'>Connect</p>
                </div>

            </div>
        </div>

        <div className='grid grid-cols-3 gap-7 mobile:max-mdxl:gap-3'>
            <GlassCard 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error cons pisicing elit. Neque error cons"
                img={im_3}
            />

            <GlassCard 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error cons pisicing elit. Neque error cons"
                img={im4}
            />

            <GlassCard 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque error cons pisicing elit. Neque error cons"
                img={im_2}
            />
        </div>


    </div>
  )
}
