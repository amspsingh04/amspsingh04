import styles from './page.module.css';
import Link from 'next/link';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Link href="/" className={styles.navItem}>Home</Link>
        <Link href="/blogs" className={styles.navItem}>Blogs</Link>
        <Link href="/cv" className={styles.navItem}>CV</Link>

        <div className={styles.socialIcons}>
          <Link href="https://github.com/amspsingh04" className={styles.socialIcon}>
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-512.png" alt="GitHub" />
          </Link>
          <Link href="https://www.linkedin.com/in/amspsingh04" className={styles.socialIcon}>
            <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-512.png" alt="LinkedIn" />
          </Link>
          <Link href="https://twitter.com/S_P_S_4" className={styles.socialIcon}>
            <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-512.png" alt="Twitter" />
          </Link>
          <Link href="https://www.instagram.com/amspsingh04" className={styles.socialIcon}>
            <img src="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-512.png" alt="Instagram" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
