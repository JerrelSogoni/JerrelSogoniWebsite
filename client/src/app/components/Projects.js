import React from "react";
import { Parallax } from "react-parallax";
import default_image from "../../assets/japan.jpg";
import "../styles/components.css";

const Projects = () => {
  return (
    <Parallax className="bg" bgImage={default_image} strength={500}></Parallax>
  );
};

export default Projects;
