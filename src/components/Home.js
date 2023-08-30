import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <div className="navbar">
        <div className="logo"></div>
        <div className="nav-itself">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Team</li>
            <li>Contacts</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Home;
