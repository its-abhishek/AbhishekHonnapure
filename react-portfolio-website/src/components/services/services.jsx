import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork } from "react-icons/md";
import { MdVolunteerActivism } from "react-icons/md";
import { BiCalendar } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>My Qualifications & Experience</h5>
      <h2>Experience</h2>

      <div className="container services__container">
        <article className="service">
          <div className="service__head">
            <h3><MdOutlineWork className="service__head-icons"/>Work</h3>
          </div>

          <ul className="service__list">
          <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{fontWeight:"bold"}}>Ninja Entrepreneur</span> <br/>Coding Ninjas<br/><span style={{fontWeight:"bold"}}>Internship</span><br/><span style={{opacity: "0.7"}}><BiCalendar/> April 2022 - September 2022</span></p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{fontWeight:"bold"}}>Campus Ambassador</span> <br/>Acmegrade<br/><span style={{fontWeight:"bold"}}>Internship</span><br/><span style={{opacity:"0.7"}}><BiCalendar/> Jully 2022 - September 2022</span></p>
            </li>
          </ul>
        </article>
        {/* end of UI/UX */}
        <article className="service" /*style={{width:"25rem"}}*/>
          <div className="service__head">
            <h3><FaGraduationCap className="service__head-icons"/>Education</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{fontWeight:"bold"}}>B.Tech, CSE </span><br/> PES University,<br/> Bangalore <br/><span style={{opacity: "0.7"}}><BiCalendar/> 2021 - Present</span> </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{fontWeight:"bold"}}>Inter 1st and 2nd year</span> <br/>Sri Chaitanya Junior College, Hyderabad<br/><span style={{opacity: "0.7"}}><BiCalendar/> 2019 - 2021</span></p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{fontWeight:"bold"}}>5th-10th Grad</span> <br/> Raveendra High School,<br/> Bidar<br/><span style={{opacity: "0.7"}}><BiCalendar/> 2012 - 2018</span></p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{fontWeight:"bold"}}>1st-4th Grad</span> <br/> Ekalavya Primary School,<br/> Bidar<br/><span style={{opacity: "0.7"}}><BiCalendar/> 2008 - 2012</span></p>
            </li>
          </ul>
        </article>
        {/* end of web-dev */}
        <article className="service">
          <div className="service__head">
            <h3><MdVolunteerActivism className="service__head-icons"/>Volunteering</h3>
          </div>

          <ul className="service__list">
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> Lorem, ipsum dolor sit amet consectetur elit.</p>
            </li>
          </ul>
        </article>
        {/* end of content curetion */}
      </div>
    </section>
  );
};

export default Services;
