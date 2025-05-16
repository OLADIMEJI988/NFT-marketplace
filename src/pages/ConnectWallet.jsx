import React from 'react';
import conwallimg from "../assets/conwallimg.png";
import metamask from "../assets/metamask.png";
import walletconnect from "../assets/walletconnect.png";
import coinbase from "../assets/coinbase.png";

import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ConnectWallet() {
  return (
    <>
      <Header />

      <div className='flex flex-col lg:flex-row items-center justify-center bg-[#2B2B2B] text-white sans text-start px-5 sm:px-10 lg:px-20 py-10 gap-10'>
        
        <img className='w-[300px] sm:w-[400px] md:w-[450px] lg:h-[500px] object-contain' src={conwallimg} alt="Connect Wallet Visual" />

        <div className='w-full max-w-md flex flex-col justify-center items-center text-center lg:items-start lg:text-left'>
            <p className='text-3xl sm:text-4xl'>Connect Wallet</p>
            <p className='font-light text-sm tracking-wide mt-3 w-full sm:w-[270px]'>
                Choose a wallet you want to connect. There are several wallet providers.
            </p>

            <div className='mt-7 text-sm flex flex-col gap-5 w-full items-center'>
                <button className='flex items-center gap-5 border border-[#A259FF] bg-[#3B3B3B] py-3 px-6 rounded-xl hoverEffect transition w-full max-w-xs justify-center'>
                <img className='h-7' src={metamask} alt="Metamask" />
                <p className='text-[15px]'>Metamask</p>
                </button>

                <button className='flex items-center gap-5 border border-[#A259FF] bg-[#3B3B3B] py-3 px-6 rounded-xl hoverEffect transition w-full max-w-xs justify-center'>
                <img className='h-8' src={walletconnect} alt="Wallet Connect" />
                <p>Wallet Connect</p>
                </button>

                <button className='flex items-center gap-5 border border-[#A259FF] bg-[#3B3B3B] py-3 px-6 rounded-xl hoverEffect transition w-full max-w-xs justify-center'>
                <img className='h-8' src={coinbase} alt="Coinbase" />
                <p>Coinbase</p>
                </button>
            </div>
            </div> 
      </div>

      <Footer />
    </>
  );
}
