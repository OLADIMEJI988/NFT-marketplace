import React, { useState, useEffect } from 'react';
import imgplaceholder from "../assets/imgplaceholder.png";
import animakidsq from "../assets/animakidsq.png";
import copyimg from "../assets/copyimg.png";
import plusimg from "../assets/plusimg.png";
import globe from "../assets/globe.png";
import DiscordLogo from "../assets/DiscordLogo.png";
import YoutubeLogo from "../assets/YoutubeLogo.png";
import TwitterLogo from "../assets/TwitterLogo.png";
import InstagramLogo from "../assets/InstagramLogo.png";
import line from "../assets/Line 2.png";

import Header from '../components/Header';
import Created from '../components/Created';
import Owned from '../components/Owned';
import Footer from '../components/Footer';
import ArtistCollection from '../components/ArtistCollection';

export default function ArtistPage() {
  const [activeTab, setActiveTab] = useState('created');
  const [isFollowing, setIsFollowing] = useState(false);

  useEffect(() => {
    const followStatus = sessionStorage.getItem('isFollowing');
    if (followStatus === 'true') {
      setIsFollowing(true);
    }
  }, []);

  const handleFollow = () => {
    setIsFollowing(true);
    sessionStorage.setItem('isFollowing', 'true');
  };

  const handleUnfollow = () => {
    setIsFollowing(false);
    sessionStorage.setItem('isFollowing', 'false');
  };

  return (
    <>
      <Header />
      <div className='bg-[#2B2B2B] text-white'>
        <img className='w-full object-cover max-h-[280px] sm:max-h-[400px]' src={imgplaceholder} alt="" />

        <div className='flex flex-col lg:flex-row items-center justify-between px-5 sm:px-10 lg:px-24 -mt-14 gap-6'>
          <div className='flex flex-col items-start'>
            <img className='h-20 w-20 md:h-24 md:w-24 mt-4 md:mt-0' src={animakidsq} alt="" />
            <p className='text-2xl sm:text-3xl sans mt-6'>AnimaKid</p>

            <div className='sans flex flex-wrap gap-8 mt-6 text-start'>
              <div>
                <p className='text-lg sm:text-xl spaceMono'>250k+</p>
                <p className='font-light text-sm'>Volume</p>
              </div>
              <div>
                <p className='text-lg sm:text-xl spaceMono'>50+</p>
                <p className='font-light text-sm'>NFTs Sold</p>
              </div>
              <div>
                <p className='text-lg sm:text-xl spaceMono'>3000+</p>
                <p className='font-light text-sm'>Followers</p>
              </div>
            </div>

            {/* Bio */}
            <div className='sans my-6 w-full'>
              <p className='text-[#858584] spaceMono text-sm'>Bio</p>
              <p className='font-light mt-2'>The internet's friendliest kid designer.</p>
            </div>

            {/* Links */}
            <div className='text-start w-full'>
              <p className='text-[#858584] spaceMono text-sm'>Links</p>
              <div className='flex gap-3 mt-2'>
                {[globe, DiscordLogo, YoutubeLogo, TwitterLogo, InstagramLogo].map((logo, i) => (
                  <img key={i} className='h-6 cursor-pointer hoverEffectBtn transition' src={logo} alt="social-icon" />
                ))}
              </div>
            </div>
          </div>

          {/* Wallet Address and Follow Buttons */}
          <div className='flex flex-col sm:flex-row gap-4 mt-6'>
            <button className='flex h-11 items-center text-sm bg-[#A259FF] px-4 rounded-xl gap-2 hoverEffectBtn transition'>
              <img className='h-4' src={copyimg} alt="" />
              <p className='sans text-sm'>0xc0E3...B79C</p>
            </button>

            {!isFollowing ? (
              <button
                onClick={handleFollow}
                className='flex h-11 items-center justify-center text-sm border border-[#A259FF] px-4 rounded-xl gap-4 md:gap-2 hoverEffectBtn transition'
              >
                <img className='h-4' src={plusimg} alt="" />
                <p className='sans text-sm'>Follow</p>
              </button>
            ) : (
              <div className="flex gap-2">
                <button
                  className='flex h-11 items-center text-sm bg-[#A259FF] px-5 rounded-xl gap-2'
                  disabled
                >
                  <p className='sans text-sm'>Following</p>
                </button>
                <button
                  onClick={handleUnfollow}
                  className='flex h-11 items-center text-sm border border-[#A259FF] px-4 rounded-xl gap-2 hoverEffectBtn transition'
                >
                  <p className='sans text-sm'>Unfollow</p>
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Divider */}
        <img className='w-full mt-10 mb-5' src={line} alt="" />

        {/* Tabs */}
        <div className='flex flex-wrap justify-center gap-8 sm:gap-20 px-5'>
          <div
            className={`sans flex gap-2 items-center cursor-pointer ${activeTab === 'created' ? 'border-b border-[#858584] pb-1' : ''}`}
            onClick={() => setActiveTab('created')}
          >
            <p className={`text-[17px] ${activeTab === 'created' ? 'text-white' : 'text-[#858584]'}`}>Created</p>
            <div className='spaceMono bg-[#858584] px-3 py-[2px] rounded-full text-xs'>302</div>
          </div>
          <div
            className={`sans flex gap-2 items-center cursor-pointer ${activeTab === 'owned' ? 'border-b border-[#858584] pb-1' : ''}`}
            onClick={() => setActiveTab('owned')}
          >
            <p className={`text-[17px] ${activeTab === 'owned' ? 'text-white' : 'text-[#858584]'}`}>Owned</p>
            <div className='spaceMono bg-[#3B3B3B] px-3 py-[2px] rounded-full text-xs'>67</div>
          </div>
          <div
            className={`sans flex gap-2 items-center cursor-pointer ${activeTab === 'collection' ? 'border-b border-[#858584] pb-1' : ''}`}
            onClick={() => setActiveTab('collection')}
          >
            <p className={`text-[17px] ${activeTab === 'collection' ? 'text-white' : 'text-[#858584]'}`}>Collection</p>
            <div className='spaceMono bg-[#3B3B3B] px-3 py-[2px] rounded-full text-xs'>1</div>
          </div>
        </div>

        {/* Content Section */}
        <div className='bg-[#3B3B3B] pt-8 pb-14 transition-opacity duration-500 opacity-100'>
          {activeTab === 'created' && <Created />}
          {activeTab === 'owned' && <Owned />}
          {activeTab === 'collection' && <ArtistCollection />}
        </div>
      </div>
      <Footer />
    </>
  );
}
