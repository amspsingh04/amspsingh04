"use client";
import styles from './page.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navItem}>Home</Link>
        <Link href="/blogs" className={styles.navItem}>Blogs</Link>
        <Link href="/cv" className={styles.navItem}>CV</Link>
        <Link href="/logger" className={styles.navItem}>Life Log</Link>

      </nav>
    </header>
  );
};

export default Header;
