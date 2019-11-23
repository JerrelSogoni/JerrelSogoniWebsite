import React, { Component } from "react";
import ProjectModal from "./ProjectModal";
import { Parallax } from "react-parallax";
import default_image from "../../assets/japan.jpg";
import "../styles/components.css";
import { connect } from "react-redux";
import { fetchProjects } from "../actions";

class Projects extends Component {
  componentDidMount() {
    this.props.fetchProjects();
  }

  renderContents() {
    return this.props.projects.length
      ? Array.from(this.props.projects).map(project => {
          return (
            <div className="col m3" key={project.name}>
              <ProjectModal project={project} />
            </div>
          );
        })
      : "";
  }

  render() {
    return (
      <Parallax bgImage={default_image} strength={200}>
        <div className="bg">
          <div className="container">
            <div className="row">{this.renderContents()}</div>
          </div>
        </div>
      </Parallax>
    );
  }
}

function mapStateToProps({ projects }) {
  return { projects };
}

export default connect(
  mapStateToProps,
  { fetchProjects }
)(Projects);
