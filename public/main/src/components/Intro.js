import React from 'react';
import './Intro.css';
import { Link } from 'react-router-dom';

const Intro = () => (
  <div>
    {/* Navbar */}
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/"><button className="nav-button">Home</button></Link></li>
        <li><Link to="/about"><button className="nav-button">About Me</button></Link></li>
        <li><Link to="https://drive.google.com/file/d/1QaGXKrf0Zy29eXKk1GVxNFzKdlMHsxh8/view?usp=sharing"><button className="nav-button">CV</button></Link></li>
        <li><Link to="/blogs"><button className="nav-button">Blogs</button></Link></li>
        <li><Link to="/login"><button className="nav-button">Login</button></Link></li>
      </ul>
    </nav>

    {/* Header Section */}
    <header className="header">
      <div className="header-content">
        <p>CS Junior at VITC</p>
        <h1>
          Hi, I am <span>Shourya Pratap Singh</span> from India
        </h1>
      </div>
    </header>

    {/* About Section */}
    <section id="about">
      <div className="about-section">
        <div className="about-image">
        <img src="./photo1.jpg" alt="Main Background" />
        </div>
        <div className="about-content">
          <h1>About Me</h1>
          <p>
            Passionate CS junior at VIT Chennai with a knack for AI/ML, Cloud Computing, and Computer Vision.<br></br>
            Experienced in Google Cloud Platform, MATLAB, and OpenCV. Proficient in Python and C++.
            Developed innovative projects like Nyaya - Sahaya, hostelHub, and Nirvanaaa, recognized in prestigious hackathons.<br></br>
            Co-authored a review on rhodamine probes for metal ion recognition published in Elsevier.
            Won intra VIT and national-level hackathons, IEEE YESIST12 Bangalore section, and CyberX Hackathon.<br></br>
            Actively involved in campus development initiatives and organizing committees.
            Dedicated to leveraging technology for impactful solutions and continuous learning.
          </p>
        </div>
      </div>
    </section>
  </div>
);

export default Intro;
