import React from 'react';
import Collection from './Collection';

import dog from "../assets/dog.png";
import bunny from "../assets/bunny.png";
import bear from "../assets/bear.png";

import mushroom from "../assets/mushroom.png";
import smmushroom from "../assets/smallmushroom.png";

import machine1 from "../assets/machine1.png";
import machine2 from "../assets/machine2.png";
import machine3 from "../assets/machine3.png";

import mrfox from "../assets/mrfox.png";
import shroomie from "../assets/shroomie.png";
import robotAvatar from "../assets/robotAvatar.png";

export default function TrendCollection() {
  return (
    <div className='bg-[#2B2B2B] text-start text-white sans py-10 px-5 sm:px-10 lg:px-20'>
      
      <div>
        <p className='text-2xl sm:text-4xl tracking-[-0.04em]'>Trending Collection</p>
        <p className='font-light text-sm mt-2 tracking-wide'>Checkout our weekly updated trending collection.</p>
      </div>

      <div className='flex flex-col md:flex-row flex-wrap items-center justify-center gap-8 mt-9'>
        <Collection 
          mainImg={dog}
          priImg={bunny}
          secImg={bear}
          title="DSGN Animals"
          avatarName="MrFox"
          avatarImg={mrfox}
        />
        
        <Collection 
          mainImg={mushroom}
          priImg={smmushroom}
          secImg={smmushroom}
          title="Magic Mushrooms"
          avatarName="Shroomie"
          avatarImg={shroomie}
        />
        
        <Collection 
          mainImg={machine1}
          priImg={machine2}
          secImg={machine3}
          title="Disco Machines"
          avatarName="BeKind2Robots"
          avatarImg={robotAvatar}
        />
      </div>
    </div>
  );
}
