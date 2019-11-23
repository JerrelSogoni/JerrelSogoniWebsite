import React from "react";
const FooterBar = () => {
  const thisYear = new Date();
  return (
    <footer className="page-footer grey lighten-3">
      <div className="footer-copyright">
        <div className="container center">
          <p className="grey-text text-darken-3">
            {"Copyright © Jerrel Sogoni " + thisYear.getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterBar;
