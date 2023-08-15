import React from "react";
import "../../layout/layout-styles/section2.css";
function Section2() {
  return (
    <div className="main-sec2-content">
      <div className="sec-2-container">
        <div className="boxes-container">
          <div className="box-1-container">
            <div className="main-title-container">
              <p>Intelligent Realtime Tracking using the OpenCV Framework</p>
            </div>
            <div className="sub-content-container">
              Tracks the custom stylus using a combination of contour detection
              and brightest pixel detection
            </div>
            <div className="sec2-btn-container">
              <button>Learn more</button>
            </div>
          </div>
          <div className="box-2-container">
            <div className="main-title-container">
              <p>Suppoerts Customization</p>
            </div>
            <div className="sub-content-container">
       can choose between dark and light mode as well as a host of ther features to suit your needs
            </div>
            <div className="sec2-btn-container">
              <button>Learn more</button>
            </div>
          </div>
          <div className="box-3-container">
            <div className="main-title-container">
              <p>Smart Auto- Calibration</p>
            </div>
            <div className="sub-content-container">
      Automatically generates an image mask which is compatible with the custom stylus
            </div>
            <div className="sec2-btn-container">
              <button>Learn more</button>
            </div>
          </div>



        </div>








      </div>
    </div>
  );
}

export default Section2;
