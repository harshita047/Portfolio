import React from "react";
import "./about.css";
import Image from "../../assets/avatar-0.jpg";
import AboutBox from "./AboutBox";

const About = () => {
  return (
    <section className="about container section" id="about">
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className="about__img" />

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">
              I am Harshita Sharma, Dedicated and motivated BCA graduate with a
              passion for web development and front-end design. I have rich
              experience in web site design and building and customization.
              Seeking opportunities to utilize my skills and knowledge in a
              dynamic work environment where I can contribute effectively to
              projects and grow professionally.
            </p>
            <a href="" className="btn">
              Download CV
            </a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Development</h3>
                <spam className="skills__number">90%</spam>
              </div>

              <div className="skills__bar">
                <spam className="skills__percentage development"></spam>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX design</h3>
                <spam className="skills__number">80%</spam>
              </div>

              <div className="skills__bar">
                <spam className="skills__percentage ui__design"></spam>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Photography</h3>
                <spam className="skills__number">60%</spam>
              </div>

              <div className="skills__bar">
                <spam className="skills__percentage photography"></spam>
              </div>
            </div>
          </div>
        </div>
      </div>

      <AboutBox />
    </section>
  );
};

export default About;
