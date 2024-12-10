import styles from './cv.module.css';

const CV = () => {
  return (
    <div className={styles.cv}>
      <h1 className={styles.title}>Curriculum Vitae</h1>
      <p className={styles.content}>
        Download my CV to learn more about my skills, experiences, and education.
      </p>
    </div>
  );
};

export default CV;