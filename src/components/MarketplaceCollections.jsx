import React from 'react';
import MarketNfts from './MarketNfts';

export default function MarketplaceCollections({ nfts }) {
  return (
    <>
        <div className='flex justify-center'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-8 lg:px-16'>
            {nfts.map((nft, index) => (
                <MarketNfts
                key={index}
                mainimg={nft.mainimg}
                title={nft.title}
                creatorimg={nft.creatorimg}
                creatorname={nft.creatorname}
                />
            ))}
            </div>
        </div>
    </>
    
  );
}
