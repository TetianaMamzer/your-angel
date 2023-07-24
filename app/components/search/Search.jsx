import style from "./search.module.scss";
import Container from "@/app/share/container/Container";
import { bouquets } from "./bouquets.js";

const Search = () => {
   const elements = bouquets.map((item) => (
     <li key={item.id} className={style.item}>
         <div className={style.itemTitleWrapper}>
           <h3>{item.cаtegoryName}</h3>
         </div>
         <div className={style.imageWrapper}>
           <img
             className={style.image}
             src={item.categoryURL}
             alt="category-image"
           />
         </div>
     </li>
   ));

  return (
    <section id="search" className={style.section}>
      <Container>
        <h2 className={style.title}>Швидкий пошук</h2>
        <p className={style.text}>
          Діє система знижок 5%,10%,15% в залежності від загальної кількості
          замовлення однакових букетів
        </p>
        <ul className={style.list}>{elements}</ul>
      </Container>
    </section>
  );
};

export default Search;
