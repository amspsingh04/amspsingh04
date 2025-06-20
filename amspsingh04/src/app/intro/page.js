import styles from './page.module.css';

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      {/* Rounded Image Section */}
      <div className={styles.imageWrapper}>
        <img
          src="https://avatars.githubusercontent.com/u/93045361?v=4"
          alt="Shourya Avatar"
          className={styles.avatarImage}
        />
      </div>

      {/* Main Text Section */}
      <div className={styles.centerTextSection}>
        <h3 className={styles.subtitle}>CS Senior at VITC</h3>
        <h1 className={styles.mainTitle}>Hi, I am Shourya Pratap Singh</h1>
        <h2 className={styles.subtitle}>From India</h2>
      </div>

      <div className={styles.columnsContainer}>
        <div className={styles.leftColumn}>
          <p>
            I am a fourth-year student at VIT Chennai, studying Computer Science with Specialization in Cyber Physical Systems. I am interested in technologies such as Cloud Computing, AI/ML, Data Science, Computer Vision, and Digital Twins — technologies that can be used as comprehensive solutions for real-world problems.
          </p>
        </div>
        <div className={styles.rightColumn}>
          <p>
            My research interests include:
          </p>
          <ul className={styles.projectList}>
            <li>Image Processing and Computer Vision techniques (wrt Biomedical Applications)</li>
            <li>Wearable AI Devices</li>
            <li>Speech Recognition and Language Learning</li>

          </ul>
          <p>
            I would like to expand my knowledge and explore new areas for research and better solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Intro;