import React from 'react'
import Category from './Category'
import artCategory from "../assets/artCategory.png";
import collectiblesCategory from "../assets/collectiblesCategory.png";
import musicCategory from "../assets/musicCategory.png";
import photographyCategory from "../assets/photographyCategory.png";
import videoCategory from "../assets/videoCategory.png";
import utilityCategory from "../assets/utilityCategory.png";
import sportCategory from "../assets/sportCategory.png";
import virtualworldsCategory from "../assets/virtualworldsCategory.png";




export default function BrowseCategories() {
  return (
    <div className='bg-[#2B2B2B] text-start px-20 text-white sans py-10'>
        <p className='text-3xl tracking-[-0.04em]'>Browse Categories</p>
        <div className='flex justify-center gap-5 mt-8'>
            <Category 
                img={artCategory}
                category="Art"
            />
            <Category 
                img={collectiblesCategory}
                category="Collectibles"
            />
            <Category 
                img={musicCategory}
                category="Music"
            />
            <Category 
                img={photographyCategory}
                category="Photography"
            />
        </div>

        <div className='flex justify-center gap-5 mt-6'>
            <Category 
                img={videoCategory}
                category="Video"
            />
            <Category 
                img={utilityCategory}
                category="Utility"
            />
            <Category 
                img={sportCategory}
                category="Sport"
            />
            <Category 
                img={virtualworldsCategory}
                category="Virtual Worlds"
            />
        </div>
    </div>
  )
}
