import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {SiTwitter} from 'react-icons/si'
const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.linkedin.com/in/abhishek-honnapure-547636232/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
      <a href="https://github.com/its-abhishek" target="_blank" rel="noreferrer"><FaGithub/></a>
      <a href="https://twitter.com/honnapure" target="_blank" rel="noreferrer"><SiTwitter/></a>
    </div>
  )
}

export default HeaderSocials
