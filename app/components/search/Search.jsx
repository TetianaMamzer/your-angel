"use client";
import style from "./Search.module.scss";
import Container from "@/app/share/container/Container";
import SearchModal from "../searchModal/SearchModal";
import { useState } from "react";
// import Image from "next/image";

import { bouquets } from "./bouquets.js";

const Search = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  
  const openModal = (item) => {
    setSelectedItem(item);
  };
  
  const elements = bouquets.map((item) => (
    <li key={item.id} className={style.item}>
      <a className={style.itemLink} onClick={() => openModal(item)}>
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
      </a>
    </li>
  ));

  return (
    <section id="search" className={style.section}>
      <Container>
        {selectedItem && (
          <SearchModal setCloseModal={setSelectedItem} item={selectedItem} />
        )}
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

// Серверна статична генерація з API

// export const getStaticProps = async () => {
//   const res = await fetch("https://");
//   const data = await res.json();

//   return {
//     props: {
//       data,
//     },
//   };
// };

export default Search;
