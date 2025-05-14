import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import './index.css'
import LandingPage from './pages/LandingPage'
import CreateAccount from './pages/CreateAccount'
import ConnectWallet from './pages/ConnectWallet'
import ArtistPage from './pages/ArtistPage'

import ScrollToTop from './components/ScrollToTop';
import Login from './pages/Login'
import AboutNFT from './pages/AboutNFT'
import NFTMarketplace from './pages/NFTMarketplace'


function App() {
  return (
    <BrowserRouter>
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/ConnectWallet" element={<ConnectWallet />} />
        <Route path="/ArtistPage" element={<ArtistPage />} />
        <Route path="/AboutNFT" element={<AboutNFT />} />
        <Route path="/NFTMarketplace" element={<NFTMarketplace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
