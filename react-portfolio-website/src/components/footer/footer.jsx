import React from 'react'
import "./footer.css"
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {FaGithub} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer_logo'>EGATOR</a>

      <ul className='permalink'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className='footer__socials'>
        <a href=''><FaFacebookF/></a>
        <a href=''><FiInstagram/></a>
        <a href=''><FaGithub/></a>
      </div>
      <div className='footer__copyright'>
        <small>&copy; EGATOR Tutorials.All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer
