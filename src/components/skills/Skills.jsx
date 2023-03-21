import React from "react";
import "./skills.css";
import { SiHtml5 } from "react-icons/si";
import { SiCss3, SiTailwindcss } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io";
import { IoLogoPython } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { SiCodepen } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { DiNodejsSmall } from "react-icons/di";
import { SiExpress } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";
import { SiNetlify, SiVercel } from "react-icons/si";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faC } from '@fortawesome/free-solid-svg-icons';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';

const Experience = () => {
  return (
    <section id="experience">
      <h5 data-aos="fade-down">What Skills I Have</h5>
      <h2 data-aos="fade-down">Techincal Skills</h2>
      <div className="container experience__container">
        <div data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="experience_frontend">
          <div className="font-div">
            <FontAwesomeIcon icon={faCode} className="font-icon"></FontAwesomeIcon>
            <h3>Programming Languages</h3>
          </div>
          <div className="experience_content">
            <article className="experience_details">
              <FontAwesomeIcon icon={faC} className="experience_details-icon"></FontAwesomeIcon>
              <div>
                <h4>C</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <SiHtml5 className="experience_details-icon" />
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <SiCss3 className="experience_details-icon" />
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <SiTailwindcss className="experience_details-icon" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <IoLogoJavascript className="experience_details-icon" />
              <div>
                <h4>JavaSript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <IoLogoPython className="experience_details-icon" />
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <RiReactjsLine className="experience_details-icon" />
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiMongodb className="experience_details-icon" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <DiNodejsSmall className="experience_details-icon" />
              <div>
                <h4>NodeJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiExpress className="experience_details-icon" />
              <div>
                <h4>ExpressJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <TbBrandNextjs className="experience_details-icon" />
              <div>
                <h4>NextJS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div data-aos="fade-up"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="experience_backend">
          <div className="font-div">
            <FontAwesomeIcon icon={faTools} className="font-icon"></FontAwesomeIcon>
            <h3>Tools In My System</h3>
          </div>
          <div className="experience_content">
            <article className="experience_details">
              <SiVisualstudiocode className="experience_details-icon" />
              <div>
                <h4>Visual Studio Code</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <FaGitAlt className="experience_details-icon" />
              <div>
                <h4>Git</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <FaGithub className="experience_details-icon" />
              <div>
                <h4>Github</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiCodepen className="experience_details-icon" />
              <div>
                <h4>Codepen</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiNetlify className="experience_details-icon" />
              <div>
                <h4>Netlify</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience_details">
              <SiVercel className="experience_details-icon" />
              <div>
                <h4>Vercel</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
