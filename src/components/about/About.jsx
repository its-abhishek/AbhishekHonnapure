import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'

const About = () => {
  return (
    <section id='about'>
      <h5 data-aos="flip-down">Get To Know</h5>
      <h2 data-aos="flip-down">About Me</h2>

      <div className='container about__container'>
        <div data-aos="fade-up" className='about__me'>
          <div className='about__me-image'>
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div data-aos="fade-up" className='about__content'>
          <p>
            I am a second year undergraduate student of the <span style={{ color: "#4db5ff" }}>Department</span> of Computer Science and Engineering, <span style={{ color: "#4db5ff" }}>PES University, Banglore</span>, India.<br /> I was born in Bidar, Karnataka.<br /><br />

            I was fortunate enough to know from a young age that I wanted to be an engineer. The engineering way of thinking came naturally to me. What I didn't know was what type of engineer I wanted to be. When push came to shove, I chose Software Engineering.I wish to utilize my skills to do projects, entrepreneurship and to reach people in different platforms. I always look for platforms to develop my skill set and use the same for collaborative development.
          </p>
          <a data-aos="fade-up" href='#contact' className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
