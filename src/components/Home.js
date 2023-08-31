import React from "react";
import "./Home.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'

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
      <div className="navbar">
        <div className="logo">
          <h3>Quasar</h3>
        </div>
        <div className="nav">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Projects</li>
            <li>Team</li>
            <li>Contacts</li>
          </ul>
        </div>
        <button className="tel">
          <FontAwesomeIcon icon={faPhone} className="phone"/>
        <span className="tel-text">
          Call Us
        </span>
        </button>
      </div>

      </div>
     
    </div>
  );
}

export default Home;
