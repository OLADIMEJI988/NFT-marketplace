import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Ranking from '../components/Ranking';

import jaydon from "../assets/jaydon.png";
import ruben from "../assets/ruben.png";
import alfredo from "../assets/alfredo.png";
import davis from "../assets/davis.png";
import livia from "../assets/livia.png";
import kianna from "../assets/kianna.png";
import phillip from "../assets/phillip.png";
import maria from "../assets/maria.png";
import stanton from "../assets/stanton.png";
import lubin from "../assets/lubin.png";
import allison from "../assets/allison.png";
import workman from "../assets/workman.png";
import lindsey from "../assets/lindsey.png";
import randy from "../assets/randy.png";
import lydia from "../assets/lydia.png";
import rayna from "../assets/rayna.png";
import jocelyn from "../assets/jocelyn.png";

export default function CreatorRankings() {
  const [activeTab, setActiveTab] = useState('Today');

  return (
    <>
      <Header />
      <div className='overflow-x-hidden sans bg-[#2B2B2B] text-white text-start border-b-2 border-[#2B2B2B] pb-5'>
        <div className='px-6 sm:px-10 lg:px-28 py-14'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-semibold'>Top Creators</p>
          <p className='font-light text-sm sm:text-base tracking-wide mt-3'>
            Check out top ranking NFT artists on the NFT Marketplace.
          </p>
        </div>

        <div className='flex flex-wrap justify-center gap-4 sm:gap-16 md:gap-20 lg:gap-32 pb-6'>
          {['Today', 'This Week', 'This Month', 'All Time'].map((tab) => (
            <div
              key={tab}
              className={`spaceMono cursor-pointer px-2 py-1 ${
                activeTab === tab
                  ? 'border-b border-[#858584] text-white'
                  : 'text-[#858584]'
              }`}
              onClick={() => setActiveTab(tab)}
            >
              <p className='text-sm sm:text-base tracking-wide'>{tab}</p>
            </div>
          ))}
        </div>

        <div className='hidden md:flex justify-center'>
          <div className='flex items-center text-[12px] w-full max-w-5xl px-6 py-2 rounded-xl my-5 border border-[#424242] text-[#858584] tracking-wide'>
            <p className='mr-4 w-6'>#</p>
            <p className='flex-1'>Artist</p>
            <p className='w-24 text-center'>Change</p>
            <p className='w-24 text-center'>NFTs Sold</p>
            <p className='w-24 text-center'>Volume</p>
          </div>
        </div>

        {/* Rankings */}
        <div className='flex justify-center px-4 sm:px-8'>
          <div className='w-full max-w-5xl'>
            {activeTab === 'Today' && (
              <>
                <Ranking num="1" creatorimg={jaydon} creatorname="Jaydon Ekstrom Bothman" />
                <Ranking num="2" creatorimg={ruben} creatorname="Ruben Carder" />
                <Ranking num="3" creatorimg={alfredo} creatorname="Alfredo Septimus" />
                <Ranking num="4" creatorimg={davis} creatorname="Davis Franci" />
                <Ranking num="5" creatorimg={livia} creatorname="Livia Rosser" />
                <Ranking num="6" creatorimg={kianna} creatorname="Kianna Donin" />
                <Ranking num="7" creatorimg={phillip} creatorname="Phillip Lipshutz" />
                <Ranking num="8" creatorimg={maria} creatorname="Maria Rosser" />
                <Ranking num="9" creatorimg={stanton} creatorname="Kianna Stanton" />
                <Ranking num="10" creatorimg={lubin} creatorname="Angel Lubin" />
                <Ranking num="11" creatorimg={allison} creatorname="Allison Torff" />
                <Ranking num="12" creatorimg={workman} creatorname="Davis Workman" />
                <Ranking num="13" creatorimg={lindsey} creatorname="Lindsey Lipshutz" />
                <Ranking num="14" creatorimg={randy} creatorname="Randy Carder" />
                <Ranking num="15" creatorimg={lydia} creatorname="Lydia Culhane" />
                <Ranking num="16" creatorimg={rayna} creatorname="Rayna Bator" />
                <Ranking num="17" creatorimg={jocelyn} creatorname="Jocelyn Westervelt" />
                <Ranking num="18" creatorimg={jaydon} creatorname="Marilyn Torff" />
                <Ranking num="19" creatorimg={lubin} creatorname="Skylar Levin" />
                <Ranking num="20" creatorimg={alfredo} creatorname="Terry Dorwart" />
              </>
            )}

            {activeTab === 'This Week' && (
              <>
                <Ranking num="1" creatorimg={alfredo} creatorname="Alfredo Septimus" />
                <Ranking num="2" creatorimg={allison} creatorname="Allison Torff" />
                <Ranking num="3" creatorimg={workman} creatorname="Davis Workman" />
                <Ranking num="4" creatorimg={lindsey} creatorname="Lindsey Lipshutz" />
                <Ranking num="5" creatorimg={randy} creatorname="Randy Carder" />
                <Ranking num="6" creatorimg={alfredo} creatorname="Terry Dorwart" />
              </>
            )}

            {activeTab === 'This Month' && (
              <>
                <Ranking num="1" creatorimg={ruben} creatorname="Ruben Carder" />
                <Ranking num="2" creatorimg={alfredo} creatorname="Alfredo Septimus" />
                <Ranking num="3" creatorimg={davis} creatorname="Davis Franci" />
                <Ranking num="4" creatorimg={livia} creatorname="Livia Rosser" />
                <Ranking num="5" creatorimg={kianna} creatorname="Kianna Donin" />
                <Ranking num="6" creatorimg={lubin} creatorname="Angel Lubin" />
                <Ranking num="7" creatorimg={allison} creatorname="Allison Torff" />
                <Ranking num="8" creatorimg={workman} creatorname="Davis Workman" />
                <Ranking num="9" creatorimg={lindsey} creatorname="Lindsey Lipshutz" />
                <Ranking num="10" creatorimg={randy} creatorname="Randy Carder" />
              </>
            )}

            {activeTab === 'All Time' && (
              <>
                <Ranking num="1" creatorimg={jaydon} creatorname="Jaydon Ekstrom Bothman" />
                <Ranking num="2" creatorimg={phillip} creatorname="Phillip Lipshutz" />
                <Ranking num="3" creatorimg={maria} creatorname="Maria Rosser" />
                <Ranking num="4" creatorimg={stanton} creatorname="Kianna Stanton" />
                <Ranking num="5" creatorimg={lubin} creatorname="Angel Lubin" />
                <Ranking num="6" creatorimg={allison} creatorname="Allison Torff" />
                <Ranking num="7" creatorimg={rayna} creatorname="Rayna Bator" />
                <Ranking num="8" creatorimg={jocelyn} creatorname="Jocelyn Westervelt" />
                <Ranking num="9" creatorimg={lubin} creatorname="Skylar Levin" />
                <Ranking num="10" creatorimg={alfredo} creatorname="Terry Dorwart" />
              </>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
