import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import { GiMountainRoad,GiDragonBalls } from "react-icons/gi";
import Profile from '../../assets/profile-nobg.png';


const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Profile} alt="About profile" loading="lazy" width="auto" height="auto" rel='preload' as='image'/>
          </div>
        </div>
        <div className="about_content">
          <div className="about_cards">
            <article className="about_card">
              <FaAward className="about_icon" />
              <h6>Experience</h6>
              <small>3+ Years Working</small>
            </article>
            <article className="about_card">
              <GiMountainRoad className="about_icon" />
              <h6>Hiker</h6>
              <small>10+ Trek Completed</small>
            </article>
            <article className="about_card">
              <GiDragonBalls className="about_icon" />
              <h6>Otaku</h6>
              <small>50+ Anime Watched</small>
            </article>
          </div>
          <p>
          Have working experience in product and service based companies.Enthusiastic about new things happening in the front-end domain.
          Determined to learn with a practical approach, enthusiastic, and produced results under deadlines!
          A Cricket Lover and Real Madrid Fan.
          </p>
        </div>
      </div>
    </section>
  );
};
export default About;
