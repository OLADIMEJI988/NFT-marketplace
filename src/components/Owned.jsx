import React from 'react';
import nftcharacter1 from "../assets/nftcharacter1.png";
import nftcharacter2 from "../assets/nftcharacter2.png";
import nftcharacter4 from "../assets/nftcharacter4.png";
import nftcharacter11 from "../assets/nftcharacter11.png";
import nftcharacter8 from "../assets/nftcharacter8.png";
import nftcharacter7 from "../assets/nftcharacter7.png";
import paradox5 from "../assets/paradox5.png";
import paradox2 from "../assets/paradox2.png";
import paradox6 from "../assets/paradox6.png";

import CreatedNFT from './CreatedNFT';

export default function Owned() {
  return (
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 xl:px-44 py-1 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-6 justify-items-center">
        <CreatedNFT mainimg={nftcharacter1} title="Aiko Yukimura" />
        <CreatedNFT mainimg={nftcharacter2} title="Takeshi Arata" />
        <CreatedNFT mainimg={nftcharacter4} title="Renji Kurogane" />
        <CreatedNFT mainimg={paradox5} title="Yuna Amegiri" />
        <CreatedNFT mainimg={paradox2} title="Kaito Shinra" />
        <CreatedNFT mainimg={paradox6} title="Haruki Kazenari" />
        <CreatedNFT mainimg={nftcharacter11} title="Mira Hoshizora" />
        <CreatedNFT mainimg={nftcharacter8} title="Sora Hanekawa" />
        <CreatedNFT mainimg={nftcharacter7} title="Kaede Tsukino" />
      </div>
    </div>
  );
}
