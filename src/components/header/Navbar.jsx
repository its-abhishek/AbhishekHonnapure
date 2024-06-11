import React from "react";
import { links } from "../utils/data/NavigationData";
import logo from "../../assets/me-about.jpg";

const Navbar = ({ currentPath, scrollToSection }) => {
  return (
    <div className="hidden md:block py-5">
      <div className="grid grid-cols-2">
        <div>
          <a href="/">
            <img src={logo} className="w-12 h-12 rounded-full" alt="Logo"></img>
          </a>
        </div>
        <div>
          <ul className="flex items-center flex-row gap-6 text-base">
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={link.path}
                  className={`${
                    currentPath === link.path ? "text-white" : ""
                  } transition duration-300 ease-in-out hover:text-white`}
                  onClick={(e) => scrollToSection(link.path, link.id, e)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
