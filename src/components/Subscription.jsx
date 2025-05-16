import React from 'react';
import astronewspaper from "../assets/astronewspaper.png";
import mail from "../assets/mail.png";

import './Subscription.css';

export default function Subscription() {
  return (
    <div className='flex justify-center bg-[#2B2B2B] px-5 md:px-10 lg:px-32 text-white sans py-16' id='subscribe'>
      <div className='bg-[#3B3B3B] w-full py-12 px-6 md:px-10 rounded-xl'>
        <div className='flex flex-col lg:flex-row gap-10 lg:gap-14 items-center justify-center'>

          <img className='h-52 w-auto md:h-60 md:w-80 object-contain' src={astronewspaper} alt="newsletter" />

          <div className='text-center lg:text-left'>
            <p className='text-2xl md:text-3xl lg:text-4xl tracking-[-0.04em] max-w-xs mx-auto lg:mx-0'>Join our weekly digest</p>
            <p className='text-sm md:text-base font-light max-w-sm mt-2 mx-auto lg:mx-0'>
              Get exclusive promotions & updates Straight to your inbox.
            </p>

            <div className='flex flex-col sm:flex-row items-center justify-center lg:justify-start mt-6 gap-3 sm:gap-0'>
              <input
                className='w-full sm:w-[300px] py-3 px-5 rounded-xl outline-none text-black'
                type="text"
                placeholder='Enter your email here'
              />
              <button className='flex items-center justify-center text-sm bg-[#A259FF] py-3 px-[30px] rounded-xl gap-[5px] text-white mt-2 sm:mt-0 sm:-translate-x-3 lg:translate-x-2'>
                <img className='h-[14px]' src={mail} alt="mail icon" />
                <p className='text-[12px] tracking-wide sans'>Subscribe</p>
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
