import React from "react";
import { Parallax } from "react-parallax";
import default_image from "../../assets/nyc.jpg";
import "../styles/components.css";
import { Row, Col, Button } from "react-materialize";
import Typing from "react-typing-animation";

const AboutMe = () => {
  return (
    <Parallax bgImage={default_image} strength={200}>
      <div className="bg container">
        <Row>
          <Col s={6}>
            <h1 className="text-background text-section">Career</h1>
          </Col>
          <Col s={6}>
            <h1 className="text-background text-section">Passion</h1>
          </Col>
        </Row>

        <Row>
          <Col s={6}>
            <p className="text-background text-section">
              I am SWE at Lockheed Martin and work with embedded system use
              primarily C/C++ and Java. I working with hardware and software and
              combining their capabilities to help develop a great product
              through agile development.
            </p>
          </Col>
          <Col s={6}>
            <p className="text-background text-section">
              I enjoy creating ideas and turning them into actual products that
              can shown or interacted with. A few years ago I have created a
              hydroponic grower out of passion. I explore what new technologies
              have to offer. I have worked with a variety of web technologies.
              In addition to web development, creating mobile applications is
              one of the realms of software I want to explore. There so many
              aspects with technology that can be created with great ideas that
              <b>
                <i>Time </i>
              </b>
              is a blocker!!
            </p>
            <p className="text-background text-section">
              Aside from software, I have culinary interest ranging from italian
              food to asian food. On my free time, I like to car detail my car
              as well as take photos and use latest technology that automate my
              daily life.
            </p>
            <div className="center">
              <Button
                node="a"
                href="http://blog.jerrelsogoni.com"
                target="_blank"
                flat
                className="text-background text-section"
              >
                My Blog
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </Parallax>
  );
};

export default AboutMe;
