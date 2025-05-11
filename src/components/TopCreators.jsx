import React from 'react'
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

import './TopCreators.css'
import Creators from './Creators';


export default function TopCreators() {
  return (
    <div className='bg-[#2B2B2B] text-start px-20 text-white sans py-10'>
        <div className='flex justify-between'>
            <div>
                <p className='text-3xl tracking-[-0.04em]'>Top Creators</p>
                <p className='font-light text-sm mt-2 tracking-wide'>Checkout Top Rated Creators on the NFT Marketplace</p>
            </div>
            <button className='flex items-center text-sm border border-[#A259FF] px-[30px] rounded-xl gap-[8px] hoverEffectBtn transition mt-5'>
                <img className='h-[14px]' src={Rocket} alt="" />
                <p className='text-[12px] tracking-wide sans'>View Rankings</p>
            </button>
        </div>

        <div className='flex flex-col mt-5 items-center'>
            <div className='mt-10 flex gap-5'>
            <Creators 
                    num="1"
                    img={keepitreal}
                    creatorName="Keepitreal"
            />

            <Creators 
                    num="2"
                    img={digilab}
                    creatorName="DigiLab"
            />
            
            <Creators 
                    num="3"
                    img={gravityone}
                    creatorName="GravityOne"
            />

            <Creators 
                    num="4"
                    img={juanie}
                    creatorName="Juanie"
            />
            </div>

            <div className='mt-10 flex gap-5'>
            <Creators 
                    num="5"
                    img={bluewhale}
                    creatorName="BlueWhale"
            />

            <Creators 
                    num="6"
                    img={mrfox}
                    creatorName="Mr Fox"
            />
            
            <Creators 
                    num="7"
                    img={shroomie}
                    creatorName="Shroomie"
            />

            <Creators 
                    num="8"
                    img={robotica}
                    creatorName="Robotica"
            />
            </div>

            <div className='mt-10 flex gap-5'>
            <Creators 
                    num="9"
                    img={rustyrobot}
                    creatorName="RustyRobot"
            />

            <Creators 
                    num="10"
                    img={animakid}
                    creatorName="AnimaKid"
            />
            
            <Creators 
                    num="11"
                    img={dotgu}
                    creatorName="Dotgu"
            />

            <Creators 
                    num="12"
                    img={ghiblier}
                    creatorName="Ghiblier"
            />
            </div>
        </div>        

    </div>
  )
}
