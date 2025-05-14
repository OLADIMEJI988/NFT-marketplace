// src/components/Collections.js
import React from 'react';
import MarketNfts from './MarketNfts';

export default function MarketplaceCollections({ nfts }) {
  const chunked = [];
  for (let i = 0; i < nfts.length; i += 3) {
    chunked.push(nfts.slice(i, i + 3));
  }

  return (
    <>
      {chunked.map((chunk, i) => (
        <div key={i} className='flex justify-center gap-6'>
          {chunk.map((nft, index) => (
            <MarketNfts
              key={index}
              mainimg={nft.mainimg}
              title={nft.title}
              creatorimg={nft.creatorimg}
              creatorname={nft.creatorname}
            />
          ))}
        </div>
      ))}
    </>
  );
}
