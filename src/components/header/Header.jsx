import React from "react";
import CTA from "./CTA";
import "./header.css";
import ME from "../../assets/me.png";
import HeaderSocials from "./HeaderSocials";
import { BsMouse } from "react-icons/bs";

const Header = () => {
  return (
    <header>
      <div data-aos="zoom-in-down" className="container header__container">
        <div className="header__navbar">
          <ul className="permalinks">
            <div className="header__main">
              <h1>Abhishek Honnapure</h1>
            </div>
            <li>
              <a href="#" className="active-link">
                Home
              </a>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
            <li>
              <a href="#experience">Skills</a>
            </li>
            <li>
              <a href="#services">Experience</a>
            </li>
            <li>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li>
              <a href="#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
        <div data-aos="zoom-in-right" className="header__container-text1">
          <h1>Hello I'm</h1>
        </div>
        <div data-aos="zoom-in-right" className="header__container-text2">
          <h1>Abhishek</h1>
        </div>
        <div data-aos="zoom-in-right" className="header__container-text3">
          <h5 className="text-light">Fullstack Developer</h5>
        </div>
        <div className="header__container-text4">
          <h5>
            A tech enthisiast and interested in reaching peep's<br></br> to
            share thoughts and learn somthing new.
          </h5>
        </div>
        <div className="header__container-text5">
          <h5>CSE Student @ PES University</h5>
        </div>
        <CTA />
        <HeaderSocials />
        <div data-aos="fade-left" className="me">
          <img src={ME} alt="me" />
        </div>
        <a href="#contact" className="scroll__down">
          Scroll Down
          <BsMouse className="mouse__down" />
        </a>
      </div>
    </header>
  );
};

export default Header;
