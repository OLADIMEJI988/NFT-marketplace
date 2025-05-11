import React from 'react'
import astronewspaper from "../assets/astronewspaper.png";
import mail from "../assets/mail.png";


import './Subscription.css'




export default function Subscription() {
  return (
    <div className='flex justify-center bg-[#2B2B2B] text-start px-32 text-white sans py-16' id='subscribe'>
        <div className='bg-[#3B3B3B] w-full py-12 rounded-xl'>
           <div className='flex gap-14 justify-center'>
                <img className='h-60 w-80' src={astronewspaper} alt="" />
                <div className='mt-3'>
                    <p className='text-4xl tracking-[-0.04em] w-64'>Join our weekly digest</p>
                    <p className='text-lg font-light w-80 mt-2'>Get exclusive promotions & updates Straight to your inbox.</p>
                    <div className='text-black text-sm flex items-center mt-6'>
                      <input className='py-3 pl-5 pr-9 rounded-xl outline-none box-shadow-none border-none' type="text" placeholder='Enter your email here' />
                      <button className='flex items-center text-sm bg-[#A259FF] py-3 px-[30px] rounded-xl gap-[5px] cursor-pointer -translate-x-7'>
                        <img className='h-[14px]' src={mail} alt="" />
                        <p className='text-[12px] tracking-wide sans text-white'>Subscribe</p>
                      </button>
                    </div>
                </div>
           </div>
           
        </div>
    </div>
  )
}
