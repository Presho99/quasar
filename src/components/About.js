import React, { useState, useEffect } from "react";
import "./About.css";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './AboutMedia.css'
import {
  faBars,
  faXmark,
  
  faFireFlameSimple,
  faIndustry,
  faLeaf,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import "./Contacts.css";

const navLinks = ["Home", "About", "Safety", "Contacts"];

function About() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [activeButton, setActiveButton] = useState("Vision");
  const navigate = useNavigate();
  const { pathname } = useLocation();


  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
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
    <div className="about">
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
      <div className="about-hero">
        {/* <div className="about-overlay"></div> */}
       

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
        {/* <h3 className="about-tagline">About Quasar</h3> */}
      </div>

      <div className="our-history">
        <div className="history-text">
          <h2>Our History</h2>
          <p>
            Founded in 2015, Quasar Energy Limited has established itself as a
            reliable and trusted supplier of LPG in the region. The company's
            commitment to quality and safety has earned it a loyal customer
            base.
          </p>
        </div>
        <div className="history-image">
          <div className="history-top">
            <img src="/assets/history.jpeg" alt="powerplant" className="history-first" />
          </div>

          <div className="history-bottom">
            <img src="/assets/history.jpeg" alt="powerplant" className="history-second" />
            <img src="/assets/history.jpeg" alt="powerplant" className="history-third" />
          </div>
        </div>
      </div>

      {/* <div className="about-us">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Quasar Energy Limited is a leading gas provider in Kenya,
            specializing in both retail and bulk LPG. The company is
            headquartered in Nairobi and operates in the city and its environs.
          </p>
        </div>
      </div> */}

      <div className="vmg">
        <div className="blobs">
          {/* <div className="shape-blob"></div> */}
          <div className="shape-blob one"></div>
          <div className="shape-blob two"></div>
          {/* <div className="shape-blob three"></div>
          <div className="shape-blob four"></div>
          <div className="shape-blob five"></div>
          <div className="shape-blob six"></div> */}
        </div>
        <div className="about-us">
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Quasar Energy Limited is a leading gas provider in Kenya,
            specializing in both retail and bulk LPG. The company is
            headquartered in Nairobi and operates in the city and its environs.
          </p>
        </div>
      </div>
        <div className="vmg-buttons">
          <div className="vision">
            <button
              className={activeButton === "Vision" ? "active-vmg" : ""}
              onClick={() => handleButtonClick("Vision")}
            >
              Vision
            </button>
          </div>

          <div className="mission">
            <button
              className={activeButton === "Mission" ? "active-vmg" : ""}
              onClick={() => handleButtonClick("Mission")}
            >
              Mission
            </button>
          </div>

          <div className="goals">
            <button
              className={activeButton === "Goals" ? "active-vmg" : ""}
              onClick={() => handleButtonClick("Goals")}
            >
              Goals
            </button>
          </div>
        </div>
        <div className="vmg-text">
          <div className="vision-text">
            {activeButton === "Vision" && (
              <p>
                Become the leading gas provider in East and Central Africa.
                Quasar Energy Limited is continuosly expanding its operations
                and exploring new growth opportunities
              </p>
            )}

            {activeButton === "Mission" && (
              <p>
                The company's mission is to be the
                leading gas company in the region, providing its customers with
                the highest quality gas products and services
              </p>
            )}

            {activeButton === "Goals" && (
              <p>
                The company's focus on innovation, sustainability, and customer
                satisfaction will remain at the core of its operations as it
                seeks to become a leading player in the LPG industry in Eastern
                Africa
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="services">
        <h2>Our Services</h2>
        <div className="service-itself">
          <div className="service">
            <div className="service-icon">
              <FontAwesomeIcon icon={faFireFlameSimple} />
            </div>
            <div className="service-text">
              <h3>Individual LPG Cylinders</h3>
              <p>Diverse sizes for household LPG needs</p>
            </div>
          </div>

          <div className="service">
            <div className="service-icon">
              <FontAwesomeIcon icon={faIndustry} />
            </div>
            <div className="service-text">
              <h3>Bulk LPG for Businesses</h3>
              <p>Supplying hotels, restaurants, and manufacturing plants</p>
            </div>
          </div>

          <div className="service">
            <div className="service-icon">
              <FontAwesomeIcon icon={faLeaf} />
            </div>
            <div className="service-text">
              <h3>Sustainability Initiatives</h3>
              <p>Investing in renewables, promoting energy efficiency</p>
            </div>
          </div>

          <div className="service">
            <div className="service-icon">
              <FontAwesomeIcon icon={faRecycle} />
            </div>
            <div className="service-text">
              <h3>Environmental Stewardship</h3>
              <p>Reducing carbon footprint through eco-friendly practices</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="about-footer">
        <h3>Ready to buy your clean energy? </h3>
       
        <button className="footer-button" onClick={() => navigate("/contacts")}>Contact Us</button>
      </div> */}
    </div>
  );
}

export default About;
