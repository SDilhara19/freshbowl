import React from 'react'
import arrow from '../assets/arrow.svg'

const WellnessBanner = () => {
  return (
    <div className='wellness relative'>
      <div className='flex flex-col px-20 h-full w-full justify-around gap-16'>
        <div >
          <div className='wellness-text'>Your Wellness. </div>
          <div className='wellness-text-2 '> Our Passion.</div>
        </div>
        <div className= 'transparent-card'>
          <div className='text'>
            <div>Golden Superfruit</div>
            <div>Delight Bowl</div>
            
          </div>
          <button className='contact-button'>
            <div className='order'>Order Now</div>
            <img src={arrow} alt="" />
          </button>
        </div>

      </div>
    </div>
  )
}

export default WellnessBanner