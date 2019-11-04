import React from "react";
import { Parallax } from "react-parallax";
import default_image from "../../assets/macbook.jpg";
import "../styles/components.css";
import Typing from "react-typing-animation";

const Landing = () => {
  return (
    <Parallax bgImage={default_image} strength={200}>
      <div className="bg container">
        <div className="center-screen">
          <div className="row">
            <div className="col s12">
              <h1 className="text-background text-section">
                <Typing speed={100} loop="true">
                  Eat. Sleep. Code.
                  <Typing.Delay ms={2000} />
                  Repeat.
                  <Typing.Reset delay={1000} />
                </Typing>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Landing;
