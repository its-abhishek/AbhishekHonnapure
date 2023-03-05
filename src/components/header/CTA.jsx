import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
      <a data-aos="zoom-in-right" href={CV} Download class='btn'>Download CV</a>
      <a data-aos="zoom-in-left" href="#contact" class='btn btn-primary'>Let's Talk</a>
    </div>
  )
}

export default CTA
