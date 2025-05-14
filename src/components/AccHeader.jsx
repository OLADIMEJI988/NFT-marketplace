import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import User from "../assets/User.png";

import './Header.css';

export default function AccHeader() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleLoginClick = () => {
    if (!username) {
      navigate('/Login');
    }
  };

  return (
    <div className='bg-[#2B2B2B] py-5 flex items-center justify-between px-10'>
      <Link to="/">
        <img className='h-5' src={logo} alt="logo" />
      </Link>

      <div className='flex text-white gap-9 text-[13px] items-center sans'>
        <Link to="/NFTMarketplace">
          <p className='cursor-pointer hoverEffectText transition'>Marketplace</p>
        </Link>

        <Link to="/CreatorRankings">
          <p className='cursor-pointer hoverEffectText transition'>Rankings</p>
        </Link>
        
        <Link to="/ConnectWallet">
          <p className='cursor-pointer hoverEffectText transition'>Connect a wallet</p>
        </Link>

        <button
          className='flex items-center text-sm bg-[#A259FF] py-3 px-5 rounded-xl gap-[5px] hoverEffectBtn transition'
          onClick={handleLoginClick}
          disabled={!!username} // disables if username exists
        >
          <img className='h-[15px]' src={User} alt="user" />
          <p className='-mt-[2px]'>{username ? username : 'Login'}</p>
        </button>
      </div>
    </div>
  );
}
