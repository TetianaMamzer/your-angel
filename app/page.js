
import styles from './page.module.scss';
import Faq from './components/faq/Faq';
import Lesson from './components/lesson/Lesson';
import Main from './components/main/Main';
import Delivery from './components/delivery/Delivery';

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />
      <Lesson />
      <Faq />
      <Delivery/>
    </main>
  );
}
