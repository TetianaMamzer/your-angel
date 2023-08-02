import styles from "./page.module.scss";
import Faq from "./components/faq/Faq";
import Lesson from "./components/lesson/Lesson";
import Hero from "./components/hero/Hero";
import Search from "./components/search/Search";
import Delivery from "./components/delivery/Delivery";
import ButtonToTop from "./components/buttonToTop/ButtonToTop";

export default function Home() {
  return (
    <main className={styles.main}>
      <ButtonToTop />
      <Hero />
      <Search />
      <Lesson />
      <Faq />
      <Delivery />
    </main>
  );
}
