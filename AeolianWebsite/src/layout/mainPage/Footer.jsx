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

        <div className="submit-request-container">
        <div className="title-container">
            <p>Submit Request</p>
            </div>
                <div className="description-container">
                    <p>Submit a request or inform me of any bugs</p>
                </div>
                <div className="link-container">
                    <p>Send a Request</p>
                </div>

        </div>
        <div className="learn-more-container">

        <div className="title-container">
            <p>Learn More</p>
            </div>
                <div className="description-container">
                    <p>What is Aeolian and what does it DO ?</p>
                </div>
                <div className="link-container">
                    <p>Find out more</p>
                </div>
        </div>
        <div className="about-me-container">
        <div className="title-container">
            <p>About Me</p>
            </div>
                <div className="description-container">
                    <p>A little but about me and what i do</p>
                </div>
                <div className="link-container">
                    <p>About Me</p>
                </div>
        </div>
      </div>
      <div className="lower-grid-container"></div>
    </div>
  );
}

export default Footer;
