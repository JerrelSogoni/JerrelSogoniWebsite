import React from "react";
import { Parallax } from "react-parallax";
import default_image from "../../assets/nyc.jpg";
import "../styles/components.css";

const AboutMe = () => {
  return (
    <Parallax bgImage={default_image} strength={200}>
      <div className="bg">Insert Here</div>
    </Parallax>
  );
};

export default AboutMe;
