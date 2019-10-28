import React from "react";
import NavBar from "./app/common/NavBar";
import Landing from "./app/components/Landing";
import AboutMe from "./app/components/AboutMe";
import Projects from "./app/components/Projects";
import ContactMe from "./app/components/ContactMe";
import Footer from "./app/common/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Landing />
      <AboutMe />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
