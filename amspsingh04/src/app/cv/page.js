import styles from './page.module.css';
import Header from '../header/page';

const CV = () => {
  return (
    <div className={styles.cv}>
        <Header />
        <h1 className={styles.title}>My CV</h1>
      <p className={styles.description}>
        Below is a preview of my CV. You can also{' '}
        <a href="/CV.pdf" download className={styles.downloadLink}>
          download it here
        </a>.
      </p>
      <br></br>
      <div className={styles.pdfViewer}>
        <iframe 
          src='/CV.pdf' 
          width="100%" 
          height="600px" 
          title="CV" 
        />
      </div>
    </div>
  );
};

export default CV;
