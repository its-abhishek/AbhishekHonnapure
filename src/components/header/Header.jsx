import React from "react";
import { TypeAnimation } from "react-type-animation";
import { personalData } from "../utils/data/personal-data";
import { motion } from "framer-motion";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { FiInstagram } from 'react-icons/fi'

const HeaderLayput = () => {
  return (
    <div className="container grid grid-cols-1 sm:grid-cols-12 md:mt-8">
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="col-span-12 place-self-center text-center sm:text-left justify-self-start"
      >
        <div className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-400">
            Hello, I&apos;m{" "}
          </span>
          <br></br>
          <TypeAnimation
            sequence={[
              "Abhishek",
              1000,
              "Web Developer",
              1000,
              "Programmer",
              1000,
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
        </div>
        <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
          A tech enthusiast and interested in reaching peep&apos;s to share
          thoughts and learn somthing new.
          <br />
          <span className="text-[#dde6ec] font-bold">
            {" "}
            CSE Student @ PES University
          </span>
        </p>
        <div className="my-12 flex items-center gap-5">
          <a
            href={personalData.github}
            target="_blank"
            className="transition-all text-secondary-400 hover:scale-125 duration-300"
          >
            <BsGithub size={30} />
          </a>
          <a
            href={personalData.linkedIn}
            target="_blank"
            className="transition-all text-secondary-400 hover:scale-125 duration-300"
          >
            <BsLinkedin size={30} />
          </a>
          <alert
            href={personalData.facebook}
            target="_blank"
            className="transition-all text-secondary-400 hover:scale-125 duration-300"
          >
            <FaFacebook size={30} />
          </alert>
          <a
            href={personalData.instagram}
            target="_blank"
            className="transition-all text-secondary-400 hover:scale-125 duration-300"
          >
            <FiInstagram size={30} />
          </a>
          <a
            href={personalData.twitter}
            target="_blank"
            className="transition-all text-secondary-400 hover:scale-125 duration-300"
          >
            <FaTwitterSquare size={30} />
          </a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="bg-gradient-to-r to-primary-400 from-secondary-400 p-[1px] rounded-full transition-all duration-300 hover:from-primary-500 hover:to-secondary-600"
          >
            <button className="px-3 text-xs md:px-8 py-3 md:py-4 bg-[#0d1224] rounded-full border-none text-center md:text-sm font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out  md:font-semibold flex items-center gap-1 hover:gap-3">
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </button>
          </a>

          <a
            target="_blank"
            className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-primary-400 to-secondary-500 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
            role="button"
            href={personalData.resume}
          >
            <span>Get Resume</span>
            <MdDownload size={16} />
          </a>
        </div>
      </motion.div>
    </div>
  );
};

export default HeaderLayput;
