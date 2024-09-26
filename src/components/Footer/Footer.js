import React from "react";
import "./Footer.css";
function Footer() {
  return (
    <footer className="footer">&copy; OLX {new Date().getFullYear()}</footer>
  );
}

export default Footer;
