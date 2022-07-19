import React,{ useState } from "react";
import "./nav.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { BiMessageSquareDetail } from "react-icons/bi";

const Nav = () => {
  const [activeNav,setActiveNav]=useState('#');

  const handleEvent=(e)=>{
    const dataAttribute=e.target.getAttribute('data-nav');
    if(dataAttribute && dataAttribute!==null){
      setActiveNav(`${dataAttribute}`)
    }
  }
  return (
    <nav onClick={handleEvent}>
      <a href='#' aria-label="Home" data-nav='#' className={activeNav=== '#' ? 'active' : ''}>
        <AiOutlineHome data-nav='#'/>
      </a>
      <a href='#about' aria-label="About" data-nav='#about' className={activeNav==='#about'?'active':''}>
        <AiOutlineUser data-nav='#about'/>
      </a>
      <a href='#experience' aria-label="Experience" data-nav='#experience' className={activeNav==='#experience'?'active':''}>
        <BiBook data-nav='#experience'/>
      </a>
      <a href='#contact' aria-label="Contact" data-nav='#contact' className={activeNav==='#contact'?'active':''}>
        <BiMessageSquareDetail data-nav='#contact'/>
      </a>
    </nav>
  );
};
export default Nav;
