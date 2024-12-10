"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from './header/page';
import Intro from "./intro/page";

const HomePage = () => {
  const opentab = (tabName) => {
    const tabs = document.querySelectorAll('.tab-contents');
    const tabLinks = document.querySelectorAll('.tab-links');

    tabs.forEach((tab) => {
      tab.classList.remove('active-tab');
    });

    tabLinks.forEach((link) => {
      link.classList.remove('active-link');
    });

    document.getElementById(tabName).classList.add('active-tab');
    const activeTabLink = Array.from(tabLinks).find((link) => link.textContent === tabName);
    activeTabLink.classList.add('active-link');
  };

  return (
    <main className={styles.page}>
      <Header />
      <Intro />
      <div id="header" className={styles.header}>
        <div className="container">
          <div className="parallax-container">
            <div className="parallax-content">
              <div className="header-text">
                <p>CS Sophomore at VITC</p>
                <h1> Hi, I am <span>Shourya <br />Pratap Singh</span><br /> from India</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="about" className={styles.about}>
        <div className="container">
          <div className="row">
            <div className="about-col-1">
              {/* Add your Image here */}
            </div>
            <div className="about-col-2">
              <h1 className={styles.subtitle}>About Me</h1>
              <p>
                I am a second-year student at VIT Chennai, studying Computer Science with Specialization in Cyber Physical Systems. <br />
                I am interested in technologies such as Cloud Computing, AI/ML, metaverse, computer vision, and Digital Twins - technologies which can be used as comprehensive solutions for real-world problems.<br />
                I have previously worked on certain projects like Symptoms Tracker, Social Media monitoring tool, Femunity, and I would like to know how my existing knowledge can be expanded and areas where I can research and develop newer and better solutions.
              </p>

              <div className="tab-titles">
                <p className="tab-links active-link" onClick={() => opentab('Stack')}>Stack</p>
                <p className="tab-links" onClick={() => opentab('Education')}>Education</p>
                <p className="tab-links" onClick={() => opentab('Achievements')}>Achievements</p>
              </div>

              <div className="tab-contents active-tab" id="Stack">
                <ul>
                  <li><span>Data Science</span><br />Python<br />TF Keras</li>
                  <li><span>Web Dev</span><br />HTML<br />CSS<br />JS</li>
                </ul>
              </div>

              <div className="tab-contents" id="Education">
                <ul>
                  <li><span>BTech CSE</span><br />Specializing in Cyber Physical Systems</li>
                  <li>CGPA:9.30<br />VIT Chennai 2022 - 2026</li>
                  <li><span>Class 12 - CBSE</span><br />The Orbis School, 2022<br />E-PCM-IP 94.8%</li>
                  <li><span>Class 10 - ICSE</span><br />The Bishops School, 2020<br />96.8%</li>
                </ul>
              </div>

              <div className="tab-contents" id="Achievements">
                <ul>
                  <li><span>GCCP 2022</span><br /></li>
                  <li><span>Stanford CIP 2022</span><br /></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
