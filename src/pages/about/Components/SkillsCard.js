import React from "react";
import "./SkillsCard.scss";
import androidLogo from "../../../assets/android.png";
import webLogo from "../../../assets/web.png";
import netLogo from "../../../assets/net.png";
import { dotNet, web, dotNetTechs, webTechs, androidTechs } from "../../../utils/constants";
import PropTypes from "prop-types";

const SkillsCard = ({ type }) => {
  let icon, techs;

  if (type === web) {
    icon = webLogo;
    techs = webTechs;
  } else if (type === dotNet) {
    icon = netLogo;
    techs = dotNetTechs;
  } else {
    icon = androidLogo;
    techs = androidTechs;
  }
  return (
    <div className="skills-card">
      <img className="skills-card-icon" src={icon} alt="Skill Icon" />
      <div className="skills-card-title">{type}</div>
      <div className="skills-card-techs">{techs}</div>
    </div>
  );
};

SkillsCard.propTypes = {
  type: PropTypes.string,
};
export default SkillsCard;
