import Image from "next/image";
import styles from "./page.module.css";
import Header from './header/page';
import Intro from "./intro/page";

const HomePage = () => {
  return (
    <main>
      <Header />
      <Intro />
    </main>
  );
};

export default HomePage;
