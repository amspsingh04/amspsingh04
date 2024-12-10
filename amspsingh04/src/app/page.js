"use client";

import Image from "next/image";
import styles from "./page.module.css";
import Header from './header/page';
import Intro from "./intro/page";

const HomePage = () => {
  return (
    <main className={styles.page}>
      <div id="header"><Header /></div>
      <Intro />
      
    </main>
  );
};

export default HomePage;
