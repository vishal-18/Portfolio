import React from "react";
import "./experience.css";
import ExperienceData from './ExperienceData';
const Experience = () => {
  return (
    <section id="experience">
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className="container experience__container">
        <ExperienceData/>
      </div>
    </section>
  );
};

export default Experience;
