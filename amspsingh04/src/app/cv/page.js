import styles from './page.module.css';
import Header from '../header/page';
import PdfViewer from './pdf.js';

const CV = () => {
  return (
    <div className={styles.cv}>
        <Header />
        <h1 className={styles.title}>My CV</h1>
      <p className={styles.description}>
        Below is a preview of my CV. You can also{' '}
        <a href="/cv/cv.pdf" download className={styles.downloadLink}>
          download it here
        </a>.
      </p>
      <div className={styles.pdfViewer}>
      <iframe src='./CV.pdf' />
      </div>
    </div>
  );
};

export default CV;