import React, { useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import { FaBars, FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa"; // Social Icons
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showOffcanvas, setShowOffcanvas] = useState(false);

  return (
    <div>
      {/* Existing Content */}
      <div className="home-container">
        {/* Navbar */}
        <nav className="navbar">
          <div className="nav-left">
            <FaBars className="menu-icon" onClick={() => setShowOffcanvas(!showOffcanvas)} />
            <span className="logo">Smart Docs</span>
          </div>
          <ul className={`nav-links ${showMenu ? "show" : ""}`}>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
          </ul>
        </nav>

        {/* Offcanvas Menu */}
        <div className={`offcanvas-menu ${showOffcanvas ? "open" : ""}`}>
          <button className="close-btn" onClick={() => setShowOffcanvas(false)}>×</button>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/require-documents">Required Documents</Link></li>
            <li><Link to="/my-requirements">My Requirements</Link></li>
            <li><Link to="/uploaded-documents">Uploaded Documents</Link></li>
            <li><Link to="/admin-panel">Admin Panel</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
            <li><Link to="/feedback">Feedback</Link></li>
            <li><Link to="/logout">Logout</Link></li>
          </ul>
        </div>

        {/* Background with shadow and tagline */}
        <div className="content">
          <h1>Smart Docs makes your document verification easy</h1>
        </div>
      </div>

      {/* About Us Section */}
      <div className="about-section">
        <h2 className="about-title">About Us</h2>
        <p className="about-text">
          Smart Docs is a modern, AI-powered digital document management system that simplifies the verification and processing of official documents. 
          Our platform enables seamless document requests, AI-based verification, real-time tracking, and secure uploads. 
        </p>
      </div>

      {/* What We Provide Section */}
      <div className="provide-section">
        <h2 className="provide-title">What We Provide?</h2>
        <div className="cards-container">
          {[
            { src: require("./images/admission.png"), title: "Admission Form", text: "Easily apply for admissions with our hassle-free online form submission." },
            { src: require("./images/bonafide.webp"), title: "Bonafide Certificate", text: "Get your bonafide certificate instantly for academic or official purposes." },
            { src: require("./images/degree.webp"), title: "Degree Certificate", text: "Access your verified degree certificate digitally with enhanced security." },
          ].map((service, index) => (
            <div key={index} className="card">
              <img src={service.src} alt={service.title} className="card-image" />
              <h3 className="card-title">{service.title}</h3>
              <p className="card-text">{service.text}</p>
              <button className="card-btn">Learn More</button>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Section */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section company-info">
            <h3>Smart Docs</h3>
            <p>Secure & Fast Document Verification</p>
          </div>
          <div className="footer-section quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><Link to="/faq">FAQ</Link></li>
            </ul>
          </div>
          <div className="footer-section contact-info">
            <h3>Contact Us</h3>
            <p>Email: support@smartdocs.com</p>
            <p>Phone: +1 234 567 890</p>
          </div>
          <div className="footer-section social-media">
            <h3>Follow Us</h3>
            <div className="social-icons">
              <FaFacebook className="social-icon" />
              <FaTwitter className="social-icon" />
              <FaInstagram className="social-icon" />
              <FaLinkedin className="social-icon" />
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2025 Smart Docs. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
