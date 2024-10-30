import React from 'react'
import chevrondDown from '../../assets/chevron-down.svg'
import bellIcon from '../../assets/bell.svg'

const Header = () => {
  const isActive = (path) => "home" === path;
  return (
    <div className='nav'>
        <div className='navlinks-con'> 
                <li className={`${isActive("home")
                ? "bg-secondary text-white rounded-full"
                : "hover:cursor-pointer"
                }`}><a href="/">Home</a></li>
                <li><a href="/about">Menu</a></li>
                <li><a href="/about">About</a></li>
                <div className='flex '>
                    <div>Recipes</div>
                    <img src={chevrondDown} alt="" />
                </div>
        </div>
        <div>
            <p className='title'>FreshBowl</p>
        </div>
        <div className='nav-right'>
          <button className='contact-button'>Contact</button>
          <div className='notification-icon'>
          <img src={bellIcon} alt="" />
          </div>
        </div>
    </div>
  )
}

export default Header