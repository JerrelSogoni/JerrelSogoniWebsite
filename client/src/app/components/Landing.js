import React from "react";
import { Parallax } from "react-parallax";
import default_image from "../../assets/macbook.jpg";
import "../styles/components.css";

const Landing = () => {
  return (
    <Parallax className="bg" bgImage={default_image} strength={200}></Parallax>
  );
};

export default Landing;
