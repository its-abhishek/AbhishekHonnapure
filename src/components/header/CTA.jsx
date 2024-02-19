import React from 'react'
import CV from '../../assets/Abhishek_Honnapure.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a data-aos="fade-up" href={CV} Download class='btn'>Download CV</a>
      <a data-aos="fade-up" href="#contact" class='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
