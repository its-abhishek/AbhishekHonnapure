import React from 'react'
import CTA from './CTA'
import "./header.css"
import ME from '../../assets/me.png'
import HeaderSocials from './HeaderSocials'
import {BsMouse} from 'react-icons/bs'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
      <h5>Hello I'm</h5>
      <h1>Abhishek Honnapure</h1>
      <h5 className="text-light">Fullstack Developer</h5>
      <CTA />
      <HeaderSocials/>
      <div className="me">
        <img src={ME}alt="me" />
      </div>
        <a href="#contact" className='scroll__down'>Scroll Down<BsMouse className='mouse__down'/></a>
      </div>
    </header>
  )
}

export default Header
