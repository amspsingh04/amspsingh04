import Image from "next/image";
import styles from "./page.module.css";
import Intro from './components/Intro';
import Header from './components/Header';

const HomePage = () => {
  return (
    <main>
      <Header />
      <Intro />
    </main>
  );
};

export default HomePage;
