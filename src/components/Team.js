import React from "react";
import "./Team.css";

function Team() {
  const profile = "/assets/one.webp";
  const inlineStyles = {
    backgroundImage: `url(${profile})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };
  return (
    <div className="team">
      <h2>Meet the team</h2>
      <div className="team-images">
        <div className="image-card" style={inlineStyles}></div>
        <div className="image-card" style={inlineStyles}></div>
        <div className="image-card" style={inlineStyles}></div>
      </div>
    </div>
  );
}

export default Team;
