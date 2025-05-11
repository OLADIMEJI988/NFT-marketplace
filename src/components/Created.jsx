import React from 'react'
import distantgalaxy from "../assets/distantgalaxy2.png";
import edena from "../assets/edena2.png";
import astrofiction from "../assets/astrofiction2.png";
import cryptocity from "../assets/cryptocity.png";
import colorfuldog from "../assets/colorfuldog.png";
import spacetales from "../assets/spacetales.png";
import blossomgirl from "../assets/blossomgirl.png";
import dancingrobot from "../assets/dancingrobot.png";
import ape from "../assets/ape.png";




import CreatedNFT from './CreatedNFT';

export default function Created() {
  return (
    <>
        <div className='flex justify-center gap-6'>
            <CreatedNFT mainimg={distantgalaxy} title="Distant Galaxy" />
            <CreatedNFT mainimg={edena} title="Life On Edena" />
            <CreatedNFT mainimg={astrofiction} title="AstroFiction" />
        </div>

        <div className='flex justify-center gap-6'>
            <CreatedNFT mainimg={cryptocity} title="CryptoCity" />
            <CreatedNFT mainimg={colorfuldog} title="ColorfulDog 0524" />
            <CreatedNFT mainimg={spacetales} title="Space Tales" />
        </div>

        <div className='flex justify-center gap-6'>
            <CreatedNFT mainimg={blossomgirl} title="Cherry Blossom Girl 037" />
            <CreatedNFT mainimg={dancingrobot} title="Dancing Robots 0987" />
            <CreatedNFT mainimg={ape} title="IceCream Ape" />
        </div>
    </>
    
  )
}
