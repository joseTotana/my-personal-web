import React from "react";
import Typist from "react-typist";
import TypistLoop from "react-typist-loop";
import "./TypingAnimation.scss";
import PropTypes from "prop-types";

const TypingAnimation = ({ translate }) => {
  return (
    <div className="typing-animation">
      <TypistLoop interval={3000}>
        {[
          translate("home.typing_animation.welcome"),
          translate("home.typing_animation.name"),
          translate("home.typing_animation.about_me"),
        ].map((text) => (
          <Typist key={text} startDelay={1000}>
            {text}
          </Typist>
        ))}
      </TypistLoop>
    </div>
  );
};

TypingAnimation.propTypes = {
  translate: PropTypes.func,
};

export default TypingAnimation;
