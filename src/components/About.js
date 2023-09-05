import React, {useState, useEffect} from 'react'
import './About.css'
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faXmark,
  faArrowRight,
  faArrowRightLong,
  faFireFlameSimple,
  faIndustry,
  faLeaf,
  faRecycle,
} from "@fortawesome/free-solid-svg-icons";
import "./Contacts.css";

const navLinks = ["Home", "About", "Safety", "Contacts"];


function About() {
    const [isMenu, setIsMenu] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const header = "/assets/skyline.jpeg";
  const showMenu = () => {
    setIsMenu(!isMenu);
  };
  const inlineStyles = {
    backgroundImage: `url(${header})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom",
    backgroundSize: "cover",
  };
  return (
    <div className='about'>
        <div className='blob'></div>
       
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
        <h3>About Quasar</h3>
      </div>

      <div className='our-history'>
        <div className='history-text'>
          <p>Founded in 2015, Quasar Energy Limited has established itself as a reliable and trusted supplier of LPG in th region. The company's commitment to quality and safety has earned it a loyal customer base, which includes residential, commrcial, and industrial clients</p>
        </div>
        <div className='history-image'>
          <img src="/assets/history.jpeg"/>
        </div>
      </div>

      <div className='about-us'>
        <div className='about-image'>
          <img src="/assets/about.jpeg"/>
        </div>
        <div className='about-text'>
          <p>Quasar Energy Limited is a leading gas provider in Kenya, specializing in both retail and bulk LPG. The company is headquartered in Nairobi and operates in the city and its environs, with plans to expand to other parts of the country and the Eastern African market at large.</p>
        </div>
      </div>

      <div className='vmg'>
        <div className='vision'>
          <h3>Vision</h3>
          <div className='vision-text'>
            <p>Become the leading gas provider in East and Central Africa. Quasar Energy LImited is continuosly expanding its operations and exploring new growth opportunities</p>
          </div>
        </div>

        <div className='mission'>
          <h3>Mission</h3>
          <div className='mission-text'>
            <p>Quasar Energy Limited has quickly established itself as a major player in the energy sector. The company's mission is to be the leading gas company in the region, providing its customers with the highest quality gas products and services</p>
          </div>
        </div>

        <div className='goals'>
          <h3>Goals</h3>
          <div className='goals-text'>
            <p>The company's focus on innovation, sustainability, and customer satisfaction will remain at the core of its operations as it seeks to become a leading player in the LPG industry in Eastern Africa</p>
          </div>
        </div>
      </div>

      <div className='services'>
       <div className='service-one'>
         <div className='service-icon'>
           <FontAwesomeIcon icon={faFireFlameSimple}/>
         </div>
         <div className='service-text'>
           <h3>Individual LPG Cylinders</h3>
           <p>Diverse sizes for household LPG needs</p>
         </div>
       </div>

       <div className='service-two'>
         <div className='service-icon'>
           <FontAwesomeIcon icon={faIndustry}/>
         </div>
         <div className='service-text'>
           <h3>Bulk LPG for Businesses</h3>
           <p>Supplying hotels, restaurants, and manufacturing plants</p>
         </div>
       </div>

       <div className='service-three'>
         <div className='service-icon'>
           <FontAwesomeIcon icon={faLeaf}/>
         </div>
         <div className='service-text'>
           <h3>Sustainability Initiatives</h3>
           <p>Investing in renewables, promoting energy efficiency</p>
         </div>
       </div>

       <div className='service-four'>
         <div className='service-icon'>
           <FontAwesomeIcon icon={faRecycle}/>
         </div>
         <div className='service-text'>
           <h3>Environmental Stewardship</h3>
           <p>Reducing carbon footprint through eco-friendly practices</p>
         </div>
       </div>

      </div>
    </div>
  )
}

export default About