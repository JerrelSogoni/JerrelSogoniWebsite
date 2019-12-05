import React from "react";
import { Parallax } from "react-parallax";
import default_image from "../../assets/dumbo.jpg";
import "../styles/components.css";
import ContactMeForm from "./ContactMeForm";

const ContactMe = () => {
  return (
    <Parallax bgImage={default_image} strength={500}>
      <div className="bg">
        <div className="container center-screen">
          <ContactMeForm></ContactMeForm>
        </div>
      </div>
    </Parallax>
  );
};

export default ContactMe;
