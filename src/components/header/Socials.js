import React from'react';
import {BsLinkedin,BsMedium} from 'react-icons/bs';
import {FaGithub} from'react-icons/fa';
import {SiHashnode} from 'react-icons/si';

const Socials=()=>{
 return(
   <div className='header_socials'>
       <a href="https://www.linkedin.com/in/imvishalyadav/" target="_blank" title="LinkenIn" rel="noreferrer nofollow"><BsLinkedin className='header__social-icons'/></a>
       <a href="https://github.com/vishal-18/" target="_blank" title="Github" rel="noreferrer nofollow"><FaGithub className='header__social-icons'/></a>
       <a href="https://medium.com/@imyadavvishal" target="_blank" title="Medium" rel="noreferrer nofollow"><BsMedium className='header__social-icons'/></a>
       <a href="https://vishalyadav.hashnode.dev/" target="_blank" title="Hashnode" rel="noreferrer nofollow"><SiHashnode className='header__social-icons'/></a>
       <a href="https://www.tripoto.com/profile/imvishal" target="_blank" title="Tripoto" rel="noreferrer nofollow">
       <img src="https://cdn1.tripoto.com/assets/2.9/img/favicon.ico" alt="Tripoto" width="28" height="28"/>
       </a>
   </div>
 )
}
export default Socials