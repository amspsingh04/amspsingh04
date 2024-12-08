import React from 'react';
import './aboutme.css'; // Make sure to create this file for styling
import { Link } from 'react-router-dom';

const AboutMe = () => (
  <div className="about-me">
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/"><button className="nav-button">Home</button></Link></li>
        <li><Link to="/about"><button className="nav-button">About Me</button></Link></li>
        <li><Link to="https://drive.google.com/file/d/1QaGXKrf0Zy29eXKk1GVxNFzKdlMHsxh8/view?usp=sharing"><button className="nav-button">CV</button></Link></li>
        <li><Link to="/blogs"><button className="nav-button">Blogs</button></Link></li>
        <li><Link to="/login"><button className="nav-button">Login</button></Link></li>
      </ul>
    </nav>
    <h2>About Me</h2>
    <p>Welcome to my timeline! Here's a glimpse into my journey:</p>
    <div className="timeline">
    <div className="timeline-item">
        <div className="timeline-date">May 2024</div>
        <div className="timeline-content">
          <h3>Intern @ NTU</h3>
          <p>Interned at the CIBILab in NTU</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">August 2023</div>
        <div className="timeline-content">
          <h3>Paper Published</h3>
          <p>Got published at: https://doi.org/10.1016/j.ccr.2023.215371</p>
        </div>
      </div>
      <div className="timeline-item highlight">
        <div className="timeline-date">July 2022</div>
        <div className="timeline-content">
          <h3>CBSE Class XII</h3>
          <p>Graduated from Orbis</p>
        </div>
      </div>
      <div className="timeline-item">
        <div className="timeline-date">July 2020</div>
        <div className="timeline-content">
          <h3>ICSE Class X</h3>
          <p>Graduated from Bishops</p>
        </div>
      </div>
      
    </div>
  </div>
);

export default AboutMe;
