import React from "react";
import { BsPatchCheckFill, BsLaptopFill } from "react-icons/bs";

const data = [
  {
    id: 1,
    language: "HTML",
    proficiency: "Experienced",
  },
  {
    id: 2,
    language: "CSS",
    proficiency: "Experienced",
  },
  {
    id: 3,
    language: "JavaScript",
    proficiency: "Experienced",
  },
  {
    id: 4,
    language: "React",
    proficiency: "Experienced",
  },
  {
    id: 5,
    language: "Bootstrap",
    proficiency: "Intermediate",
  },
  {
    id: 6,
    language: "MaterialUI",
    proficiency: "Intermediate",
  },
];
const workData = [
  {
    id: 1,
    organization: "Xoriant",
    date: "Sept 21 - Present",
  },
  {
    id: 2,
    organization: "CarWale",
    date: "Aug 19 - Sept 21",
  },
];
const ExperienceData = () => {
  return (
    <>
      <div className="experience__frontend">
        <h3>Frontend Development</h3>
        <div className="experience__content">
          {data &&
            data.map((item) => (
              <article className="experience__details" key={item.id}>
                <BsPatchCheckFill className="experience__details-icon"/>
                <div>
                <h4>{item.language}</h4>
                <small className="text-light">{item.proficiency}</small></div>
              </article>
            ))}
        </div>
      </div>
      <div className="experience__backend">
        <h3>Worked With</h3>
        <div className="experience__content work-experience">
          {workData &&
            workData.map((item) => (
              <article className="experience__details" key={item.id}>
                <BsLaptopFill className="experience__details-icon"/>
                <div>
                <h4>{item.organization}</h4>
                <small className="text-light">{item.date}</small>
                </div>
              </article>
            ))}
        </div>
      </div>
    </>
  );
};

export default ExperienceData;
