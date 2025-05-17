import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainImg from "../assets/mainImg.png";
import successicon from "../assets/successicon.png";

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
      }, 4000);
    } else {
      alert('Please fill in all fields');
    }
  };

  return (
    <>
      <Header />

      <div className='flex flex-col lg:flex-row items-center justify-center bg-[#2B2B2B] text-white sans text-start px-5 sm:px-10 lg:px-20 pt-5 pb-10 sm:pt-10 gap-10'>
        <img className='w-[300px] sm:w-[400px] md:w-[450px] lg:h-[500px] object-contain' src={mainImg} alt="Login Visual" />
        
        <div className='w-full max-w-md flex flex-col justify-center'>
          <p className='text-3xl sm:text-4xl'>Log In</p>
          <p className='font-light text-sm tracking-wide mt-3'>
            Welcome Back! Enter Your Details And Start Creating, Collecting And Selling NFTs.
          </p>

          <div className='mt-4 text-sm flex flex-col gap-3'>
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className='py-3 pl-5 pr-4 rounded-xl outline-none border-none text-black placeholder:text-[#2B2B2B]'
              type="text"
              placeholder='Username'
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='py-3 pl-5 pr-4 rounded-xl outline-none border-none text-black placeholder:text-[#2B2B2B]'
              type="email"
              placeholder='Email Address'
            />
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='py-3 pl-5 pr-4 rounded-xl outline-none border-none text-black placeholder:text-[#2B2B2B]'
              type="password"
              placeholder='Password'
            />
          </div>

          <button
            onClick={handleLogin}
            className='mt-5 text-sm bg-[#A259FF] py-3 px-6 rounded-xl cursor-pointer hoverEffect transition w-full text-white text-center'>
            <p className='text-[14px] tracking-wide sans'>Log In</p>
          </button>
        </div>
      </div>

      <Footer />

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="sans bg-[#2B2B2B] text-start w-96 h-44 text-white px-6 py-4 rounded-xl shadow-lg text-lg">
            <img className='h-12' src={successicon} alt="Success Icon" />
            <p className='tracking-wide my-2 text-xl'>Login Successful!</p>
            <p className='text-sm tracking-wide font-light'>
              Welcome Back {username}! We're glad to have you back onboard.
            </p>
          </div>
        </div>
      )}
    </>
  );
}
