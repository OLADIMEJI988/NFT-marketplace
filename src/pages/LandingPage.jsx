import React from 'react'
import Header from '../components/Header'
import Hero from '../components/Hero'
import TrendCollection from '../components/TrendCollection'
import TopCreators from '../components/TopCreators'
import BrowseCategories from '../components/BrowseCategories'
import DiscoverNFT from '../components/DiscoverNFT'
import HowItWorks from '../components/HowItWorks'
import Subscription from '../components/Subscription'
import Footer from '../components/Footer'
// import Test from '../components/Test'

export default function LandingPage() {
  return (
    <>
      {/* <Test /> */}
      <Header />
      <Hero />
      <TrendCollection />
      <TopCreators />
      <BrowseCategories />
      <DiscoverNFT />
      <HowItWorks />
      <Subscription />
      <Footer />
    </>

  )
}
