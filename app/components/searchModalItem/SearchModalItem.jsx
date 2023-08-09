"use client";
import style from "./SearchModalItem.module.scss";
import { useState } from "react";
import StatusBar from "../../share/statusBar/StatusBar";
import Counter from "@/app/share/counter/Counter";
// import Image from "next/image";


const SearchModalItem = ({ bouquetsItem }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handlePrev = () => {
      setActiveIndex(
        (prevIndex) =>
          (prevIndex - 1 + bouquetsItem.length) % bouquetsItem.length
      );
    };

    const handleNext = () => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % bouquetsItem.length);
    };

    const ingredients = bouquetsItem[activeIndex].ingredients;

    const elements = ingredients.map((ingredient) => (
      <li key={ingredient.id} className={style.ingredient}>
        <p>{ingredient.name}</p>
      </li>
    ));
    
    return (
      <div className={style.contentWrapper}>
        <div className={style.imageWrapper}>
          <img
            className={style.image}
            src={bouquetsItem[activeIndex].imgURL}
            alt="bouquet-image"
          />
          <div className={style.btnWrapper}>
            <button className={style.btnPrev} onClick={handlePrev}>
              <span className={style.btnArrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="33"
                  height="30"
                  viewBox="0 0 33 30"
                >
                  <path d="M1.56912 13.5858C0.788074 14.3668 0.788074 15.6332 1.56912 16.4142L14.297 29.1421C15.0781 29.9232 16.3444 29.9232 17.1255 29.1421C17.9065 28.3611 17.9065 27.0948 17.1255 26.3137L5.81176 15L17.1255 3.68629C17.9065 2.90524 17.9065 1.63891 17.1255 0.857864C16.3444 0.0768156 15.0781 0.0768156 14.297 0.857864L1.56912 13.5858ZM33 13L2.98334 13V17L33 17V13Z" />
                </svg>
              </span>
            </button>
            <button className={style.btnNext} onClick={handleNext}>
              <span className={style.btnArrow}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="34"
                  height="31"
                  viewBox="0 0 34 31"
                >
                  <path d="M32.4226 16.9142C33.2036 16.1332 33.2036 14.8668 32.4226 14.0858L19.6947 1.35786C18.9136 0.576816 17.6473 0.576816 16.8662 1.35786C16.0852 2.13891 16.0852 3.40524 16.8662 4.18629L28.1799 15.5L16.8662 26.8137C16.0852 27.5948 16.0852 28.8611 16.8662 29.6421C17.6473 30.4232 18.9136 30.4232 19.6947 29.6421L32.4226 16.9142ZM0.991699 17.5H31.0084V13.5H0.991699V17.5Z" />
                </svg>
              </span>
            </button>
          </div>

          <StatusBar
            activeIndex={activeIndex}
            totalItems={bouquetsItem.length}
          />
        </div>
        <div className={style.textWrapper}>
          <div className={style.titleWrapper}>
            <p className={style.title}>"{bouquetsItem[activeIndex].name}"</p>
          </div>
          <div className={style.detailsWrapper}>
            <div className={style.ingredientslsBlock}>
              <p className={style.ingredientsTitle}>Склад:</p>
              <ul>{elements}</ul>
              <p className={style.ingredientsWarnings}>
                {bouquetsItem[activeIndex].warnings}
              </p>
              <p>{bouquetsItem[activeIndex].details}</p>
            </div>
            <div className={style.detailsBlock}>
              <ul className={style.detailsList}>
                <li>
                  <p>
                    Розмір: {bouquetsItem[activeIndex].width}смx
                    {bouquetsItem[activeIndex].height}см
                  </p>
                </li>
                <li>
                  <p>Вага: до {bouquetsItem[activeIndex].weight} кг</p>
                </li>
                <li className={style.seasonsItem}>
                  <p>Сезонність: {bouquetsItem[activeIndex].season}</p>
                </li>
                <li>
                  <p>Ціна: {bouquetsItem[activeIndex].price} грн</p>
                </li>
              </ul>
              <div>
                <Counter />
                <button className={style.orderBtn}>Замовити</button>
              </div>
            </div>
          </div>
          <p className={style.comment}>
            *букет може відрізнятися по складу на 20% у зв’язку з
            сезонністю/наявністю компонентів
          </p>
        </div>
      </div>
    );
};

export default SearchModalItem;