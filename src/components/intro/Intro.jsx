import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import { mySkills } from "../../data";

export default function Intro() {
  const textRef = useRef();



  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed:15,
      typeSpeed:  50,
      strings: [`Web Developer`,`Photographer`,`Videographer`,`3D Graphic Designer`],
      cursorChar: "_",
      
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="right">
        <div className="wrapper">
          <div id="navLine"></div>
          
          <h1>I'm Hayk Mnatsakanyan</h1>
          <h3>
            Freelance <span ref={textRef}></span>
          </h3>
          <div className="paragraph">
        <span className="aboutMe">About Me</span>
        <p className="paragraphAboutMe">
          <span>E</span>ducated as an engineer, a trilingual graphic designer and photographer turned into a self-taught businessman
          and entrepreneur. Post-baccalaureate education from UC Davis in full stack web development, including
          JavaScript, CSS, HTML, Node.js, React, and SQL databases. A multi-modality thinker able to see the bigger
          picture from the top-down perspective, yet break down details utilizing bottom-up approach to ensure completed
          staff work is performed. Created content for the River City School's website, social media, digital
          advertisements, signage, and logos utilizing CSS, HTML and JavaScript while executing guidelines for
          technology governance and process improvement. Motivated and excited to not only be employed as a web
          developer, but hear the organization’s business goals and challenges through a unique approach that will
          advance both the organization financially as well as myself as a great asset and contributor to the
          organization's success.
        </p>
       
      </div>
      <span className="skills">Skills</span>
      <div className="iconsContainer">
      {mySkills.map(skill=>{
        return (
          <div key={skill.id} class="mySkillDiv">
            <span class="skillTitle">{skill.title}</span>
            <img className="skillIcons" src={skill.img} alt={skill.title} />
            
          </div>
        )
      })}
      </div>
        </div>
        <a href="#portfolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  );
}
