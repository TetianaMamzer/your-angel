"use client";

import style from "./buttonToTop.module.scss";

const ButtonToTop = () => {
  const toTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <button className={style.buttonToTop} onClick={toTop}>
        ВВЕРХ
      </button>
    </>
  );
};

export default ButtonToTop;
