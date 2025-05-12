import React from 'react'
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

export default function ArtistCollection() {
  return (
    <>
        <div className='flex justify-center gap-6'>
            <CreatedNFT mainimg={boredmonkey1} title="Banjo Blaze" />
            <CreatedNFT mainimg={boredmonkey2} title="Chimpy Drip" />
            <CreatedNFT mainimg={boredmonkey7} title="Crypto Chimp" />
        </div>

        <div className='flex justify-center gap-6'>
            <CreatedNFT mainimg={boredmonkey4} title="JungleJaxx" />
            <CreatedNFT mainimg={boredmonkey5} title="Zeke the Swinger" />
            <CreatedNFT mainimg={boredmonkey9} title="MoonTail Max" />
        </div>

        <div className='flex justify-center gap-6'>
            <CreatedNFT mainimg={boredmonkey3} title="Pixel Kong" />
            <CreatedNFT mainimg={boredmonkey8} title="Neon Marmoset" />
            <CreatedNFT mainimg={boredmonkey6} title="Funkzilla" />
        </div>
    </>
    

  )
}
