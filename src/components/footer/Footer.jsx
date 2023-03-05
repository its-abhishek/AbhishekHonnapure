import React from 'react'
import "./footer.css"
import { FaFacebookF,FaGithub } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { GrLinkedinOption } from 'react-icons/gr'
import { SiTwitter } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>ABHISHEK HONNAPURE</a>
      <div className='sub-text'>
        <small>Student at PES University, Bangalore, Karnataka, India</small>
      </div>
      <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Skills</a></li>
        <li><a href='#services'>Experience</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href='https://www.linkedin.com/in/abhishek-honnapure-547636232/' target='_blank' rel="noreferrer"><GrLinkedinOption/></a>
        <a href='https://github.com/its-abhishek' target='_blank' rel="noreferrer"><FaGithub/></a>
        <a href='https://www.instagram.com/_its__abhi__7/' target='_blank' rel="noreferrer"><FiInstagram/></a>
        <a href='https://twitter.com/honnapure' target='_blank' rel="noreferrer"><SiTwitter/></a>
        <a href='https://www.facebook.com/abhi.honnapure' target='_blank' rel="noreferrer"><FaFacebookF/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; Abhishek Honnapure - 2022 . Source code under MIT License</small>
      </div>
    </footer>
  )
}

export default Footer
