import React from "react";
import "../../layout/layout-styles/section2.css";
function Section2() {
  return (
    <div className="main-sec2-content">
      <div className="sec-2-container">
        <div className="boxes-container">
          <div className="box-1-container">
            <div className="box-1-description">
            <div className="main-title-container">
              <p>Intelligent Realtime <br /> Tracking using the <br /> OpenCV Framework</p>
            </div>
            <div className="sub-content-container">
              <p>   Tracks the custom stylus using a <br /> combination of contour detection <br />
              and brightest pixel detection</p>
            </div>
            </div>
            <div className="sec2-btn-container">
              <button>Learn more</button>
            </div>
          </div>
          <div className="box-2-container">
            <div className="box-2-description">
            <div className="main-title-container">
              <p>Supports Customization</p>
            </div>
            <div className="sub-content-container">
              <p>can choose between dark andlight mode as well as a host of <br />ther features to suit your <br /> needs</p>
      
            </div>
            </div>
            <div className="sec2-btn-container">
              <button>Learn more</button>
            </div>
          </div>
          <div className="box-3-container">
            <div className="box-3-description">
            <div className="main-title-container">
              <p>Smart Auto- Calibration</p>
            </div>
            <div className="sub-content-container">
              <p>Automatically generates an image mask which is compatible <br /> with the custom stylus</p>      
            </div>
            </div>
            <div className="sec3-btn-container">
              <button>Learn more</button>
            </div>
          </div>
        </div>








      </div>
    </div>
  );
}

export default Section2;
