import "./Contacts.css";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

const navLinks = ["Home", "About", "Projects", "Team", "Contacts"];

function Contacts() {
  const [isMenu, setIsMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const header = "/assets/skyline.jpeg";
  const inlineStyles = {
    backgroundImage: `url(${header})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
  };

  return (
    <div className="contacts">
       <div className="overlay"></div>
      <div className="contact-hero" style={inlineStyles}>
        <div className="navbar">
          <div className="logo">
            <h3>Quasar</h3>
          </div>
          <div className="nav">
            <ul>
              {navLinks.map((navLink) => (
                <li
                  onClick={() => navigate(`/${navLink.toLowerCase()}`)}
                  className={
                    pathname === `/${navLink.toLowerCase()}` ? "active-li" : ""
                  }
                >
                  {navLink}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h3>Contact Us</h3>
      </div>
      <div className="contact-middle">
        <div className="map"></div>
        <div className="contact-form">
          
        </div>
      </div>
     
      <div className="footer">
        <div className="footer-text">
          <h4>Quasar</h4>
          <p>Energy Limited</p>
        </div>
      </div>
      <div className="name"></div>
    </div>
  );
}

export default Contacts;
