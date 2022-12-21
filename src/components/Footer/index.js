import React, { useState } from "react";
import {Link} from "react-router-dom"
import "./footer.scss";
import Line from "./line.png"
import {ImLinkedin} from "react-icons/im"
import {GoMail} from "react-icons/go"
const Footer = () => {
  const [showCards, setShowCards] = useState(false);
  return (
    <footer
      onMouseOver={(event) => {
        event.stopPropagation();
        setShowCards(true);
      }}
      onMouseOut={(event) => {
        event.stopPropagation();
        setShowCards(false);
      }}
    >
      <div className="footer-container">
      <span>
      <img src={Line} />
      </span>
        <span>Let's connect</span>
        <div
          className="inverted-view"
          style={{
            display: showCards ? "block" : "none",
          }}
        >
          <span className="footer-icons">   
          <a href="https://www.linkedin.com/in/-rijuljain-/" target="_blank">
            <ImLinkedin style={{color: "black", fill: "black", fontSize: "25px" }} />
          </a>
          <a href="mailto:rijuljainwork@gmail.com" style={{color: "black",fill: "black", fontSize: "28px", marginTop: "-2px"}} >
            <GoMail />
          </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
