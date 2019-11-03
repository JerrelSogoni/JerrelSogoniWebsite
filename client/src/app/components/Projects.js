import React from "react";
import { Parallax } from "react-parallax";
import default_image from "../../assets/japan.jpg";
import "../styles/components.css";

const Projects = () => {
  return (
    <Parallax bgImage={default_image} strength={500}>
      <div className="bg">Insert Here</div>
    </Parallax>
  );
};

export default Projects;
