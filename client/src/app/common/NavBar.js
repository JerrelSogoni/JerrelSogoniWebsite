import React from "react";
import { Navbar } from "react-materialize";
const NavBar = () => {
  return (
    <Navbar
      className="grey lighten-3"
      brand={<a className="grey-text text-darken-3">Jerrel Sogoni</a>}
      centerLogo="true"
      menuIcon=""
    ></Navbar>
  );
};
export default NavBar;
