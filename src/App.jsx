import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About' 
import Experience from './components/skills/Skills' 
import Services from './components/education/Education' 
import Portfolio from './components/portfolio/Portfolio'
import Awards from './components/events/Events'
import Contact from './components/contact/Contact' 
import Footer from './components/footer/Footer' 

const App = () => {
  return (
    <>
        <Header />
        <Nav />
        <About />
        <Experience />
        <Services />
        <Portfolio />
        <Awards />
        <Contact />
        <Footer />
    </>
  )
}

export default App
