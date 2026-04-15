"use client";

import Link from "next/link";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navItem}>
          Home
        </Link>
        <Link href="/blogs" className={styles.navItem}>
          Blogs
        </Link>
        <Link href="/football" className={styles.navItem}>
          Football
        </Link>
        <Link href="/cv" className={styles.navItem}>
          CV
        </Link>
      </nav>
    </header>
  );
}
