import React from 'react'
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
    <>
        <div className='flex justify-center gap-6'>
            <CreatedNFT mainimg={nftcharacter1} title="Aiko Yukimura" />
            <CreatedNFT mainimg={nftcharacter2} title="Takeshi Arata" />
            <CreatedNFT mainimg={nftcharacter4} title="Renji Kurogane" />
        </div>

        <div className='flex justify-center gap-6'>
            <CreatedNFT mainimg={paradox5} title="Yuna Amegiri" />
            <CreatedNFT mainimg={paradox2} title="Kaito Shinra" />
            <CreatedNFT mainimg={paradox6} title="Haruki Kazenari" />
        </div>

        <div className='flex justify-center gap-6'>
            <CreatedNFT mainimg={nftcharacter11} title="Mira Hoshizora" />
            <CreatedNFT mainimg={nftcharacter8} title="Sora Hanekawa" />
            <CreatedNFT mainimg={nftcharacter7} title="Kaede Tsukino" />
        </div>
    </>

  )
}
