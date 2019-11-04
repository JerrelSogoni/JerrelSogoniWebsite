import React from "react";
import "../styles/components.css";

const Seperator = ({ name }) => {
  return (
    <div>
      <div className="divider"></div>
      <h1 className="center ">{name}</h1>
      <div className="divider"></div>
    </div>
  );
};

export default Seperator;
