import React from "react";
import "../../layout/layout-styles/footer.css";
function Footer() {
  return (
    <div className="footer-container">
      <div className="upper-grid-container">
        <div className="source-code-container">
            <div className="title-container">
            <p>Source Code</p>
            </div>
                <div className="description-container">
                    <p>have a look at how it was written</p>
                </div>
                <div className="link-container">
                    <p>Explore the Github</p>
                </div>
        </div>

        <div className="submit-request-container"></div>
        <div className="learn-more-container"></div>
        <div className="about-me-container"></div>
      </div>
      <div className="lower-grid-container"></div>
    </div>
  );
}

export default Footer;
