import React from 'react'
import StepCard from './StepCard'
import wallet from "../assets/wallet.png";
import collection from "../assets/collection.png";
import earning from "../assets/earning.png";



export default function () {
  return (
    <div className='bg-[#2B2B2B] text-start px-20 text-white sans py-10'>
        <div>
            <p className='text-3xl tracking-[-0.04em]'>How it works</p>
            <p className='font-light text-sm mt-2 tracking-wide'>Find out how to get started</p>
        </div>
        <div className='flex justify-center gap-5 mt-8'>
            <StepCard 
                img={wallet}
                step='Setup Your Wallet'
                substep="Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner."
            />
            <StepCard 
                img={collection}
                step='Create Collection'
                substep="Upload your work and setup your collection. Add a description, social links and floor price."
            />
            <StepCard 
                img={earning}
                step='Start Earning'
                substep="Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others."
            />
        </div>
    </div>
  )
}
