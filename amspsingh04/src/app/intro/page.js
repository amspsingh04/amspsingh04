import styles from './page.module.css';

const Intro = () => {
  return (
    <div className={styles.intro}>
      <h1 className={styles.title}>Welcome to My Portfolio</h1>
      <p className={styles.description}>
        Discover my journey, projects, and blogs that reflect my passion for technology.
      </p>
    </div>
  );
};

export default Intro;