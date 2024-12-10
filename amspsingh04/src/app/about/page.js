import styles from './page.module.css';

const AboutMe = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>About Me</h1>
      <p className={styles.content}>
        Hello! I am a passionate developer who loves to explore new technologies and
        create impactful solutions. Welcome to my portfolio.
      </p>
    </div>
  );
};

export default AboutMe;


