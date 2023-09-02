import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiTwitter } from 'react-icons/si'
import { RiInstagramFill } from 'react-icons/ri'
const HeaderSocials = () => {
  return (
    <div data-aos="zoom-in-down" className='header__socials'>
      <a href="https://www.linkedin.com/in/abhishek-honnapure-547636232/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/its-abhishek" target="_blank" rel="noreferrer"><FaGithub /></a>
      <a href="https://twitter.com/honnapure" target="_blank" rel="noreferrer"><SiTwitter /></a>
      <a href="https://www.instagram.com/abhishek_honnapure/" target="_blank" rel="noreferrer"><RiInstagramFill /></a>
    </div>
  )
}

export default HeaderSocials
