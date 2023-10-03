import React from "react";
import "./Safety.css";
import './SafetyMedia.css';
import './Infographics.css'
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

const navLinks = ["Home", "About", "Services", "Contacts"];

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
   
      </div>
      {/* safety infographics */}
      <div class="graphic-container">
  
  <div class="center-circles-container">
    
{/* <!--  single    --> */}
    <div class="single">
      <div class="circle moja">
        <div class="dot"></div>
        <div class="icon">
          <i class="far fa-building">1</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>1 Location</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
          </div>
        </div>
      </div>
    </div>
{/* <!--   double   --> */}
    <div class="double">
      <div class="circle mbili">
        <div class="icon">
          <i class="far fa-building">2</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>2 Location</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
          </div>
        </div>
        </div>
      <div class="circle tatu">
        <div class="icon">
          <i class="far fa-building">3</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>3 Location</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
          </div>
        </div>
        </div>
    </div>
{/* <!--   double   --> */}
    <div class="double">
      <div class="circle nne">
        <div class="dot"></div>
        <div class="icon">
          <i class="far fa-building">4</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>4 Location</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
          </div>
        </div>
        </div>
      <div class="circle tano">
        <div class="icon">
          <i class="far fa-building">5</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>5 Location</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
          </div>
        </div>
        </div>
    </div>
{/* single */}
    <div class="single">
      <div class="circle sita">
        <div class="dot"></div>
        <div class="icon">
          <i class="far fa-building">6</i>
        </div>
        <div class="content-container">
          <div class="line"></div>
          <h2>6 Location</h2>
          <div class="content">
            <h3>option infographic</h3>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error similique unde eius magnam, aliquam ducimus!</p>
          </div>
        </div>
        </div>
    </div>
    
  </div>
  
</div>

      
    </div>
  );
}

export default Safety;
