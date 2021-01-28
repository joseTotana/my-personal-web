import React from "react";
import "./Home.scss";
import { TypingAnimation } from "../../components";
import PropTypes from "prop-types";

const Home = ({ translate }) => {
  return (
    <section className="home-section">
      <div className="hello-text">HOLA!</div>
      <TypingAnimation translate={translate} />
    </section>
  );
};
Home.propTypes = {
  translate: PropTypes.func,
};
export default Home;
joseMartinezDev;
