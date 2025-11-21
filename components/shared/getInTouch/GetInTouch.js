import React from "react";
import "./GetInTouch.scss";

const GetInTouch = () => {
  return (
    <>
      <div className="get-in-touch">
        <div className="banner_text">
          <h4>Join Us & Grow Your Business</h4>
          <p>
            Create high-end software solutions for <br></br>your company with
            <span>Moltech Solutions</span>
          </p>
        </div>
        <button onClick={() => (window.location.href = "/contact-us")} aria-label="Get In Touch">
          Get In <span>Touch</span>
        </button>
      </div>
    </>
  );
};

export default GetInTouch;
