import React from 'react'
import CTA from './CTA'
import "./header.css"

const Header = () => {
  return (
    <header>
      <div className="container header_container">
      <h5>Hello I'm</h5>
      <h1>Abhishek Honnapure</h1>
      <h5 className="text-align">Fullstack Developer</h5>
      <CTA />
      </div>
    </header>
  )
}

export default Header
