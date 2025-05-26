import React from 'react';
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
    <div className="px-4 sm:px-8 md:px-20 lg:px-40 xl:px-44 py-1 flex justify-center">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6 justify-items-center">
        <CreatedNFT mainimg={distantgalaxy} title="Distant Galaxy" />
        <CreatedNFT mainimg={edena} title="Life On Edena" />
        <CreatedNFT mainimg={astrofiction} title="AstroFiction" />
        <CreatedNFT mainimg={cryptocity} title="CryptoCity" />
        <CreatedNFT mainimg={colorfuldog} title="ColorfulDog 0524" />
        <CreatedNFT mainimg={spacetales} title="Space Tales" />
        <CreatedNFT mainimg={blossomgirl} title="Cherry Blossom Girl 037" />
        <CreatedNFT mainimg={dancingrobot} title="Dancing Robots 0987" />
        <CreatedNFT mainimg={ape} title="IceCream Ape" />
      </div>
    </div>
  );
}
