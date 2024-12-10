import styles from './page.module.css';
import Header from '../header/page';

const CV = () => {
  return (
    <div className={styles.cv}>
        <Header />
      <h1 className={styles.title}>Curriculum Vitae</h1>
      <p className={styles.content}>
        Download my CV to learn more about my skills, experiences, and education.
      </p>
    </div>
  );
};

export default CV;