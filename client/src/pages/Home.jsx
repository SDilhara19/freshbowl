import React from 'react'
import Header from '../components/common/Header'
import Hero from '../components/Hero'
import Background from '../assets/background.svg'

const Home = () => {
  return (
    <div className="relative m-0 py-0 px-20 main">

      <img
        src={Background}
        alt="Background"
        className="absolute inset-0 w-screen h-auto object-cover -z-10 "
      />
      <Header />
      <Hero />

    </div>
  )
}

export default Home