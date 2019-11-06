import React from "react";
import { Footer } from "react-materialize";

const FooterBar = () => {
  const thisYear = new Date();
  return (
    <Footer
      copyrights={
        <p className="grey-text text-darken-3">
          {"Copyright © Jerrel Sogoni " + thisYear.getFullYear()}
        </p>
      }
      className="center grey lighten-3"
    ></Footer>
  );
};

export default FooterBar;
