import style from "./search.module.scss";
import Container from "@/app/share/container/Container";

const Search = () => {
  return (
    <section id="search" className={style.section}>
      <Container>
        <h2 className={style.title}>Швидкий пошук</h2>
        <p className={style.text}>
          Діє система знижок 5%,10%,15% в залежності від загальної кількості
          замовлення однакових букетів
        </p>
        <ul className={style.list}>
          <li></li>
        </ul>
      </Container>
    </section>
  );
};

export default Search;
