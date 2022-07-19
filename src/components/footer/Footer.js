 import React from "react";
import "./footer.css";
import { FiInstagram } from "react-icons/fi";
import { IoLogoTwitter } from "react-icons/io";

const Footer = () => {
  return (
    <footer>
      <ul className="permalinks">
        <li>
          <a href="#" aria-label="Home">Home</a>
        </li>
        <li>
          <a href="#about" aria-label="About">About</a>
        </li>
        <li>
          <a href="#experience" aria-label="Expeirience">Expeirience</a>
        </li>
        <li>
          <a href="#contact" aria-label="Contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/__vishal18/" target="_blank" title="Instagram" rel="nofollow noopener noreferrer">
          <FiInstagram/>
        </a>
        <a href="https://twitter.com/_SabMohHai" target="_blank" title="Twitter" rel="nofollow noopener noreferrer">
          <IoLogoTwitter/>
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy;Vishal Yadav. All rights reserved, 2022</small>
      </div>
    </footer>
  );
};

export default Footer;
