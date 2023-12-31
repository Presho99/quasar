import "./Contacts.css";
import React, { useEffect, useState } from "react";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faLocationDot,
  faPhone,
  faXmark,
  faBars
} from "@fortawesome/free-solid-svg-icons";
import './ContactMedia.css'

const navLinks = ["Home", "About", "Services", "Contacts"];

function Contacts() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
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

  useEffect(() => {
    const handleResize = () => {
      setIsSmallScreen(window.innerWidth <= 767);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  

  return (
    <div className="contacts">
      {isMenuOpen && (
          <div className="small-menu">
            <div className="small-menu-card">
              <div className="small-logo">
                <img src="/assets/logo.png" alt="logo" />
              </div>

              <div className="small-title">
                <h3>
                  Qu<span>a</span>sar
                </h3>
              </div>

              <ul>
                {navLinks.map((navLink) => (
                  <li
                    onClick={() => navigate(`/${navLink.toLowerCase()}`)}
                    className={
                      pathname === `/${navLink.toLowerCase()}`
                        ? "active-li"
                        : ""
                    }
                  >
                    {navLink}
                  </li>
                ))}
              </ul>
              <button className="button-xmark x">
                <FontAwesomeIcon
                  icon={faXmark}
                  className="xmark"
                  onClick={toggleMenu}
                />
              </button>
            </div>
          </div>
        )}
      <div className="overlay"></div>
      <div className="contact-hero" style={inlineStyles}>
        <div className="navbar">
          <div className="logo">
            <h3>Quasar</h3>
          </div>
          <div className="nav">
          {isSmallScreen ? (
              <FontAwesomeIcon
                icon={faBars}
                className="nav-bars"
                onClick={toggleMenu}
                style={{ cursor: "pointer" }}
              />
            ) : (
              <ul>
                {navLinks.map((navLink) => (
                  <li
                    onClick={() => navigate(`/${navLink.toLowerCase()}`)}
                    className={
                      pathname === `/${navLink.toLowerCase()}`
                        ? "active-li"
                        : ""
                    }
                  >
                    {navLink}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
        <h3 className="contact-us">Contact Us</h3>
      </div>
      <div className="contact-middle">
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d255282.39807934483!2d36.720371935713636!3d-1.3024715129725255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f11655c311541%3A0x9dd769ac1c10b897!2sNairobi%20County!5e0!3m2!1sen!2ske!4v1693605881991!5m2!1sen!2ske"
            style={{ width: "100%", height: "100%", border: "none" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div className="contact-form">
          <div className="cont">
            <FontAwesomeIcon icon={faLocationDot} className="cont-icon" />
            <div className="cont-text">
              <h4>Address</h4>
              <p>Nairobi, Kenya</p>
            </div>
          </div>
          <div className="cont">
            <FontAwesomeIcon icon={faPhone} className="cont-icon" />
            <div className="cont-text">
              <h4>PHONE</h4>
              <p>+254-720-952-700</p>
            </div>
          </div>
          <div className="cont">
            <FontAwesomeIcon icon={faEnvelope} className="cont-icon" />
            <div className="cont-text">
              <h4>Email</h4>
              <p>quasarenergyltd@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <div className="footer">
      
        <div className="credits">
          <p> &copy; 2023 Quasar Energy Limited</p>
        </div>
      </div>
   
    </div>
  );
}

export default Contacts;
