import styles from './page.module.css';

const Intro = () => {
  return (
    <div className={styles.introContainer}>
      <div className={styles.centerTextSection}>
        <h2 className={styles.subtitle}>CS Junior at VITC</h2>
        <h1 className={styles.mainTitle}>Hi, I am Shourya Pratap Singh</h1>
        <h2 className={styles.subtitle}>From India</h2>
      </div>
      <div className={styles.columnsContainer}>
        <div className={styles.leftColumn}>
          <p>
            I am a third-year student at VIT Chennai, studying Computer Science with Specialization in Cyber Physical Systems. I am interested in technologies such as Cloud Computing, AI/ML, Data Science, Computer Vision, and Digital Twins — technologies that can be used as comprehensive solutions for real-world problems.
          </p>
        </div>
        <div className={styles.rightColumn}>
          <p>
            I have previously worked on projects like:
          </p>
          <ul className={styles.projectList}>
            <li>AMKR</li>
            <li>TransHRNet++</li>
            <li>ASR--</li>
            <li>Nyaya-Sahaya</li>
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
