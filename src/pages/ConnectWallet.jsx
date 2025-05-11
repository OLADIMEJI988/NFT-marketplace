import React from 'react'
import conwallimg from "../assets/conwallimg.png";
import metamask from "../assets/metamask.png";
import walletconnect from "../assets/walletconnect.png";
import coinbase from "../assets/coinbase.png";


import Header from '../components/Header'
import Footer from '../components/Footer'




export default function ConnectWallet() {
  return (
    <>
    
       <Header />
            <div className='flex bg-[#2B2B2B] justify-center sans text-white text-start gap-20'>
                <img className='h-[500px]' src={conwallimg} alt="" />
                <div className='w-80 flex flex-col justify-center'>
                    <p className='text-4xl'>Connect Wallet</p>
                    <p className='font-light w-[270px] text-sm tracking-wide mt-3'>Choose a wallet you want to connect. There are several wallet providers.</p>
                    <div className='mt-7 text-sm'>
                        <button className='flex items-center gap-3 border border-[#A259FF] bg-[#3B3B3B] py-2 px-7 w-64 rounded-xl hoverEffect transition'>
                            <img className='h-7' src={metamask} alt="" />
                            <p className='text-[15px]'>Metamask</p>
                        </button>

                        <button className='flex items-center gap-3 border border-[#A259FF] bg-[#3B3B3B] py-2 px-7 w-64 rounded-xl my-5 hoverEffect transition'>
                            <img className='h-8' src={walletconnect} alt="" />
                            <p>Wallet Connect</p>
                        </button>

                        <button className='flex items-center gap-3 border border-[#A259FF] bg-[#3B3B3B] py-2 px-7 w-64 rounded-xl hoverEffect transition'>
                            <img className='h-8' src={coinbase} alt="" />
                            <p>Coinbase</p>
                        </button>
                    </div>
                </div>
            </div>
        <Footer />
   </>
  )
}
