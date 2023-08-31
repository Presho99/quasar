import React, { useEffect, useState } from "react";
import "./Home.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const navLinks = ["Home", "About", "Projects", "Team", "Contacts"];

function Home() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const header = "/assets/header.jpeg";
  const inlineStyles = {
    backgroundImage: `url(${header})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",
  };
  return (
    <div className="home" style={inlineStyles}>
      <div className="opaque">
        <div className="navbar">
          <div className="logo">
            <h3>Quasar</h3>
          </div>
          <div className="nav">
            <ul>
              {navLinks.map((navLink) => (
                <li 
                onClick={() => navigate(`/${navLink.toLowerCase()}`)}
                className = {
                  pathname === `/${navLink.toLowerCase()}` ? "active-li" : ""
                }
                >{navLink}</li>
              ))}
            </ul>
          </div>
          <button className="tel">
            <FontAwesomeIcon icon={faPhone} className="phone" />
            <span className="tel-text">Call Us</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
