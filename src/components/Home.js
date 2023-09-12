import React, { useEffect, useState } from "react";
import "./Home.css";
import { FaFacebook, FaInstagram, FaWhatsapp, FaTwitter } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './HomeMedia.css'
import {
  faPhone,
  faXmark,
  faBars,
  
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = ["Home", "About", "Safety", "Contacts"];

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const header = "/assets/header.jpeg";
  const inlineStyles = {
    backgroundImage: `url(${header})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
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
    <div className="home" >
      <div className="home-animation" style={inlineStyles}>
      
      </div>

      {isMenuOpen && (
        <div className="small-menu">
          <div className="small-menu-card">
            <div className="small-logo">
              <img src="/assets/logo.png" alt="logo" />
            </div>

            <div className="small-title">
              <h3>Qu<span>a</span>sar</h3>
            </div>

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
      <div className="frosted">
        <div className="socials">
          <a href="https://wakatime.com/dashboard">
            <FaFacebook />
          </a>
          <a href="https://wakatime.com/dashboard">
            <FaTwitter />
          </a>
          <a href="https://wakatime.com/dashboard">
            <FaInstagram />
          </a>
          <a href="https://wakatime.com/dashboard">
            <FaWhatsapp />
          </a>
        </div>
      </div>
      <div className="text">
        <h1>Innovative Gas Solutions Ahead.</h1>
        <p>
          Advanced gas technologies making clean energy accessible to everyone.
        </p>
        <button onClick={() => navigate("/about")}>
          <p>Read More</p>
        </button>
      </div>
      <div className="opaque">
        <div className="navbar">
          <div className="logo">
          <h3>Qu<span>a</span>sar</h3>
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
          <button className="tel" onClick={() => navigate(`/contacts`)}>
            <FontAwesomeIcon icon={faPhone} className="phone" />
            <span className="tel-text">Call Us</span>
          </button>
        </div>
      </div>

      <div className="caret">
        <div className="caret-socials">
          <a href="https://wakatime.com/dashboard">
            <FaFacebook />
          </a>
          <a href="https://wakatime.com/dashboard">
            <FaTwitter />
          </a>
          <a href="https://wakatime.com/dashboard">
            <FaInstagram />
          </a>
          <a href="https://wakatime.com/dashboard">
            <FaWhatsapp />
          </a>
        </div>
        <FontAwesomeIcon
          icon={faArrowRight}
          onClick={() => navigate(`/about`)}
          className="caret-icon"
        />
      </div>
    </div>
  );
}

export default Home;
