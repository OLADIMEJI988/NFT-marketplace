import React, { useState } from 'react';
import purpleEye from "../assets/purpleEye.png";
import distantgalaxy from "../assets/distantgalaxy.png";
import moondancer from "../assets/moondancer.png";
import edena from "../assets/edena.png";
import nebulakid from "../assets/nebulakid.png";
import spaceone from "../assets/spaceone.png";
import astrofiction from "../assets/astrofiction.png";

import './DiscoverNFT.css';
import Nft from './Nft';

export default function DiscoverNFT() {
  const [showMore, setShowMore] = useState(false);

  const nfts = [
    { mainimg: distantgalaxy, title: "Distant Galaxy", Avatar: moondancer, avatarName: "MoonDancer" },
    { mainimg: edena, title: "Life On Edena", Avatar: nebulakid, avatarName: "NebulaKid" },
    { mainimg: astrofiction, title: "AstroFiction", Avatar: spaceone, avatarName: "SpaceOne" },
    { mainimg: astrofiction, title: "AstroFiction", Avatar: spaceone, avatarName: "SpaceOne" },
    { mainimg: distantgalaxy, title: "Distant Galaxy", Avatar: moondancer, avatarName: "MoonDancer" },
    { mainimg: edena, title: "Life On Edena", Avatar: nebulakid, avatarName: "NebulaKid" },
    { mainimg: edena, title: "Distant Galaxy", Avatar: moondancer, avatarName: "MoonDancer" },
    { mainimg: astrofiction, title: "Life On Edena", Avatar: nebulakid, avatarName: "NebulaKid" },
    { mainimg: distantgalaxy, title: "AstroFiction", Avatar: spaceone, avatarName: "SpaceOne" },
  ];

  const visibleNfts = showMore ? nfts : nfts.slice(0, 3);

  return (
    <div className='bg-[#2B2B2B] text-white sans py-10 px-5 sm:px-10 md:px-20'>
      <div className='flex flex-col md:flex-row justify-between items-start md:items-center gap-4'>
        <div className='text-center md:text-left w-full'>
          <p className='text-3xl tracking-[-0.04em]'>Discover More NFTs</p>
          <p className='font-light text-sm mt-2 tracking-wide'>Explore new trending NFTs</p>
        </div>

        <div className='w-full flex justify-center md:justify-end mt-5'>
          <button
            className='flex items-center text-sm border border-[#A259FF] px-[20px] py-2 rounded-xl gap-[8px] hover:bg-[#A259FF]/10 transition'
            onClick={() => setShowMore(prev => !prev)}
          >
            <img className='h-[14px]' src={purpleEye} alt="eye icon" />
            <p className='text-[12px] tracking-wide sans'>{showMore ? 'Show Less' : 'See All'}</p>
          </button>
        </div>

      </div>

      <div className='flex justify-center'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10'>
          {visibleNfts.map((nft, index) => (
            <Nft
              key={index}
              mainimg={nft.mainimg}
              title={nft.title}
              Avatar={nft.Avatar}
              avatarName={nft.avatarName}
            />
          ))}
        </div>
      </div>
      
    </div>
  );
}
