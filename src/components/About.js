import React, {useState, useEffect} from 'react'
import './About.css'
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
  faArrowRightLong,
} from "@fortawesome/free-solid-svg-icons";

const navLinks = ["Home", "About", "Projects", "Team", "Contacts"];


function About() {
    const [isMenu, setIsMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const showMenu = () => {
    setIsMenu(!isMenu);
  };
  return (
    <div className='about'>
        <div className='blob'></div>
        {isMenu && (
        <div className="small-menu">
          <div className="small-menu-card">
            <button className="button-xmark x">
              <FontAwesomeIcon
                icon={faXmark}
                className="xmark"
                onClick={showMenu}
              />
            </button>
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
      )}
       <div className="top-menu">
        <div className="logo">
          <h4>Precious Omondi&#169;</h4>
        </div>
        <div className="nav">
          {isSmallScreen ? (
            <FontAwesomeIcon
              icon={faBars}
              onClick={showMenu}
              style={{ cursor: "pointer" }}
            />
          ) : (
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
          )}
        </div>
      </div>

    </div>
  )
}

export default About