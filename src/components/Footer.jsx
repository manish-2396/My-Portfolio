import React from "react";

const Footer = ({ darkMode }) => {
  return (
    <div data-theme={darkMode ? "dark" : "light"} >
      <hr />
      <p className="footer-text">
        Made by Manish Singh Chouhan
        <br />
        <br />
        <small>All rights reserved © 2023 Manish Singh Chouhan</small>
        <br />
      </p>
    </div>
  );
};

export default Footer;
