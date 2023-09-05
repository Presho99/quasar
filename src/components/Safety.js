import React from "react";
import "./Safety.css";
import "./Contacts.css";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClipboardCheck, faComment, faExclamationTriangle, faTools, faWifi, faLeaf, faSignal, faFileInvoiceDollar, faHandsHelping } from "@fortawesome/free-solid-svg-icons";
import { FaGraduationCap } from "react-icons/fa";
const navLinks = ["Home", "About", "Safety", "Contacts"];

function Safety() {
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
    <div className="safety">
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
        <h3>Safety Measures</h3>
      </div>

      <div className="safety-container">
        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faClipboardCheck} />
          </div>
          <div className="safety-text">
            <h3>Regulatory Compliance</h3>
            <p>Ensuring that the company adheres to all relevant laws, regulations, and standards set by Kenyan regulatory authorities related to the energy sector.</p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faTools} />
          </div>
          <div className="safety-text">
            <h3>Regular Maintenance</h3>
            <p>Conducting routine maintenance and inspections of energy infrastructure, including power generation facilities, transmission lines, and distribution networks, to identify and address potential safety hazards and ensure reliability.</p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faExclamationTriangle} />
          </div>
          <div className="safety-text">
            <h3>Emergency Response Plans</h3>
            <p>Developing and implementing comprehensive emergency response plans to address power outages, equipment failures, and other unforeseen incidents promptly and efficiently</p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faComment} />
          </div>
          <div className="safety-text">
            <h3>Customer Engagement</h3>
            <p>Engaging with customers through various channels to gather feedback, address concerns, and provide information about energy usage, billing, and safety measures.
</p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={FaGraduationCap} />
          </div>
          <div className="safety-text">
            <h3>Education and Awareness</h3>
            <p>Initiating public awareness campaigns to educate consumers about energy conservation, safety practices, and reporting procedures for emergencies</p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faWifi} />
          </div>
          <div className="safety-text">
            <h3>Technology Integration</h3>
            <p>Employing advanced technologies, such as smart meters and grid monitoring systems, to enhance the reliability and efficiency of energy distribution and respond to issues in real-time.</p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faLeaf} />
          </div>
          <div className="safety-text">
            <h3>Environmental Responsibility</h3>
            <p> Implementing environmentally responsible practices, such as minimizing the environmental impact of energy production and distribution, promoting renewable energy sources, and complying with environmental regulations.
</p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faSignal} />
          </div>
          <div className="safety-text">
            <h3>Investment in Infrastructure</h3>
            <p>Continuously investing in the upgrade and expansion of energy infrastructure to meet growing demand and improve service quality.</p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faFileInvoiceDollar} />
          </div>
          <div className="safety-text">
            <h3>Transparent Billing</h3>
            <p>Ensuring transparent and accurate billing practices to maintain customer trust and satisfaction.</p>
          </div>
        </div>

        <div className="safety-card">
          <div className="safety-icon">
            <FontAwesomeIcon icon={faHandsHelping} />
          </div>
          <div className="safety-text">
            <h3>Community Involvement</h3>
            <p>Engaging with local communities through corporate social responsibility (CSR) initiatives and community development projects.</p>
          </div>
        </div>

      
      </div>
    </div>
  );
}

export default Safety;
