import React, { useState } from 'react';
import metamask from "../assets/metamask.png";
import walletconnect from "../assets/walletconnect.png";
import coinbase from "../assets/coinbase.png";

import './PayOut.css';

export default function PayOut() {
  const [selectedWallet, setSelectedWallet] = useState(null);

  const wallets = [
    { id: 'metamask', label: 'Metamask', icon: metamask },
    { id: 'walletconnect', label: 'Wallet Connect', icon: walletconnect },
    { id: 'coinbase', label: 'Coinbase', icon: coinbase },
  ];

  return (
    <>
        <div className="mt-7 text-sm space-y-5">
        {wallets.map((wallet) => (
            <button
            key={wallet.id}
            onClick={() => setSelectedWallet(wallet.id)}
            className={`flex items-center justify-between border border-[#A259FF] bg-transparent py-[22px] px-6 w-full hover transition rounded-md transition ${
                selectedWallet === wallet.id ? 'bg-[#5c5a5a46]' : ''
            }`}
            >
            <div className="flex items-center gap-3">
                <img className="h-6" src={wallet.icon} alt={wallet.label} />
                <p className="text-[15px]">{wallet.label}</p>
            </div>
            {/* Circle */}
            <div
                className={`w-5 h-5 rounded-full border-2 ${
                selectedWallet === wallet.id ? 'border-[#A259FF] bg-transparent' : 'border-gray-400'
                }`}
            ></div>
            </button>
        ))}
        </div>

        <div className='flex mt-10'>
            <div className='ml-auto'>
                <button className='py-[10px] px-5 border border-[#A259FF] rounded-lg hoverEffect transition tracking-wide'>Confirm</button>
            </div>
        </div>
    </>
    
  );
}
