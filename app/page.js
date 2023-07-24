"use client";

import styles from "./page.module.scss";
import Faq from "./components/faq/Faq";
import Lesson from "./components/lesson/Lesson";
import Main from "./components/main/Main";
import Search from "./components/search/Search";
import Delivery from "./components/delivery/Delivery";
import ButtonToTop from "./components/buttonToTop/ButtonToTop";
// import { useEffect, useState } from "react";

export default function Home() {
  // const [fromTop, setFromTop] = useState(0);

  /* useEffect(() => {
    window.addEventListener("scroll", listener);
    return () => window.removeEventListener("scroll", listener);
  }, []); */

  /* function listener() {
    setFromTop(window.pageYOffset);
  } */
  return (
    <main className={styles.main}>
      <ButtonToTop />
      <Main />
      <Search />
      <Lesson />
      <Faq />
      <Delivery />
    </main>
  );
}
