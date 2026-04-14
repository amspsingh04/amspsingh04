import styles from "./page.module.css";
import Intro from "@/components/Intro";

export default function HomePage() {
  return (
    <main className={styles.page}>
      <Intro />
    </main>
  );
}
