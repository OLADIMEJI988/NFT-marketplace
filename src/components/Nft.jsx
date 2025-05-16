import React from 'react';
import './DiscoverNFT.css';
import { Link } from 'react-router-dom';

export default function ({ mainimg, Avatar, avatarName, title }) {
  return (
    <Link to="/AboutNFT" className="block w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-sm">
      <div className="mt-5 cursor-pointer hoverEffect transition">
        <img
          className="w-full h-60 object-cover rounded-t-[13px]"
          src={mainimg}
          alt={title}
        />
        <div className="text-start bg-[#3B3B3B] py-4 px-6 text-white sans rounded-b-[13px]">
          <p className="text-[16px]">{title}</p>
          <div className="flex items-center gap-2 mt-2">
            <img className="h-4 w-4 object-cover rounded-full" src={Avatar} alt={avatarName} />
            <p className="text-xs font-light tracking-wide">{avatarName}</p>
          </div>
          <div className="flex mt-5 justify-between">
            <div className="spaceMono">
              <p className="text-[#858584] text-[13px]">Price</p>
              <p>1.63 ETH</p>
            </div>
            <div className="spaceMono">
              <p className="text-[#858584] text-[13px]">Highest Bid</p>
              <p>0.33 wETH</p>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
