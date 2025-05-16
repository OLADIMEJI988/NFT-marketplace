import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import orbitansmainimg from "../assets/orbitansmainimg.png";
import moondancer from "../assets/moondancer.png";
import globe from "../assets/globe.png";
import purplearrow from "../assets/purplearrow.png";
import foxy from "../assets/foxy.png";
import cat from "../assets/cat.png";
import psychodog from "../assets/psychodog.png";
import dbear from "../assets/dbear.png";
import robot0375 from "../assets/robot0375.png";
import robot0356 from "../assets/robot0356.png";
import robot0321 from "../assets/robot0321.png";
import robot0512 from "../assets/robot0512.png";
import robot0024 from "../assets/robot0024.png";

import './AboutNFT.css';
import Footer from '../components/Footer';
import NftFromArtist from '../components/NftFromArtist';

export default function AboutNFT() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/ArtistPage');
  };

  return (
    <>
      <Header />
      <div className='bg-[#2B2B2B] pt-[2px] text-white'>
        <img className='w-full h-auto' src={orbitansmainimg} alt="" />

        <div className='px-5 py-7 lg:px-28 lg:text-left'>

          <div>
            <p className='text-[40px]'>The Orbitians</p>
            <p className='text-[#858584] font-light mt-1 text-sm md:text-base'>Minted on Sep 30, 2022</p>

            <p className='text-[#858584] mt-6 spaceMono text-sm'>Created By</p>
            <div className='flex items-center justify-center lg:justify-start gap-2 mt-2 mb-6'>
                <img className='h-5 w-5' src={moondancer} alt="" />
                <p className='text-sm spaceMono'>MoonDancer</p>
            </div>
        
          </div>

          {/* Description */}
          <div className='flex justify-center lg:justify-start'>
                <div className='font-normal max-w-[700px] text-center lg:text-left'>
                    <p className='text-[#858584] mt-6 spaceMono'>Description</p>
                    <p className='mt-3 mb-1'>The Orbitians</p>
                    <p>is a collection of 10,000 unique NFTs on the Ethereum blockchain,</p>
                    <p className='my-7'>
                    There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.
                    </p>
                    <p>
                    They live in metal space machines high up in the sky and only have one foot on Earth.
                    These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations.
                    The invaders are called Upside-Downs, because of their inverted bodies that live on the ground,
                    yet do not know any other way to be. Upside-Downs believe that they will be able to win this war
                    if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.
                    </p>
                </div>
          </div>


          {/* Details */}
          <div className='flex justify-center lg:justify-start my-5 mb-10'>
                <div className='mt-6 text-center lg:text-left'>
                    <p className='text-[#858584] spaceMono'>Details</p>
                    <div className='flex justify-center lg:justify-start my-3 gap-2 cursor-pointer'>
                    <img className='h-6' src={globe} alt="" />
                    <p className='font-light text-sm'>View on Etherscan</p>
                    </div>
                    <div className='flex justify-center lg:justify-start gap-2 cursor-pointer'>
                    <img className='h-6' src={globe} alt="" />
                    <p className='font-light text-sm'>View Original</p>
                    </div>
                </div>
            </div>


          {/* Tags */}
          <div className='flex justify-center lg:justify-start'>
                <div className='mt-6 text-center lg:text-left'>
                    <p className='text-[#858584] spaceMono'>Tags</p>
                    <div className='flex justify-center lg:justify-start flex-wrap gap-3 mt-4'>
                    {["ANIMATION", "ILLUSTRATION", "MOON", "SPACE"].map((tag) => (
                        <button
                        key={tag}
                        className='bg-[#3B3B3B] px-6 py-[7px] rounded-full text-[13px] tracking-wide hoverEffect transition'
                        >
                        {tag}
                        </button>
                    ))}
                    </div>
                </div>
          </div>


          <div className='flex flex-col lg:flex-row lg:justify-between lg:items-center mt-20 mb-8 gap-4'>
            <p className='text-3xl tracking-[-0.04em]'>More From This Artist</p>
            <div className='flex justify-center mt-2 lg:mt-0'>
                <button
                className='flex items-center text-sm border-2 border-[#A259FF] px-[30px] py-3 rounded-2xl gap-[9px] hoverEffect transition self-start'
                onClick={handleClick}
                >
                <img className='h-[15px]' src={purplearrow} alt="" />
                <p className='text-[13px] tracking-wide sans'>Go To Artist Page</p>
                </button>
            </div>
            
          </div>

          <div className='flex justify-center'>
            <div className='grid gap-5 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 lg:gap-6'>
                <NftFromArtist mainimg={foxy} title="Foxy Life" Avatar={moondancer} avatarName="MoonDancer" />
                <NftFromArtist mainimg={cat} title="Cat From Future" Avatar={moondancer} avatarName="MoonDancer" />
                <NftFromArtist mainimg={psychodog} title="Psycho Dog" Avatar={moondancer} avatarName="MoonDancer" />
                <NftFromArtist mainimg={dbear} title="Designer Bear" Avatar={moondancer} avatarName="MoonDancer" />
                <NftFromArtist mainimg={robot0375} title="Dancing Robot 0375" Avatar={moondancer} avatarName="MoonDancer" />
                <NftFromArtist mainimg={robot0356} title="Dancing Robot 0356" Avatar={moondancer} avatarName="MoonDancer" />
                <NftFromArtist mainimg={robot0321} title="Dancing Robot 0321" Avatar={moondancer} avatarName="MoonDancer" />
                <NftFromArtist mainimg={robot0512} title="Dancing Robot 0512" Avatar={moondancer} avatarName="MoonDancer" />
                <NftFromArtist mainimg={robot0024} title="Dancing Robot 0024" Avatar={moondancer} avatarName="MoonDancer" />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}
