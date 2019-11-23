import React from "react";
import NavBar from "../common/NavBar";
import Seperator from "../common/Seperator";
import Landing from "./Landing";
import AboutMe from "./AboutMe";
import Projects from "./Projects";
import ContactMe from "./ContactMe";
import FooterBar from "../common/FooterBar";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <Seperator name="About Me" />
      <AboutMe />
      <Seperator name="Projects" />
      <Projects />
      <Seperator name="Contact Me" />
      <ContactMe />
      <FooterBar />
    </>
  );
}

export default App;
