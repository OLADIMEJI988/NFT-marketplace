import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainImg from "../assets/mainImg.png";

import Header from '../components/Header';
import Footer from '../components/Footer';

import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const handleLogin = () => {
    if (username && email && password) {
      sessionStorage.setItem('username', username);
      setShowPopup(true);

      setTimeout(() => {
        setShowPopup(false);
        navigate('/');
      }, 2000);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
      <Header />
      <div className='flex bg-[#2B2B2B] justify-center sans text-white text-start gap-14'>
        <img className='h-[500px]' src={mainImg} alt="" />
        <div className='w-72 flex flex-col justify-center'>
          <p className='text-4xl'>Log In</p>
          <p className='font-light text-sm tracking-wide mt-3'>Welcome Back! Enter Your Details And Start Creating, Collecting And Selling NFTs.</p>
          <div className='mt-4 text-sm'>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='py-3 pl-5 pr-9 rounded-xl outline-none border-none my-3 text-black w-72 placeholder:text-[#2B2B2B]'
              type="text"
              placeholder='Username'
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='py-3 pl-5 pr-9 rounded-xl outline-none border-none text-black w-72 placeholder:text-[#2B2B2B]'
              type="text"
              placeholder='Email Address'
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='py-3 pl-5 pr-9 rounded-xl outline-none border-none my-3 text-black w-72 placeholder:text-[#2B2B2B]'
              type="password"
              placeholder='Password'
            />
          </div>
          <button
            onClick={handleLogin}
            className='flex items-center w-72 mt-5 text-sm bg-[#A259FF] py-3 px-[30px] rounded-xl gap-[5px] cursor-pointer justify-center hoverEffect transition'>
            <p className='text-[14px] tracking-wide sans text-white'>Log In</p>
          </button>
        </div>
      </div>
      <Footer />

      {/* Popup Overlay */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg text-lg font-semibold">
            Welcome! {username}
          </div>
        </div>
      )}
    </>
  );
}