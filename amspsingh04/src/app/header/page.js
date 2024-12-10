import styles from './page.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>amspsingh04</h1>
      <nav className={styles.nav}>
        <Link href="/blogs" className={styles.navItem}>Blogs</Link>
        <Link href="/cv" className={styles.navItem}>CV</Link>

      </nav>
    </header>
  );
};

export default Header;