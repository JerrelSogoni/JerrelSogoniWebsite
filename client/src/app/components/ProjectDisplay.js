import React from "react";

const images = require.context("../../assets", true);

const ProjectDisplay = ({ projectName, projectImage }) => {
  const image = images(`${projectImage}`);
  return (
    <div className="hvrbox hoverable">
      <img
        className="projectDisplay hvrbox-layer_bottom"
        src={image}
        alt={`${projectName}`}
      ></img>
      <div className="hvrbox-layer_top">
        <div className="hvrbox-text">{projectName}</div>
      </div>
    </div>
  );
};

export default ProjectDisplay;
