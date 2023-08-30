import React from "react";
import "./Home.css";

function Home() {
  const header = "/assets/header.jpeg"
  const inlineStyles = {
    backgroundImage: `url(${header})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: 'center',
    backgroundSize: "cover",
    backgroundAttachment: 'fixed',
  }
  return (
    <div className="home" style={inlineStyles}>
      <div className="opaque">

      </div>
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
