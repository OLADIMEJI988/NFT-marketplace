import React, { useState } from 'react';
import Header from '../components/Header';
import Marketplace from '../components/Marketplace';
import MarketplaceCollections from '../components/MarketplaceCollections';
import Footer from '../components/Footer';

import searchicon from "../assets/searchicon.png";
import line from "../assets/Line 2.png";

import magicmushroom from '../assets/magicmushroom.png';
import robot032 from '../assets/robot032.png';
import robot024 from '../assets/robot024.png';
import smdbear from '../assets/smdbear.png';
import dog0356 from '../assets/dog0356.png';
import robot0312 from '../assets/robot0312.png';
import girl035 from '../assets/girl035.png';
import spacetravel from '../assets/spacetravel.png';
import sunsetdimension from '../assets/sunsetdimension.png';
import desertwalk from '../assets/desertwalk.png';
import ape0324 from '../assets/ape0324.png';
import dog0344 from '../assets/dog0344.png';
import Avatar from "../assets/Avatar.png";
import puppypower from "../assets/puppypower.png";
import iceape from "../assets/iceape.png";
import catch22 from "../assets/catch22.png";
import nebulaKid from "../assets/nebulaKid.png";
import moondancer from "../assets/moondancer.png";
import robotica from "../assets/robotica.png";
import spaceone from "../assets/spaceone.png";
import mrfox from "../assets/mrfox.png";
import robotAvatar from "../assets/robotAvatar.png";
import shroomie from "../assets/shroomie.png";
import boredmonkey0 from "../assets/boredmonkey2.0.png";
import boredmonkey1 from "../assets/boredmonkey2.1.png";
import boredmonkey2 from "../assets/boredmonkey2.2.png";
import boredmonkey3 from "../assets/boredmonkey2.3.png";
import boredmonkey4 from "../assets/boredmonkey2.4.png";
import boredmonkey5 from "../assets/boredmonkey2.5.png";
import boredmonkey6 from "../assets/boredmonkey2.6.png";
import boredmonkey7 from "../assets/boredmonkey2.7.png";
import boredmonkey8 from "../assets/boredmonkey2.8.png";
import paradox0 from "../assets/paradox2.0.png";
import paradox1 from "../assets/paradox2.1.png";
import paradox2 from "../assets/paradox2.2.png";
import paradox3 from "../assets/paradox2.3.png";
import paradox4 from "../assets/paradox2.4.png";
import paradox5 from "../assets/paradox2.5.png";
import paradox6 from "../assets/paradox2.6.png";
import paradox7 from "../assets/paradox2.7.png";
import paradox8 from "../assets/paradox2.8.png";

export default function NFTMarketplace() {
  const [activeTab, setActiveTab] = useState('NFTs');
  const [searchTerm, setSearchTerm] = useState('');

  const allNfts = [
    { mainimg: magicmushroom, title: "Magic Mushroom 0325", creatorimg: shroomie, creatorname: "Shroomie" },
    { mainimg: robot032, title: "Happy Robot 032", creatorimg: robotAvatar, creatorname: "BeKind2Robots" },
    { mainimg: robot024, title: "Happy Robot 024", creatorimg: robotAvatar, creatorname: "BeKind2Robots" },
    { mainimg: smdbear, title: "Designer Bear", creatorimg: mrfox, creatorname: "Mr Fox" },
    { mainimg: dog0356, title: "Colorful Dog 0356", creatorimg: spaceone, creatorname: "Keepitreal" },
    { mainimg: robot0312, title: "Dancing Robot 0312", creatorimg: robotica, creatorname: "Robotica" },
    { mainimg: girl035, title: "Cherry Blossom Girl 035", creatorimg: moondancer, creatorname: "MoonDancer" },
    { mainimg: spacetravel, title: "Space Travel", creatorimg: nebulaKid, creatorname: "NebulaKid" },
    { mainimg: sunsetdimension, title: "Sunset Dimension", creatorimg: Avatar, creatorname: "Animakid" },
    { mainimg: desertwalk, title: "Desert Walk", creatorimg: catch22, creatorname: "Catch 22" },
    { mainimg: ape0324, title: "IceCream Ape 0324", creatorimg: iceape, creatorname: "Ice Ape Club" },
    { mainimg: dog0344, title: "Colorful Dog 0344", creatorimg: puppypower, creatorname: "PuppyPower" },
  ];

  const allCollections = [
    { mainimg: paradox2, title: "Paradox 2.2", creatorimg: nebulaKid, creatorname: "Paradox Club" },
    { mainimg: boredmonkey0, title: "BoredApe 2.0", creatorimg: iceape, creatorname: "Ice Ape Club" },
    { mainimg: boredmonkey1, title: "BoredApe 2.1", creatorimg: iceape, creatorname: "Ice Ape Club" },
    { mainimg: paradox0, title: "Paradox 2.0", creatorimg: nebulaKid, creatorname: "Paradox Club" },
    { mainimg: boredmonkey2, title: "BoredApe 2.2", creatorimg: iceape, creatorname: "Ice Ape Club" },
    { mainimg: paradox1, title: "Paradox 2.1", creatorimg: nebulaKid, creatorname: "Paradox Club" },
    { mainimg: boredmonkey3, title: "BoredApe 2.3", creatorimg: iceape, creatorname: "Ice Ape Club" },
    { mainimg: boredmonkey4, title: "BoredApe 2.4", creatorimg: iceape, creatorname: "Ice Ape Club" },
    { mainimg: paradox6, title: "Paradox 2.6", creatorimg: nebulaKid, creatorname: "Paradox Club" },
    { mainimg: boredmonkey5, title: "BoredApe 2.5", creatorimg: iceape, creatorname: "Ice Ape Club" },
    { mainimg: paradox3, title: "Paradox 2.3", creatorimg: nebulaKid, creatorname: "Paradox Club" },
    { mainimg: boredmonkey6, title: "BoredApe 2.6", creatorimg: iceape, creatorname: "Ice Ape Club" },
    { mainimg: paradox7, title: "Paradox 2.7", creatorimg: nebulaKid, creatorname: "Paradox Club" },
    { mainimg: boredmonkey7, title: "BoredApe 2.7", creatorimg: iceape, creatorname: "Ice Ape Club" },
    { mainimg: paradox5, title: "Paradox 2.5", creatorimg: nebulaKid, creatorname: "Paradox Club" },
    { mainimg: boredmonkey8, title: "BoredApe 2.8", creatorimg: iceape, creatorname: "Ice Ape Club" },
    { mainimg: paradox4, title: "Paradox 2.4", creatorimg: nebulaKid, creatorname: "Paradox Club" },
    { mainimg: paradox8, title: "Paradox 2.8", creatorimg: nebulaKid, creatorname: "Paradox Club" },
  ];

  const filteredNfts = allNfts.filter(nft =>
    nft.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    nft.creatorname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const filteredCollections = allCollections.filter(collection =>
    collection.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    collection.creatorname.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Header />
      <div className='bg-[#2B2B2B] text-white'>
        <div className='py-14 px-5 sm:px-10 md:px-20 lg:px-32'>
          <p className='text-3xl sm:text-4xl md:text-5xl font-semibold'>Browse Marketplace</p>
          <p className='font-light text-sm md:text-base tracking-wide mt-3'>
            Browse through more than 50k NFTs on the NFT Marketplace
          </p>

          <div className='relative mt-5'>
            <input
              type="text"
              placeholder='Search your favourite NFTs'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className='bg-transparent w-full px-5 py-3 rounded-xl border border-[#424242] text-sm md:text-base placeholder:text-[#aaa] focus:outline-none'
            />
            <img className='absolute top-1/2 right-5 transform -translate-y-1/2 h-5' src={searchicon} alt="search" />
          </div>
        </div>

        <img className='w-full py-10 -mt-10' src={line} alt="divider" />

        <div className='flex sm:flex-row justify-center items-center gap-10 sm:gap-20 px-5 sm:px-0 -mt-7 pb-3'>
          <div
            className={`cursor-pointer flex gap-3 items-center ${activeTab === 'NFTs' ? 'border-b border-[#858584] pb-1' : ''}`}
            onClick={() => setActiveTab('NFTs')}
          >
            <p className={`text-base ${activeTab === 'NFTs' ? 'text-white' : 'text-[#858584]'}`}>NFTs</p>
            <span className='bg-[#858584] px-2 py-1 rounded-full text-xs'>302</span>
          </div>
          <div
            className={`cursor-pointer flex gap-3 items-center ${activeTab === 'Collections' ? 'border-b border-[#858584] pb-1' : ''}`}
            onClick={() => setActiveTab('Collections')}
          >
            <p className={`text-base ${activeTab === 'Collections' ? 'text-white' : 'text-[#858584]'}`}>Collections</p>
            <span className='bg-[#3B3B3B] px-2 py-1 rounded-full text-xs'>67</span>
          </div>
        </div>

        <div className='bg-[#3B3B3B] pt-8 pb-14 px-5 sm:px-10 lg:px-32'>
          {activeTab === 'NFTs' ? (
            <Marketplace nfts={filteredNfts} />
          ) : (
            <MarketplaceCollections nfts={filteredCollections} />
          )}
        </div>
      </div>
      <Footer />
    </>
  );
}
