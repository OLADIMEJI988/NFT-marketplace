import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import mainImg from "../assets/mainImg.png";

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
    }, 2000);
  };

  return (
    <>
      <AccHeader />

      {showPopup && (
            <div className="fixed inset-0 bg-black bg-opacity-40 backdrop-blur-sm flex items-center justify-center z-50">
                <div className="bg-green-600 text-white px-6 py-4 rounded-xl shadow-lg text-lg font-semibold">
                  Welcome! {form.username}
                </div>
            </div>
       )}


      <div className='flex bg-[#2B2B2B] justify-center sans text-white text-start gap-14'>
        <img className='h-[500px]' src={mainImg} alt="" />
        <div className='w-80 flex flex-col justify-center'>
          <p className='text-4xl'>Create account</p>
          <p className='font-light text-sm tracking-wide w-72 mt-3'>
            Welcome! Enter Your Details And Start Creating, Collecting And Selling NFTs.
          </p>
          <div className='mt-4 text-sm'>
            <input
              name="username"
              onChange={handleChange}
              value={form.username}
              className='py-3 pl-5 pr-9 rounded-xl outline-none border-none my-3 text-black w-72 placeholder:text-[#2B2B2B]'
              type="text"
              placeholder='Username'
            />
            <input
              name="email"
              onChange={handleChange}
              value={form.email}
              className='py-3 pl-5 pr-9 rounded-xl outline-none border-none text-black w-72 placeholder:text-[#2B2B2B]'
              type="text"
              placeholder='Email Address'
            />
            <input
              name="password"
              onChange={handleChange}
              value={form.password}
              className='py-3 pl-5 pr-9 rounded-xl outline-none border-none my-3 text-black w-72 placeholder:text-[#2B2B2B]'
              type="password"
              placeholder='Password'
            />
            <input
              name="confirmPassword"
              onChange={handleChange}
              value={form.confirmPassword}
              className='py-3 pl-5 pr-9 rounded-xl outline-none border-none text-black w-72 placeholder:text-[#2B2B2B]'
              type="password"
              placeholder='Confirm Password'
            />
          </div>
          <button onClick={handleSubmit} className='flex items-center w-72 mt-5 text-sm bg-[#A259FF] py-3 px-[30px] rounded-xl gap-[5px] cursor-pointer justify-center hoverEffect transition'>
            <p className='text-[13px] tracking-wide sans text-white'>Create Account</p>
          </button>
        </div>
      </div>
      <Footer />
    </>
  );
}
