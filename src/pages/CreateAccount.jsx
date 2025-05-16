import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainImg from "../assets/mainImg.png";
import successicon from "../assets/successicon.png";

import AccHeader from '../components/AccHeader';
import Footer from '../components/Footer';

import './CreateAccount.css';

export default function CreateAccount() {
  const [form, setForm] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = () => {
    const { username, email, password, confirmPassword } = form;

    if (!username || !email || !password || !confirmPassword) {
      alert("Please fill out all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    sessionStorage.setItem("username", username);

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/');
    }, 4000);
  };

  return (
    <>
      <AccHeader />

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
          <div className="sans bg-[#2B2B2B] text-start w-96 h-44 text-white px-6 py-4 rounded-xl shadow-lg text-lg">
            <img className='h-12' src={successicon} alt="Success icon" />
            <p className='tracking-wide my-2 text-xl'>Account Created Successfully!</p>
            <p className='text-sm tracking-wide font-light'>Welcome {form.username}! We're glad to have you onboard.</p>
          </div>
        </div>
      )}

      <div className='flex flex-col lg:flex-row items-center justify-center bg-[#2B2B2B] text-white sans text-start px-5 sm:px-10 lg:px-20 py-10 gap-10'>
        <img className='w-[300px] sm:w-[400px] md:w-[450px] lg:h-[500px] object-contain' src={mainImg} alt="Create Account Visual" />
        
        <div className='w-full max-w-md flex flex-col justify-center'>
          <p className='text-3xl sm:text-4xl'>Create account</p>
          <p className='font-light text-sm tracking-wide mt-3'>
            Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs.
          </p>

          <div className='mt-4 text-sm flex flex-col gap-3'>
            <input
              name="username"
              onChange={handleChange}
              value={form.username}
              className='py-3 pl-5 pr-4 rounded-xl outline-none border-none text-black placeholder:text-[#2B2B2B]'
              type="text"
              placeholder='Username'
            />
            <input
              name="email"
              onChange={handleChange}
              value={form.email}
              className='py-3 pl-5 pr-4 rounded-xl outline-none border-none text-black placeholder:text-[#2B2B2B]'
              type="email"
              placeholder='Email Address'
            />
            <input
              name="password"
              onChange={handleChange}
              value={form.password}
              className='py-3 pl-5 pr-4 rounded-xl outline-none border-none text-black placeholder:text-[#2B2B2B]'
              type="password"
              placeholder='Password'
            />
            <input
              name="confirmPassword"
              onChange={handleChange}
              value={form.confirmPassword}
              className='py-3 pl-5 pr-4 rounded-xl outline-none border-none text-black placeholder:text-[#2B2B2B]'
              type="password"
              placeholder='Confirm Password'
            />
          </div>

          <button
            onClick={handleSubmit}
            className='mt-5 text-sm bg-[#A259FF] py-3 px-6 rounded-xl gap-2 cursor-pointer justify-center hoverEffect transition w-full text-center text-white'
          >
            <p className='text-[13px] tracking-wide sans'>Create Account</p>
          </button>
        </div>
      </div>

      <Footer />
    </>
  );
}
