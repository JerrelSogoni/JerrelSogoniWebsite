import React from "react";
import { Parallax } from "react-parallax";
import default_image from "../../assets/nyc.jpg";
import "../styles/components.css";

const AboutMe = () => {
  return (
    <Parallax className="bg" bgImage={default_image} strength={200}></Parallax>
  );
};

export default AboutMe;
