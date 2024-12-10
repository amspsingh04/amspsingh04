import styles from './header.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>My Portfolio</h1>
      <nav className={styles.nav}>
        <Link href="/about" className={styles.navItem}>About Me</Link>
        <Link href="/blogs" className={styles.navItem}>Blogs</Link>
        <Link href="/cv" className={styles.navItem}>CV</Link>
      </nav>
    </header>
  );
};

export default Header;