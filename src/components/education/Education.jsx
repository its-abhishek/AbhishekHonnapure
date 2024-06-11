import React from "react";
import "./education.css";
import { BiCheck, BiCalendar } from "react-icons/bi";
import { FaGraduationCap } from "react-icons/fa";
import { MdOutlineWork, MdVolunteerActivism } from "react-icons/md";
import { HiBookOpen, HiOutlineBadgeCheck } from "react-icons/hi"

const Services = () => {
  return (
    <section id="experience">
      <h5 data-aos="fade-down">My Qualifications & Experience</h5>
      <h2 data-aos="fade-down">Experience</h2>

      <div className="container services__container">
        <article data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="500" className="service">
          <div className="service__head">
            <h3><MdOutlineWork className="service__head-icons" /> My Works</h3>
          </div>

          <ul className="service__list">
            <li>
              <HiOutlineBadgeCheck className="service__list-icon" />
              <p> <span style={{ fontWeight: "bold" }}>FullStack Developer</span> <br />PESU Venture Labs<br /><span style={{ fontWeight: "bold" }}>Internship</span><br /><span style={{ opacity: "0.7" }}><BiCalendar /> Mar 2023 - Dec 2023</span></p>
            </li>
            <li>
              <HiOutlineBadgeCheck className="service__list-icon" />
              <p> <span style={{ fontWeight: "bold" }}>FullStack Developer</span> <br />Abhaya Secure<br /><span style={{ fontWeight: "bold" }}>Internship</span><br /><span style={{ opacity: "0.7" }}><BiCalendar /> Mar 2023 - Dece 2023</span></p>
            </li>
            <li>
              <HiOutlineBadgeCheck className="service__list-icon" />
              <p> <span style={{ fontWeight: "bold" }}>Ninja Entrepreneur</span> <br />Coding Ninjas<br /><span style={{ fontWeight: "bold" }}>Internship</span><br /><span style={{ opacity: "0.7" }}><BiCalendar /> Apr 2022 - Sept 2022</span></p>
            </li>
            <li>
              <HiOutlineBadgeCheck className="service__list-icon" />
              <p> <span style={{ fontWeight: "bold" }}>Campus Ambassador</span> <br />Acmegrade<br /><span style={{ fontWeight: "bold" }}>Internship</span><br /><span style={{ opacity: "0.7" }}><BiCalendar /> Jul 2022 - Sept 2022</span></p>
            </li>
          </ul>
        </article>
        {/* end of UI/UX */}
        <article data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1000" className="service" /*style={{width:"25rem"}}*/>
          <div className="service__head">
            <h3><FaGraduationCap className="service__head-icons" />Education</h3>
          </div>

          <ul className="service__list">
            <li>
              <HiBookOpen className="service__list-icon" style={{ fontSize: "1.5rem" }} />
              <p> <span style={{ fontWeight: "bold" }}>B.Tech, CSE </span><br /> PES University,<br /> Bangalore <br /><span style={{ opacity: "0.7" }}><BiCalendar /> 2021 - Present</span> </p>
            </li>
            <li>
              <HiBookOpen className="service__list-icon" style={{ fontSize: "2rem" }} />
              <p> <span style={{ fontWeight: "bold" }}>Inter 1st and 2nd year</span> <br />Sri Chaitanya Junior College, Hyderabad<br /><span style={{ opacity: "0.7" }}><BiCalendar /> 2019 - 2021</span></p>
            </li>
            <li>
              <HiBookOpen className="service__list-icon" style={{ fontSize: "1.5rem" }} />
              <p> <span style={{ fontWeight: "bold" }}>5th-10th Grad</span> <br /> Raveendra High School,<br /> Bidar<br /><span style={{ opacity: "0.7" }}><BiCalendar /> 2012 - 2018</span></p>
            </li>
            <li>
              <HiBookOpen className="service__list-icon" style={{ fontSize: "1.5rem" }} />
              <p> <span style={{ fontWeight: "bold" }}>1st-4th Grad</span> <br /> Ekalavya Primary School,<br /> Bidar<br /><span style={{ opacity: "0.7" }}><BiCalendar /> 2008 - 2012</span></p>
            </li>
          </ul>
        </article>
        {/* end of web-dev */}
        <article data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500" className="service">
          <div className="service__head">
            <h3><MdVolunteerActivism className="service__head-icons" />Volunteering</h3>
          </div>

          <ul className="service__list">
            {/* <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{ fontWeight: "bold" }}>Equinox - The Space Club, PESU</span><br /><span>FullStack WebDeveloper</span><br /><span style={{ opacity: "0.7" }}><BiCalendar /> October 2022 - Present</span> </p>
            </li> */}
            <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{ fontWeight: "bold" }}>Weal Health Club, PESU</span><br /><span>FullStack WebDeveloper</span><br /><span style={{ opacity: "0.7" }}><BiCalendar /> Oct 2022 - May 2023</span> </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{ fontWeight: "bold" }}>AikyaYouth Club, PESU</span><br /><span>FullStack WebDeveloper</span><br /><span style={{ opacity: "0.7" }}><BiCalendar /> Jul 2022 - Mar 2023</span> </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{ fontWeight: "bold" }}>Shunya Math Club, PESU</span><br /><span>FullStack WebDeveloper</span><br /><span style={{ opacity: "0.7" }}><BiCalendar /> Jun 2022 - Mar 2023</span> </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{ fontWeight: "bold" }}>Quotient Quiz Club, PESU</span><br /><span>Organizing Team Member</span><br /><span style={{ opacity: "0.7" }}><BiCalendar /> Apr 2022 - Dec 2023</span> </p>
            </li>
            <li>
              <BiCheck className="service__list-icon" />
              <p> <span style={{ fontWeight: "bold" }}>Rotaract Club, PESU</span><br /><span>Event Staff</span><br /><span style={{ opacity: "0.7" }}><BiCalendar /> Apr 2022 - May 2022</span> </p>
            </li>
          </ul>
        </article>
        {/* end of content curetion */}
      </div>
    </section>
  );
};

export default Services;
