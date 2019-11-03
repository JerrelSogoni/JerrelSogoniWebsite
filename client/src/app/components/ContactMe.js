import React from "react";
import { Parallax } from "react-parallax";
import Typing from "react-typing-animation";
import default_image from "../../assets/dumbo.jpg";
import "../styles/components.css";

const ContactMe = () => {
  return (
    <Parallax className="bg" bgImage={default_image} strength={500}></Parallax>
  );
};

export default ContactMe;
