import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="loader">
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
