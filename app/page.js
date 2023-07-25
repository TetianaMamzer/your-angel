import styles from "./page.module.scss";
import Faq from "./components/faq/Faq";
import Lesson from "./components/lesson/Lesson";
import Main from "./components/main/Main";
import Search from "./components/search/Search";
import Delivery from "./components/delivery/Delivery";
import Modal from "./components/modal/Modal";

export default function Home() {
  return (
    <main className={styles.main}>
      <Main />
      <Search />
      <Lesson />
      <Faq />
      <Delivery />
    </main>
  );
}
