import React from "react";
import { Parallax } from "react-parallax";
import default_image from "../../assets/dumbo.jpg";
import "../styles/components.css";
import ContactMeForm from "./ContactMeForm";

const ContactMe = () => {
  return (
    <Parallax bgImage={default_image} strength={500}>
      <div className="bg">
        <div className="container">
          <div className="row">
            <div className="col s12">
              <ContactMeForm></ContactMeForm>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ContactMe;
