import React from "react";
import "../../layout/layout-styles/mainContent.css";
import { TypeAnimation } from "react-type-animation";

function MainContent() {
  return (
    <div>
      <div className="main-content-container">
        <div className="title-container">
          <div className="bold-content">
            <TypeAnimation
         
              sequence={[
                // Same substring at the start will only be typed once, initially
                "A new way to Interact",
                1000,
                "A new way to Navigate",
                2000,
                "A new way to Employ",
                2000,
                "A new way to Control",
                2000,
              ]}
              speed={50}
              style={{ fontSize: "6em" }}
              repeat={Infinity}
            />
          </div>
          <div className="sub-content">
            <p>Turns any screen into a touchscreen using Computer Vision</p>
          </div>
        </div>
        <div className="btn-container">
          <button>Learn more</button>
        </div>
      </div>
    </div>
  );
}

export default MainContent;
