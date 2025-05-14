import React, { useState, useEffect } from 'react';
import PayOut from './PayOut';

export default function MarketNfts({ mainimg, title, creatorimg, creatorname }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [nftsInCart, setNftsInCart] = useState([]);

  const NFT_PRICE = 1.63;

  const syncCartFromStorage = () => {
    const existing = JSON.parse(sessionStorage.getItem("nftsInCart")) || [];
    setNftsInCart(existing);
  };

  const addNFTToCart = (nft) => {
    const existing = JSON.parse(sessionStorage.getItem("nftsInCart")) || [];

    // preventing duplicates
    const alreadyExists = existing.some(item => item.title === nft.title);
    if (alreadyExists) return;

    const updated = [...existing, nft];
    sessionStorage.setItem("nftsInCart", JSON.stringify(updated));
    setNftsInCart(updated);
  };

  const removeNFTFromCart = (indexToRemove) => {
    const updated = nftsInCart.filter((_, i) => i !== indexToRemove);
    sessionStorage.setItem("nftsInCart", JSON.stringify(updated));
    setNftsInCart(updated);
  };

  const openPopup = () => {
    const newNFT = { title, mainimg, price: NFT_PRICE };
    addNFTToCart(newNFT);
    setShowModal(true);
    setTimeout(() => setIsOpen(true), 10);
  };

  const closePopup = () => {
    setIsOpen(false);
    setTimeout(() => setShowModal(false), 300);
  };

  const getTotalPrice = () => {
    return nftsInCart.reduce((sum, nft) => sum + parseFloat(nft.price), 0).toFixed(2);
  };

  useEffect(() => {
    syncCartFromStorage();
  }, []);

  return (
    <>
      {showModal && (
        <div
          className={`fixed inset-0 z-50 flex text-start transition-all duration-300 ease-in-out ${
            isOpen
              ? 'bg-black bg-opacity-40 backdrop-blur-sm'
              : 'bg-black bg-opacity-0 backdrop-blur-none'
          }`}
        >
          <div
            className={`bg-[#2B2B2B] text-white w-full px-6 py-4 rounded-t-xl shadow-lg font-semibold mt-[20vh] border-t border-[#2B2B2B] transform transition-transform duration-300 ease-out ${
              isOpen ? 'translate-y-0' : 'translate-y-full'
            }`}
          >
            <div className="flex h-full">
              {/* checkout section */}
              <div className="w-1/2 pr-4">
                <div className='mb-4'>
                  <p className='text-2xl sans'>
                    Checkout <span className="text-lg ml-1">({nftsInCart.length})</span>
                  </p>
                </div>

                {/* cart list */}
                <div className="space-y-4 max-h-[300px] overflow-y-auto mt-5">
                  {nftsInCart.map((nft, index) => (
                    <div key={index} className="flex items-center justify-between gap-4">
                      <div className="flex items-center gap-4">
                        <span className="text-white spaceMono text-sm">{index + 1}.</span>
                        <img
                          src={nft.mainimg}
                          alt={nft.title}
                          className="w-12 h-12 object-cover rounded-lg"
                        />
                        <p className="text-white text-sm spaceMono">{nft.title}</p>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="text-white spaceMono text-sm">{nft.price} ETH</p>
                        <button
                          onClick={() => removeNFTFromCart(index)}
                          className="text-red-400 text-sm hover:text-red-600 transition mr-5"
                          title="Remove from cart"
                        >
                          ✖️
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                {/* total price */}
                <div className="mt-4 pt-4 border-t border-[#3D3D3D] text-end mr-10">
                  <p className="text-lg font-semibold spaceMono">
                    Total: {getTotalPrice()} ETH
                  </p>
                </div>
              </div>

              {/* Divider */}
              <div className="w-[1px] bg-[#444] mx-2"></div>

              {/* payment method section */}
              <div className="w-1/2 pl-4">
                <div className='flex justify-between items-center mb-4'>
                    <p className="text-gray-300 text-sm tracking-wide">PAYMENT METHOD</p>
                    <button className="text-xl font-bold hoverEffectBtn transition" onClick={closePopup}>✖️</button>
                </div>
                
                <PayOut />
              </div>

            </div>
          </div>
        </div>
      )}

      <div className='mt-5 cursor-pointer relative group'>
        <img className='h-60 rounded-t-3xl' src={mainimg} alt="" />
        <div className='text-start bg-[#2B2B2B] py-4 px-6 text-white sans rounded-b-[13px]'>
          <p className='text-[16px]'>{title}</p>
          <div className='flex items-center gap-2 mt-2'>
            <img className='h-5' src={creatorimg} alt="" />
            <p className='text-xs font-light spaceMono tracking-wide'>{creatorname}</p>
          </div>
          <div className='flex mt-5 justify-between'>
            <div className='spaceMono'>
              <p className='text-[#858584] text-[13px]'>Price</p>
              <p>{NFT_PRICE} ETH</p>
            </div>
            <div className='spaceMono'>
              <p className='text-[#858584] text-[13px]'>Last Sale</p>
              <p>0.33 wETH</p>
            </div>
          </div>
        </div>

        <button
          className="absolute bottom-4 left-5 right-5 transform translate-y-10 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 bg-[#A259FF] p-4 rounded-xl flex justify-between items-center spaceMono"
          onClick={openPopup}
        >
          <p className="text-white font-bold text-sm">Buy Now</p>
          <p className="text-white font-semibold text-sm">{NFT_PRICE} ETH</p>
        </button>
      </div>
    </>
  );
}
