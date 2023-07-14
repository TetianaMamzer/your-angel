
import styles from './page.module.scss';
import Faq from './components/faq/Faq';
import Lesson from './components/lesson/Lesson';
import Main from './components/main/Main';

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />
      <Lesson />
      <Faq />
    </main>
  );
}
