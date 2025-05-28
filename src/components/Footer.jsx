import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import DiscordLogo from "../assets/DiscordLogo.png";
import YoutubeLogo from "../assets/YoutubeLogo.png";
import TwitterLogo from "../assets/TwitterLogo.png";
import InstagramLogo from "../assets/InstagramLogo.png";
import divider from "../assets/Divider.png";

import './Footer.css'


export default function Footer() {
  return (
    <div className='bg-[#3B3B3B] py-10 px-5 md:px-10 lg:px-20 text-[#CCCCCC] text-start' id='footer'>
      
      <div className='flex flex-col lg:flex-row gap-12 lg:gap-20 justify-between items-start'>
        
        <div className='max-w-xs'>
          <img className='h-6' src={logo} alt="Logo" />
          <p className='tracking-wide text-sm mt-4'>NFT marketplace UI created with Anima for Figma.</p>
          <p className='tracking-wide text-sm my-3'>Join our community</p>
          <div className='flex gap-2 mt-2'>
            <a href="https://discord.com/">
              <img className='h-6 cursor-pointer imgEffect transition' src={DiscordLogo} alt="Discord" />
            </a>
            <a href="https://www.youtube.com/">
              <img className='h-6 cursor-pointer imgEffect transition' src={YoutubeLogo} alt="YouTube" />
            </a>
            <a href="https://x.com/i/flow/login">
              <img className='h-6 cursor-pointer imgEffect transition' src={TwitterLogo} alt="Twitter" />
            </a>
            <a href="https://www.instagram.com/">
              <img className='h-6 cursor-pointer imgEffect transition' src={InstagramLogo} alt="Instagram" />
            </a>
          </div>
        </div>

        <div className='text-sm sans'>
          <p className='text-white text-lg spaceMono mb-4'>Explore</p>
          <ul className='space-y-5'>
              <Link to="/NFTMarketplace">
                <li className='textEffect transition'>Marketplace</li>
              </Link>
    
              <Link to="/CreatorRankings">
                <li className='my-3 lg:my-2 textEffect transition'>Rankings</li>
              </Link>
    
              <Link to="/ConnectWallet">
                <li className='textEffect transition'>Connect a wallet</li>
              </Link>
          </ul>
        </div>

        <div className='spaceMono text-sm w-full lg:w-auto'>
          <p className='text-white text-lg mb-4'>Join Our Weekly Digest</p>
          <p className='mb-3 max-w-xs'>Get exclusive promotions & updates straight to your inbox.</p>
          
          <div className='flex flex-col sm:flex-row items-center gap-3 mt-4 w-full max-w-md'>
            <input
              className='w-full sm:w-auto flex-1 py-3 pl-5 pr-4 rounded-xl outline-none text-black'
              type="text"
              placeholder='Enter your email'
            />
            <button className='flex items-center text-sm bg-[#A259FF] py-3 px-6 rounded-xl gap-2 text-white'>
              <p className='text-[12px] tracking-wide sans'>Subscribe</p>
            </button>
          </div>
        </div>
      </div>

      <div className='mt-10'>
        <img src={divider} alt="Divider" className='w-full' />
        <p className='text-xs spaceMono mt-3 text-center lg:text-left'>NFT Market.</p>
      </div>
    </div>
  );
}
