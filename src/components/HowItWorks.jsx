import React from 'react';
import StepCard from './StepCard';
import wallet from "../assets/wallet.png";
import collection from "../assets/collection.png";
import earning from "../assets/earning.png";

export default function () {
  return (
    <div className='bg-[#2B2B2B] text-white sans py-10 px-5 md:px-10 lg:px-20'>
      <div className='text-start md:text-left text-center'>
        <p className='text-3xl tracking-[-0.04em]'>How it works</p>
        <p className='font-light text-sm mt-2 tracking-wide'>Find out how to get started</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 justify-items-center'>
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
  );
}
