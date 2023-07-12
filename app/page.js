import styles from "./page.module.scss";
import Faq from "./components/faq/Faq";
import Lesson from "./components/lesson/Lesson";


export default function Home() {
  return (
    <main className={styles.main}>
      <Lesson />
      <Faq />
    </main>
  );
}
