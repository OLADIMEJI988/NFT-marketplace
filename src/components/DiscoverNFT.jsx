import React, { useState } from 'react'
import purpleEye from "../assets/purpleEye.png";
import distantgalaxy from "../assets/distantgalaxy.png";
import moondancer from "../assets/moondancer.png";
import edena from "../assets/edena.png";
import nebulakid from "../assets/nebulakid.png";
import spaceone from "../assets/spaceone.png";
import astrofiction from "../assets/astrofiction.png";


import './DiscoverNFT.css'
import Nft from './Nft';

export default function DiscoverNFT() {
  const [showMore, setShowMore] = useState(false); 

  return (
    <div className='bg-[#2B2B2B] text-start px-20 text-white sans py-10'>
      <div className='flex justify-between'>
        <div>
          <p className='text-3xl tracking-[-0.04em]'>Discover More NFTs</p>
          <p className='font-light text-sm mt-2 tracking-wide'>Explore new trending NFTs</p>
        </div>
        <button
          className='flex items-center text-sm border border-[#A259FF] px-[30px] rounded-xl gap-[8px] hoverEffectBtn transition mt-5'
          onClick={() => setShowMore(prev => !prev)}
        >
          <img className='h-[14px]' src={purpleEye} alt="" />
          <p className='text-[12px] tracking-wide sans'>{showMore ? 'Show Less' : 'See All'}</p>
        </button>
      </div>

      <div className='flex justify-center gap-5'>
        <Nft mainimg={distantgalaxy} title="Distant Galaxy" Avatar={moondancer} avatarName="MoonDancer" />
        <Nft mainimg={edena} title="Life On Edena" Avatar={nebulakid} avatarName="NebulaKid" />
        <Nft mainimg={astrofiction} title="AstroFiction" Avatar={spaceone} avatarName="SpaceOne" />
      </div>

      {showMore && (
        <>
          <div className='flex justify-center gap-5 mt-5' id="2">
            <Nft mainimg={astrofiction} title="AstroFiction" Avatar={spaceone} avatarName="SpaceOne" />
            <Nft mainimg={distantgalaxy} title="Distant Galaxy" Avatar={moondancer} avatarName="MoonDancer" />
            <Nft mainimg={edena} title="Life On Edena" Avatar={nebulakid} avatarName="NebulaKid" />
          </div>

          <div className='flex justify-center gap-5 mt-5' id="3">
            <Nft mainimg={edena} title="Distant Galaxy" Avatar={moondancer} avatarName="MoonDancer" />
            <Nft mainimg={astrofiction} title="Life On Edena" Avatar={nebulakid} avatarName="NebulaKid" />
            <Nft mainimg={distantgalaxy} title="AstroFiction" Avatar={spaceone} avatarName="SpaceOne" />
          </div>
        </>
      )}
    </div>
  );
}
