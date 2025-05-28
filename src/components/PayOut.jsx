import React, { useState } from 'react';
import metamask from "../assets/metamask.png";
import walletconnect from "../assets/walletconnect.png";
import coinbase from "../assets/coinbase.png";

import './PayOut.css';

export default function PayOut() {
  const [selectedWallet, setSelectedWallet] = useState(null);

  const wallets = [
    { id: 'metamask', label: 'Metamask', icon: metamask, link: 'https://metamask.io' },
    { id: 'walletconnect', label: 'Wallet Connect', icon: walletconnect, link: 'https://walletguide.walletconnect.network/' },
    { id: 'coinbase', label: 'Coinbase', icon: coinbase, link: 'https://www.coinbase.com/wallet' },
  ];

  const handleConfirm = () => {
    const selected = wallets.find(wallet => wallet.id === selectedWallet);
    if (selected) {
      window.location.href = selected.link;
    } else {
      alert("Please select a wallet first.");
    }
  };

  return (
    <>
      <div className="mt-7 text-sm space-y-5">
      {wallets.map((wallet) => (
            <button
                key={wallet.id}
                onClick={() => setSelectedWallet(wallet.id)}
                className={`group flex items-center justify-between border py-[22px] px-6 w-full rounded-md transition 
                ${selectedWallet === wallet.id ? 'bg-[#A259FF] border-[#A259FF] text-white' : 'bg-transparent border-[#A259FF]'}
                hover:bg-[#A259FF]/20`}
            >
          
                <div className="flex items-center gap-3">
                <img className="h-6" src={wallet.icon} alt={wallet.label} />
                <p className="text-[15px]">{wallet.label}</p>
                </div>
                <div
                className={`w-5 h-5 rounded-full border-2 transition 
                    ${selectedWallet === wallet.id ? 'border-white' : 'border-[#A259FF]'} 
                    group-hover:border-white`}
                ></div>
            </button>
       ))}

      </div>

      <div className='flex mt-10'>
        <div className='ml-auto'>
          <button 
            onClick={handleConfirm}
            className='py-[10px] px-5 border border-[#A259FF] rounded-lg hoverEffect transition tracking-wide'>
            Confirm
          </button>
        </div>
      </div>
    </>
  );
}
