import React from 'react'
import Header from '../components/common/Header'
import Hero from '../components/Hero'
import Background from '../assets/background.svg'
import GreenBanner from '../components/GreenBanner'
import Slider from '../components/Slider'
import HealthyMenu from '../components/HealthyMenu'
import WellnessBanner from '../components/WellnessBanner'
import BestCategories from '../components/BestCategories'

const Home = () => {
  return (
    <div className="relative w-screen m-0 py-0 lg:px-20 main">

      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 w-screen h-auto object-cover -z-10 "
      />
      <Header />
      <Hero />
      <div className='flex flex-col gap-4 border justify-between items-center my-20 w-screen lg:flex-row'>
        <Slider />
        <GreenBanner />
      </div>
      <HealthyMenu/>
      <WellnessBanner/>
      <BestCategories/>
    </div>
  )
}

export default Home