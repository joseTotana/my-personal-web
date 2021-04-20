import React from "react";
import PropTypes from "prop-types";
import "./Portfolio.scss";
import PortfolioCard from "./Components/PortfolioCards";
import {
  weatherApp,
  businessApp,
  theEditApp,
  nextChatbot,
  tetrisGame,
} from "../../utils/constants";
// import TetrisPage from "../tetris/TetrisPage";
// import { Router, Route } from "react-router-dom";

const Portfolio = ({ translate }) => {
  return (
    <section className="portfolio-section">
      <h1>{translate("portfolio.title")}</h1>

      <p className="portfolio-description">{translate("portfolio.description")}</p>
      <section className="portfolio-cards-section">
        <PortfolioCard translate={translate} cardName={weatherApp} />
        <PortfolioCard translate={translate} cardName={businessApp} />
        <PortfolioCard translate={translate} cardName={theEditApp} />
        <PortfolioCard translate={translate} cardName={nextChatbot} />
        <PortfolioCard translate={translate} cardName={tetrisGame} />
      </section>

      {/* <Router>
        <Route path="/tetris" render={() => <TetrisPage />} />
      </Router> */}
    </section>
  );
};

Portfolio.propTypes = {
  translate: PropTypes.func,
};
export default Portfolio;
