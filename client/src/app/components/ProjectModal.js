import React, { Component } from "react";
import Materialize from "materialize-css";
import Project from "./Project";
import ProjectDisplay from "./ProjectDisplay";

class ProjectModal extends Component {
  componentDidMount() {
    const options = {
      onOpenStart: () => {},
      onOpenEnd: () => {},
      onCloseStart: () => {},
      onCloseEnd: () => {},
      inDuration: 250,
      outDuration: 250,
      opacity: 0.5,
      preventScrolling: false,
      dismissible: true,
      startingTop: "4%",
      endingTop: "10%"
    };

    Materialize.Modal.init(this.Modal, options);
  }

  render() {
    const project = this.props.project;

    return (
      <div>
        <div
          ref={Modal => {
            this.Modal = Modal;
          }}
          id={project.name}
          className="modal"
        >
          <div className="modal-content">
            <Project project={project} />
          </div>
        </div>
        <div
          className="modal-trigger projectDisplay"
          data-target={project.name}
        >
          <ProjectDisplay
            projectName={project.name}
            projectImage={project.images.main}
          />
        </div>
      </div>
    );
  }
}

export default ProjectModal;
