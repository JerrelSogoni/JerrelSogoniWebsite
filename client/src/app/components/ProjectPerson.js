import React from "react";

const ProjectPerson = ({ person }) => {
  const images = Object.entries(person.images);
  const sites = Object.entries(person.sites);

  const renderSites = () => {
    return sites.map(([key, value]) => {
      return (
        <div key={key}>
          {key}: <a href={value}>{value}</a>
        </div>
      );
    });
  };

  const renderImages = () => {
    return images.map(([key, value]) => {
      return <p key={key}>{value}</p>;
    });
  };
  return (
    <>
      <div>
        <h6>{person.firstname + " " + person.lastname}</h6>
        {images.length > 0 ? renderImages() : ""}
        {sites.length > 0 ? renderSites() : ""}
      </div>
    </>
  );
};

export default ProjectPerson;
