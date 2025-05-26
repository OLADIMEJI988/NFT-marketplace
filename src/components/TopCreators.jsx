import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Rocket from "../assets/purpleRocketLaunch.png";
import keepitreal from "../assets/keepitreal.png";
import digilab from "../assets/digilab.png";
import gravityone from "../assets/gravityone.png";
import juanie from "../assets/juanie.png";
import bluewhale from "../assets/bluewhale.png";
import mrfox from "../assets/mrfoxlg.png";
import shroomie from "../assets/shroomielg.png";
import robotica from "../assets/robotica.png";
import rustyrobot from "../assets/rustyrobot.png";
import animakid from "../assets/animakid.png";
import dotgu from "../assets/dotgu.png";
import ghiblier from "../assets/ghiblier.png";

import Creators from './Creators';

export default function TopCreators() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/CreatorRankings');
  };

  const creatorData = [
    { num: "1", img: keepitreal, creatorName: "Keepitreal" },
    { num: "2", img: digilab, creatorName: "DigiLab" },
    { num: "3", img: gravityone, creatorName: "GravityOne" },
    { num: "4", img: juanie, creatorName: "Juanie" },
    { num: "5", img: bluewhale, creatorName: "BlueWhale" },
    { num: "6", img: mrfox, creatorName: "Mr Fox" },
    { num: "7", img: shroomie, creatorName: "Shroomie" },
    { num: "8", img: robotica, creatorName: "Robotica" },
    { num: "9", img: rustyrobot, creatorName: "RustyRobot" },
    { num: "10", img: animakid, creatorName: "AnimaKid" },
    { num: "11", img: dotgu, creatorName: "Dotgu" },
    { num: "12", img: ghiblier, creatorName: "Ghiblier" },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentCreators = creatorData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(creatorData.length / itemsPerPage);

  return (
    <div className='bg-[#2B2B2B] text-start px-5 md:px-10 lg:px-20 text-white sans py-10'>
      <div className='flex flex-col md:flex-row md:justify-between items-center md:items-start gap-5'>
        <div className='text-center md:text-start'>
          <p className='text-3xl tracking-[-0.04em]'>Top Creators</p>
          <p className='font-light text-sm mt-2 tracking-wide'>
            Checkout Top Rated Creators on the NFT Marketplace
          </p>
        </div>
        <button
          className='flex items-center justify-center text-sm border border-[#A259FF] px-6 py-2 rounded-xl gap-2 sm:gap-5 max-w-[220px] w-full sm:w-auto hover:bg-[#A259FF]/10 transition'
          onClick={handleClick}
        >
          <img className='h-[14px]' src={Rocket} alt="Rocket Icon" />
          <p className='text-[12px] tracking-wide whitespace-nowrap'>View Rankings</p>
        </button>
      </div>

      <div className='flex justify-center'>
        <div className='mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-items-center'>
          {currentCreators.map((creator, index) => (
            <Creators
              key={index}
              num={creator.num}
              img={creator.img}
              creatorName={creator.creatorName}
            />
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-10 space-x-2">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => setCurrentPage(index + 1)}
            className={`w-8 h-8 rounded-full text-sm font-medium transition ${
              currentPage === index + 1
                ? "bg-[#A259FF] text-white"
                : "bg-white text-black hover:bg-[#A259FF]/20"
            }`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
