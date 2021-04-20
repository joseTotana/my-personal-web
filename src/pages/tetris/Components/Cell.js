import React from "react";
import PropTypes from "prop-types";
import { StyledCell } from "./styles/StyledCell";
import { TETROMINOS } from "../tetrominos";

const Cell = ({ type }) => <StyledCell type={type} colour={TETROMINOS[type].colour}></StyledCell>;

Cell.propTypes = {
  type: PropTypes.string,
};

export default React.memo(Cell);
