import styles from './page.module.css';
import Header from '../header/page';

const Blogs = () => {
  return (
    <div className={styles.blog}>
        <Header />
      <h1 className={styles.title}>Blogs</h1>
      <p className={styles.content}>
        Stay tuned for articles and tutorials on web development, ML, and more!
      </p>
    </div>
  );
};

export default Blogs;