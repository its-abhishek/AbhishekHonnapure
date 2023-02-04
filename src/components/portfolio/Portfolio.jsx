import React from 'react'
import './portfolio.css'
import IMG1 from '../../assets/portfolio1.jpg'
import IMG2 from '../../assets/portfolio2.jpg'
import IMG3 from '../../assets/portfolio3.jpg'
import IMG4 from '../../assets/portfolio4.jpg'
// import IMG5 from '../../assets/portfolio5.png'
// import IMG6 from '../../assets/portfolio6.jpg'

// Don't use the images in the production

const data = [
  {
    id: 1,
    image: IMG1,
    title: 'Generating a Unique QR Code using Python',
    github: 'https://github.com/its-abhishek/Python-Project',
    demo: 'https://github.com/its-abhishek/Python-Project',
  },
  {
    id: 2,
    image: IMG2,
    title: 'Woring Process of ATM Machine Using C',
    github: 'https://github.com/its-abhishek/C-Projects',
    demo: 'https://github.com/its-abhishek/C-Projects'
  },
  {
    id: 3,
    image: IMG3,
    title: 'Note taking app built using MERN Stack',
    github: 'https://github.com/its-abhishek/mern-project',
    demo: 'https://github.com/its-abhishek/mern-project'
  },
  {
    id: 4,
    image: IMG4,
    title: 'Static E-Commerce website',
    github: 'https://github.com/its-abhishek/equinix-recruitment',
    demo: 'https://github.com/its-abhishek/equinix-recruitment'
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Works</h5>
      <h2>Portfolios</h2>

      <div className='container portfolio_container'>
        {
          data.map(({id,image,title,github,demo}) =>
          <article key={id} className='portfolio_item'>
          <div className='portfolio_item-image'>
          <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio_item-cta'>  
            <a href={github} target={'_blank'} className='btn'>GitHub</a>
            <a href={demo} target={'_blank'} className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
          )
        }
      </div>
    </section>
  )
}

export default Portfolio