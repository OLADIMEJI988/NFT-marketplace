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
      <div className='bg-[#2B2B2B] text-white border-b-2 border-[#2B2B2B]'>
        <img className='w-full' src={imgplaceholder} alt="" />
        <div className={`flex justify-center ${isFollowing ? 'gap-[284px]' : 'gap-96'}`}>
          <div className='-translate-y-14'>
            <img className='h-24 ' src={animakidsq} alt="" />
            <p className='text-3xl sans mt-6 text-start'>AnimaKid</p>
            <div className='sans flex gap-14 mt-6 text-start'>
              <div>
                <p className='text-xl spaceMono'>250k+</p>
                <p className='font-light'>Volume</p>
              </div>
              <div>
                <p className='text-xl spaceMono'>50+</p>
                <p className='font-light'>NFTs Sold</p>
              </div>
              <div>
                <p className='text-xl spaceMono'>3000+</p>
                <p className='font-light'>Followers</p>
              </div>
            </div>

            <div className='sans my-6 text-start'>
              <p className='text-[#858584] spaceMono text-sm'>Bio</p>
              <p className='font-light mt-2'>The internet's friendliest kid designer.</p>
            </div>

            <div className='text-start'>
              <p className='text-[#858584] spaceMono text-sm'>Links</p>
              <div className='flex gap-2 mt-2'>
                <img className='h-[25px] cursor-pointer hoverEffectBtn transition' src={globe} alt="" />
                <img className='h-[25px] cursor-pointer hoverEffectBtn transition' src={DiscordLogo} alt="" />
                <img className='h-[25px] cursor-pointer hoverEffectBtn transition' src={YoutubeLogo} alt="" />
                <img className='h-[25px] cursor-pointer hoverEffectBtn transition' src={TwitterLogo} alt="" />
                <img className='h-[25px] cursor-pointer hoverEffectBtn transition' src={InstagramLogo} alt="" />
              </div>
            </div>
          </div>

          <div className='mt-10 flex gap-5'>
            <button className='flex h-11 items-center text-sm bg-[#A259FF] pl-4 pr-6 rounded-xl gap-[5px] hoverEffectBtn transition mt-5'>
              <img className='h-4' src={copyimg} alt="" />
              <p className='sans text-[13px]'>0xc0E3...B79C</p>
            </button>

            {!isFollowing ? (
              <button
                onClick={handleFollow}
                className='flex h-11 items-center text-sm border border-[#A259FF] bg-transparent pl-4 pr-6 rounded-xl gap-[11px] hoverEffectBtn transition mt-5'
              >
                <img className='h-4' src={plusimg} alt="" />
                <p className='sans text-[13px]'>Follow</p>
              </button>
            ) : (
              <>
                <button
                  className='flex h-11 items-center text-sm bg-[#A259FF] px-5 rounded-xl gap-[11px] mt-5'
                  disabled
                >
                  <p className='sans text-[13px]'>Following</p>
                </button>
                <button
                  onClick={handleUnfollow}
                  className='flex h-11 items-center text-sm border border-[#A259FF] bg-transparent px-4 rounded-xl gap-[5px] hoverEffectBtn transition mt-5'
                >
                  <p className='sans text-[13px]'>Unfollow</p>
                </button>
              </>
            )}
          </div>
        </div>

        <img className='w-full py-10 -mt-16' src={line} alt="" />

        <div className='flex -mt-7 pb-3 gap-64 items-center justify-center'>
          {/* Created Tab */}
          <div
            className={`sans flex gap-[10px] items-center cursor-pointer ${activeTab === 'created' ? 'border-b border-[#858584] py-1 w-52 justify-center' : ''}`}
            onClick={() => setActiveTab('created')}
          >
            <p className='text-[17px]'>Created</p>
            <div className='spaceMono bg-[#858584] px-[7px] py-[10px] items-center rounded-full text-xs'>302</div>
          </div>

          {/* Owned Tab */}
          <div
            className={`sans flex gap-[10px] items-center cursor-pointer ${activeTab === 'owned' ? 'border-b border-[#858584] py-1 w-52 justify-center' : ''}`}
            onClick={() => setActiveTab('owned')}
          >
            <p className={`text-[17px] ${activeTab === 'owned' ? 'text-white' : 'text-[#858584]'}`}>Owned</p>
            <div className='spaceMono bg-[#3B3B3B] px-2 py-2 items-center rounded-full text-xs'>67</div>
          </div>

          {/* Collection Tab */}
          <div
            className={`sans flex gap-[10px] items-center cursor-pointer ${activeTab === 'collection' ? 'border-b border-[#858584] py-1 w-52 justify-center' : ''}`}
            onClick={() => setActiveTab('collection')}
          >
            <p className={`text-[17px] ${activeTab === 'collection' ? 'text-white' : 'text-[#858584]'}`}>Collection</p>
            <div className='spaceMono bg-[#3B3B3B] px-3 py-2 items-center rounded-full text-xs'>1</div>
          </div>
        </div>

        {/* Tab Content Sections */}
        {activeTab === 'created' && (
          <div className='bg-[#3B3B3B] pt-8 pb-14 transition-opacity duration-500 opacity-100'>
            <Created />
          </div>
        )}

        {activeTab === 'owned' && (
          <div className='bg-[#3B3B3B] pt-8 pb-14 transition-opacity duration-500 opacity-100'>
            <Owned />
          </div>
        )}

        {activeTab === 'collection' && (
          <div className='bg-[#3B3B3B] pt-8 pb-14 transition-opacity duration-500 opacity-100'>
            <ArtistCollection />
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}
