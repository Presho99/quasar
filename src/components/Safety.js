import React from "react";
import "./Safety.css";
import './SafetyMedia.css';
import "./Contacts.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardCheck,
  faBars,
  faComment,
  faExclamationTriangle,
  faTools,
faXmark,
  faLeaf,


  faHandsHelping,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = ["Home", "About", "Safety", "Contacts"];

function Safety() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();

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
    <div className="safety">
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
      <div className="safety-hero">
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
        {/* <h3>Safety Measures</h3> */}
      </div>

      <div className="safety-container">
        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faClipboardCheck} className="safety-icon-itself"/>
          </div>
          <div className="safety-text">
            <h3>Regulatory Compliance</h3>
            <p>
              Ensuring that the company adheres to all laws set by Kenyan authorities
              in the energy sector.
            </p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faTools} className="safety-icon-itself"/>
          </div>
          <div className="safety-text">
            <h3>Regular Maintenance</h3>
            <p>
            Conducting routine inspections of energy infrastructure for safety and reliability.
            </p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faExclamationTriangle} className="safety-icon-itself"/>
          </div>
          <div className="safety-text">
            <h3>Emergency Response Plans</h3>
            <p>
            Creating emergency response plans for power outages and unforeseen incidents.
            </p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faComment} className="safety-icon-itself"/>
          </div>
          <div className="safety-text">
            <h3>Customer Engagement</h3>
            <p>
            Interacting with customers to collect feedback and provide energy-related information.
            </p>
          </div>
        </div>

        {/* <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={FaGraduationCap} />
          </div>
          <div className="safety-text">
            <h3>Education and Awareness</h3>
            <p>Initiating public awareness campaigns to educate consumers about energy conservation, safety practices, and reporting procedures for emergencies</p>
          </div>
        </div> */}
        {/* 
        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faWifi} />
          </div>
          <div className="safety-text">
            <h3>Technology Integration</h3>
            <p>Employing advanced technologies, such as smart meters and grid monitoring systems, to enhance the reliability and efficiency of energy distribution and respond to issues in real-time.</p>
          </div>
        </div> */}

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faLeaf} className="safety-icon-itself"/>
          </div>
          <div className="safety-text">
            <h3>Environmental Responsibility</h3>
            <p>
              {" "}
              Promoting eco-friendly energy practices, minimizing environmental
              impact
            </p>
          </div>
        </div>

        {/* <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faSignal} />
          </div>
          <div className="safety-text">
            <h3>Investment in Infrastructure</h3>
            <p>Continuously investing in the upgrade and expansion of energy infrastructure to meet growing demand and improve service quality.</p>
          </div>
        </div> */}

        {/* <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
          </div>
          <div className="safety-text">
            <h3>Transparent Billing</h3>
            <p>Ensuring transparent and accurate billing practices to maintain customer trust and satisfaction.</p>
          </div>
        </div> */}

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faHandsHelping} className="safety-icon-itself"/>
          </div>
          <div className="safety-text">
            <h3>Community Involvement</h3>
            <p>
              Engaging with local communities through corporate social
              responsibility (CSR) initiatives
            </p>
          </div>
        </div>
      </div>
      {/* <div className="safety-footer">
        <h3>Ready to get your clean energy? </h3>
   
        <button className="footer-button">Contact Us</button>
      </div> */}
    </div>
  );
}

export default Safety;
