import React from 'react'
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header'
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





import './AboutNFT.css'
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
        <div className='bg-[#2B2B2B] pt-[2px] text-start text-white'>
             <img className='h-auto w-[100vw]' src={orbitansmainimg} alt="" />
            <div className='sans mx-28 py-7'>
                <p className='text-[40px]'>The Orbitians</p>
                <p className='text-[#858584] font-light mt-[2px]'>Minted on Sep 30, 2022</p>
                <p className='text-[#858584] mt-6 spaceMono'>Created By</p>
                <div className='flex items-center gap-2 mt-2 mb-6'>
                    <img className='h-[18px]' src={moondancer} alt="" />
                    <p className='text-[13px] spaceMono'>MoonDancer</p>
                </div>
                <div className='font-normal max-w-[450px]'>
                    <p className='text-[#858584] mt-6 spaceMono'>Description</p>
                    <p className='mt-3 mb-[2px]'>The Orbitians</p>
                    <p className=''>is a collection of 10,000 unique NFTs on the Ethereum blockchain,</p>
                    <p className='my-7'>There are all sorts of beings in the NFT Universe. The most advanced and friendly of the bunch are Orbitians.</p>
                    <p>They live in a metal space machines, high up in the sky and only have one foot on Earth. These Orbitians are a peaceful race, but they have been at war with a group of invaders for many generations. The invaders are called Upside-Downs, because of their inverted bodies that live on the ground, yet do not know any other way to be. Upside-Downs believe that they will be able to win this war if they could only get an eye into Orbitian territory, so they've taken to make human beings their target.</p>
                </div>

                <div>
                    <p className='text-[#858584] mt-6 spaceMono'>Details</p>
                    <div className='flex my-3 gap-2 cursor-pointer'>
                        <img className='h-6' src={globe} alt="" />
                        <p className='font-light'>View on Etherscan</p>
                    </div>
                    <div className='flex gap-2 cursor-pointer'>
                        <img className='h-6' src={globe} alt="" />
                        <p className='font-light'>View Original</p>
                    </div>
                </div>

                <div className='mt-5'>
                    <p className='text-[#858584] mt-6 spaceMono'>Tags</p>
                    <div className='flex mt-4 gap-3'>
                        <button className='bg-[#3B3B3B] px-6 py-[7px] rounded-full text-[13px] tracking-wide hoverEffect transition'>ANIMATION</button>
                        <button className='bg-[#3B3B3B] px-6 py-[7px] rounded-full text-[13px] tracking-wide hoverEffect transition'>ILLUSTRATION</button>
                        <button className='bg-[#3B3B3B] px-6 py-[7px] rounded-full text-[13px] tracking-wide hoverEffect transition'>MOON</button>
                        <button className='bg-[#3B3B3B] px-6 py-[7px] rounded-full text-[13px] tracking-wide hoverEffect transition'>SPACE</button>
                    </div>
                </div>

                <div className='flex justify-between items-center mt-20 mb-8'>
                    <div>
                        <p className='text-3xl tracking-[-0.04em]'>More From This Artist</p>
                    </div>
                    <button className='flex items-center text-sm border-2 border-[#A259FF] px-[30px] py-3 rounded-2xl gap-[9px] hoverEffect transition' onClick={handleClick}>
                        <img className='h-[15px]' src={purplearrow} alt="" />
                        <p className='text-[13px] tracking-wide sans'>Go To Artist Page</p>
                    </button>
                </div>

                <div className='flex justify-center gap-5 mt-5'>
                    <NftFromArtist mainimg={foxy} title="Foxy Life" Avatar={moondancer} avatarName="MoonDancer" />  
                    <NftFromArtist mainimg={cat} title="Cat From Future" Avatar={moondancer} avatarName="MoonDancer" />  
                    <NftFromArtist mainimg={psychodog} title="Psycho Dog" Avatar={moondancer} avatarName="MoonDancer" />  
                </div>

                <div className='flex justify-center gap-5 mt-3'>
                    <NftFromArtist mainimg={dbear} title="Designer Bear" Avatar={moondancer} avatarName="MoonDancer" />  
                    <NftFromArtist mainimg={robot0375} title="Dancing Robot 0375" Avatar={moondancer} avatarName="MoonDancer" />  
                    <NftFromArtist mainimg={robot0356} title="Dancing Robot 0356" Avatar={moondancer} avatarName="MoonDancer" />  
                </div>

                <div className='flex justify-center gap-5 mt-3 mb-10'>
                    <NftFromArtist mainimg={robot0321} title="Dancing Robot 0321" Avatar={moondancer} avatarName="MoonDancer" />  
                    <NftFromArtist mainimg={robot0512} title="Dancing Robot 0512" Avatar={moondancer} avatarName="MoonDancer" />  
                    <NftFromArtist mainimg={robot0024} title="Dancing Robot 0024" Avatar={moondancer} avatarName="MoonDancer" />  
                </div>

            </div>
            <Footer />
        </div>
    </>
  )
}
