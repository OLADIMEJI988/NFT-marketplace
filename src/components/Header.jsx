import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import logo from "../assets/logo.png";
import User from "../assets/User.png";

export default function Header() {
  const navigate = useNavigate();
  const [username, setUsername] = useState(null);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const storedUsername = sessionStorage.getItem('username');
    if (storedUsername) {
      setUsername(storedUsername);
    }
  }, []);

  const handleSignUpClick = () => {
    if (!username) {
      navigate('/CreateAccount');
    }
  };

  return (
    <header className="bg-[#2B2B2B] text-white py-4 px-6 sm:px-10">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img className="h-5 sm:h-6" src={logo} alt="logo" />
        </Link>

        {/* Mobile menu */}
        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {menuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`${
            menuOpen ? 'flex' : 'hidden'
          } absolute sm:static top-14 left-0 w-full sm:w-auto bg-[#2B2B2B] sm:bg-transparent flex-col sm:flex-row sm:flex items-center gap-6 sm:gap-9 text-[13px] sm:text-sm z-50 px-6 sm:px-0 py-4 sm:py-0`}
        >
          <Link to="/NFTMarketplace" onClick={() => setMenuOpen(false)}>
            <p className="cursor-pointer hover:text-[#A259FF] transition mt-1">Marketplace</p>
          </Link>
          <Link to="/CreatorRankings" onClick={() => setMenuOpen(false)}>
            <p className="cursor-pointer hover:text-[#A259FF] transition">Rankings</p>
          </Link>
          <Link to="/ConnectWallet" onClick={() => setMenuOpen(false)}>
            <p className="cursor-pointer hover:text-[#A259FF] transition">Connect a wallet</p>
          </Link>
          <button
            className="flex items-center text-sm bg-[#A259FF] py-2 px-4 sm:py-3 sm:px-5 rounded-xl gap-2 hover:bg-[#8F44FF] transition"
            onClick={handleSignUpClick}
            disabled={!!username}
          >
            <img className="h-4" src={User} alt="user" />
            <span>{username ? username : 'Sign Up'}</span>
          </button>
        </nav>
      </div>
    </header>
  );
}
