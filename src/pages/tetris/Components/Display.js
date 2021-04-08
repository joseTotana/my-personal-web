import React from "react";
import PropTypes from "prop-types";
import { StyledDisplay } from "./styles/StyledDisplay";

const Display = ({ gameOver, text }) => <StyledDisplay gameOver={gameOver}>{text}</StyledDisplay>;

Display.propTypes = {
  gameOver: PropTypes.string,
  text: PropTypes.string,
};

export default Display;
