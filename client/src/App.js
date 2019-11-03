import React from "react";
import NavBar from "./app/common/NavBar";
import Seperator from "./app/common/Seperator";
import Landing from "./app/components/Landing";
import AboutMe from "./app/components/AboutMe";
import Projects from "./app/components/Projects";
import ContactMe from "./app/components/ContactMe";

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
    </>
  );
}

export default App;
