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
    <div className='bg-[#2B2B2B] text-white sans py-10 px-5 sm:px-10 md:px-20'>
      <p className='text-3xl tracking-[-0.04em] text-center md:text-start'>Browse Categories</p>

       <div className='flex justify-center'>
          <div className='mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-7 sm:gap-6 md:gap-8 justify-items-center'>
            <Category img={artCategory} category="Art" />
            <Category img={collectiblesCategory} category="Collectibles" />
            <Category img={musicCategory} category="Music" />
            <Category img={photographyCategory} category="Photography" />
            <Category img={videoCategory} category="Video" />
            <Category img={utilityCategory} category="Utility" />
            <Category img={sportCategory} category="Sport" />
            <Category img={virtualworldsCategory} category="Virtual Worlds" />
          </div>
       </div>
    </div>
  )
}
