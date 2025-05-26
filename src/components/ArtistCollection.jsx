import React from 'react';
import boredmonkey1 from "../assets/boredmonkey1.png";
import boredmonkey2 from "../assets/boredmonkey2.png";
import boredmonkey3 from "../assets/boredmonkey3.png";
import boredmonkey4 from "../assets/boredmonkey4.png";
import boredmonkey5 from "../assets/boredmonkey5.png";
import boredmonkey6 from "../assets/boredmonkey6.png";
import boredmonkey7 from "../assets/boredmonkey7.png";
import boredmonkey8 from "../assets/boredmonkey8.png";
import boredmonkey9 from "../assets/boredmonkey9.png";

import CreatedNFT from './CreatedNFT';

const nftData = [
  { img: boredmonkey1, title: "Banjo Blaze" },
  { img: boredmonkey2, title: "Chimpy Drip" },
  { img: boredmonkey7, title: "Crypto Chimp" },
  { img: boredmonkey4, title: "JungleJaxx" },
  { img: boredmonkey5, title: "Zeke the Swinger" },
  { img: boredmonkey9, title: "MoonTail Max" },
  { img: boredmonkey3, title: "Pixel Kong" },
  { img: boredmonkey8, title: "Neon Marmoset" },
  { img: boredmonkey6, title: "Funkzilla" },
];

export default function ArtistCollection() {
  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 xl:px-44 py-1 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-7 gap-y-6 justify-items-center">
        {nftData.map((nft, index) => (
          <CreatedNFT key={index} mainimg={nft.img} title={nft.title} />
        ))}
      </div>
    </div>
  );
}
