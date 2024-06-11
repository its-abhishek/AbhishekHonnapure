import React from "react";
import "./header.css";
import HeaderLayput from "./HeaderLayput";
import Navbar from "./Navbar";

const Header = () => {
  return (
    <div className="container">
      <Navbar/>
      <HeaderLayput/>
    </div>
  );
};

export default Header;
