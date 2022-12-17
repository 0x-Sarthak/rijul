import React, { useState } from "react";
import "./footer.scss";

const Footer = () => {
  const [showCards, setShowCards] = useState(false);
  return (
    <footer
      style={{ textAlign: "center", width: "150px" }}
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
        <span>Let's connect</span>
        <div
          className="inverted-view"
          style={{
            display: showCards ? "block" : "none",
          }}
        >
          {/* <ul>
            <li>One</li>
            <li>Two</li>
            <li>Three</li>
          </ul> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
