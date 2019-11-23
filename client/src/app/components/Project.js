import React from "react";
import moment from "moment";
import ProjectPerson from "./ProjectPerson";
const images = require.context("../../assets", true);

const Project = ({ project }) => {
  const image = images(`${project.images.main}`);
  const dateFormat = "dddd, MMMM Do YYYY";
  const projectLeaders = Object.entries(project.projectLeaders);
  const collaborators = Array.from(project.collaborators);
  const renderCollaborators = () => {
    return collaborators.map(person => {
      return (
        <div key={person.firstname}>
          <div className="divider"></div>
          <ProjectPerson person={person} />
          <div className="divider"></div>
        </div>
      );
    });
  };
  const renderProjectLeaders = () => {
    return projectLeaders.map(([key, value]) => {
      return (
        <div key={key}>
          <div className="divider"></div>
          <h5>{key}:</h5>
          <ProjectPerson person={value} />
          <div className="divider"></div>
        </div>
      );
    });
  };
  return (
    <div>
      <div className="center">
        <h4> {project.name}</h4>
        <img className="projectModal" src={image}></img>
      </div>

      <p>{project.description}</p>
      <div>
        {projectLeaders.length ? (
          <div>
            <h4>Project Leader{projectLeaders.length > 1 ? "s" : ""}</h4>
            <ul>{renderProjectLeaders()}</ul>
          </div>
        ) : (
          ""
        )}
      </div>
      <div>
        {collaborators.length ? (
          <div>
            <h4>Collaborator{collaborators.length > 1 ? "s" : ""}</h4>
            <div>{renderCollaborators()}</div>
          </div>
        ) : (
          ""
        )}
      </div>
      <h6>
        {project.startDate
          ? "Start Date: " + moment(project.startDate).format(dateFormat)
          : ""}
      </h6>
      <h6>
        {project.endDate
          ? "End Date: " + moment(project.endDate).format(dateFormat)
          : ""}
      </h6>

      {project.endDate ? (
        <div>
          <h6>Completed</h6>
          <div className="progress">
            <div className="determinate" style={{ width: "100%" }}></div>
          </div>
        </div>
      ) : (
        <div>
          <h6>In Progress</h6>
          <div className="progress">
            <div className="indeterminate"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Project;
