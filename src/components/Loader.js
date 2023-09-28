import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
        {/* <img src="/assets/logo.png" className="first-logo" alt="logo" />
        <img src="/assets/logo.png" className="second-logo" alt="logo" /> */}
      <div className="loader-container">
        <img src="/assets/logo.png" className="loader-logo" alt="logo" />
        <div className="loader-text">
          <h3>Quasar</h3>
          <p>Energy Limited</p>
        </div>
      </div>
    </div>
  );
}

export default Loader;
