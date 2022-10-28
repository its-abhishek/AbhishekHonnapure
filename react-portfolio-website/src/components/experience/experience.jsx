import React from "react";
import "./experience.css";
import { SiHtml5} from "react-icons/si";
import { SiCss3 } from "react-icons/si";
import { DiJavascript} from "react-icons/di";
import { IoLogoPython } from "react-icons/io";
import { RiReactjsLine } from "react-icons/ri";
import { SiVisualstudiocode } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import {SiCodepen } from "react-icons/si";


const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>Techincal Skills</h2>
      <div className="container experience__container">
        <div className="experience_frontend">
          <h3>Programming Languages</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiHtml5 className="experience_details-icon"/>
              <div>
                <h4>C</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <SiHtml5 className="experience_details-icon"/>
              <div>
                <h4>HTML5</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <SiCss3 className="experience_details-icon"/>
              <div>
                <h4>CSS3</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <DiJavascript className="experience_details-icon"/>
              <div>
                <h4>JavaSript</h4>
                <small className="text-light">Intermediat</small>
              </div>
            </article>
            <article className="experience_details">
              <IoLogoPython className="experience_details-icon"/>
              <div>
                <h4>Python</h4>
                <small className="text-light">Intermediat</small>
              </div>
            </article>
            <article className="experience_details">
              <RiReactjsLine className="experience_details-icon"/>
              <div>
                <h4>ReactJS</h4>
                <small className="text-light">Intermediat</small>
              </div>
            </article>
          </div>
        </div>
        <div className="experience_backend">
          <h3>Tools In My System</h3>
          <div className="experience_content">
            <article className="experience_details">
              <SiVisualstudiocode className="experience_details-icon"/>
              <div>
                <h4>Visual Studio Code</h4>
                <small className="text-light">Experience</small>
              </div>
            </article>
            <article className="experience_details">
              <FaGitAlt className="experience_details-icon"/>
              <div>
                <h4>Git</h4>
                <small className="text-light">Intermediat</small>
              </div>
            </article>
            <article className="experience_details">
              <FaGithub className="experience_details-icon"/>
              <div>
                <h4>Github</h4>
                <small className="text-light">Intermediat</small>
              </div>
            </article>
            <article className="experience_details">
              <SiCodepen className="experience_details-icon"/>
              <div>
                <h4>Codepen</h4>
                <small className="text-light">Intermediat</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
