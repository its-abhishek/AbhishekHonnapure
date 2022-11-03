import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {TfiTwitter} from 'react-icons/tfi'
import {BsInstagram} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
          <div className='contact__options'>
            <article className='contact__options'>
              <MdOutlineEmail/>
              <h5>Email</h5>
              <h5>abhihonnapure@gmail.com</h5>
              <a href='mailto:abhihonnapure@gmail.com' target='_blank'>Send a message</a>
            </article>
            <article className='contact__options'>
              <BsInstagram/>
              <h5>Instagram</h5>
              <h5>@_its__abhi__7</h5>
              <a href='https://www.instagram.com/_its__abhi__7/' target='_blank'>Send a message</a>
            </article>
            <article className='contact__options'>
              <TfiTwitter/>
              <h5>Twitter</h5>
              <h5>@honnapure</h5>
              <a href='https://twitter.com/honnapure/following' target='_blank'>Send a message</a>
            </article>
          </div>
          {/*End Of Contact section*/}
          <form action=''>

          </form>
      </div>
    </section>
  )
}

export default Contact
