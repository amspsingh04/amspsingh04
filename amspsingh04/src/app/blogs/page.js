import styles from './page.module.css';

const Blogs = () => {
  return (
    <div className={styles.blog}>
      <h1 className={styles.title}>Blogs</h1>
      <p className={styles.content}>
        Stay tuned for articles and tutorials on web development, design patterns, and more!
      </p>
    </div>
  );
};

export default Blogs;