import React from "react";
import { Parallax } from "react-parallax";
import default_image from "../../assets/nyc.jpg";
import "../styles/components.css";
import Typing from "react-typing-animation";

const AboutMe = () => {
  return (
    <Parallax bgImage={default_image} strength={200}>
      <div className="bg container">
        <div className="center-screen">
          <Typing>
            <span>apples lol</span>
          </Typing>
        </div>
      </div>
    </Parallax>
  );
};

export default AboutMe;
