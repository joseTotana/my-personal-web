import React from "react";
import myFoto from "../../assets/myfoto.jpg";
import "./About.scss";
import SkillsCard from "./Components/SkillsCard";
import { dotNet, web, android } from "../../utils/constants";
import LinkedinLogo from "../../assets/li-logo.png";
import PropTypes from "prop-types";
import { linkedinProfile } from "../../utils/constants";

const About = (props) => {
  const { translate } = props;

  return (
    <section className="about-page">
      <section className="my-story">
        <div className="my-story-left">
          <img src={myFoto} alt="My Foto"></img>
        </div>
        <div className="my-story-right">
          <h1>{translate("about_me.my_story")}</h1>
          <p>{translate("about_me.my_story_p1")}</p>
          <p>{translate("about_me.my_story_p2")}</p>
          <p>{translate("about_me.my_story_p3")}</p>
        </div>
      </section>
      <section className="my-skills">
        <h1>{translate("about_me.my_skills")}</h1>
        <p>{translate("about_me.my_skills_p1")}</p>
      </section>
      <section className="skills-cards">
        <SkillsCard type={web} />
        <SkillsCard type={dotNet} />
        <SkillsCard type={android} />
      </section>
      <section className="my-cv">
        <img src={LinkedinLogo} alt="Linkedin Logo" />
        <div className="my-cy-text">{translate("about_me.check_my_cv")}</div>
        <div className="my-cv-button-container">
          <a className="my-cv-button" href={linkedinProfile} target="_blank" rel="noreferrer">
            {translate("about_me.my_linkedin")}
          </a>
        </div>
      </section>
    </section>
  );
};

About.propTypes = {
  translate: PropTypes.func,
};
export default About;
