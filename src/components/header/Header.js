import React from "react";
import "./header.css";
import CTA from "./CTA";
import Socials from "./Socials";
import Profile from '../../assets/header-pic.png';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Vishal Yadav</h1>
        <big className="text-light">Frontend Developer</big>
        <CTA />
        <Socials />
        <div className="me">
          <img src={Profile} alt="Profile" width="auto" height="auto"/>
        </div>
        <span className="scroll__down">
          Scroll Down
        </span>
      </div>
    </header>
  );
};

export default Header;
