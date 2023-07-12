"use client";

import style from "./faq.module.scss";
import { useState, useRef, useEffect } from "react";


const FaqItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState(0);
  const contentRef = useRef(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  const fullStyle = isOpen ? `${style.title} ${style.deg}` : style.title;
  return (
    <li className={style.item}>
      <h3 onClick={handleClick} className={fullStyle}>{question}</h3>
      <p className={style.text} ref={contentRef} style={{height: `${height}px`}}>{answer}</p>
    </li>
  );
};

const List = () => {
  return (
    <ul className={style.list}>
      <FaqItem
        question="ЯКИЙ ТЕРМІН ПРИДАТНОСТІ БУКЕТУ?"
        answer="Чим швидше ви скуштуєте букет, тим краще. Термін придатності від доби до місяця, в залежності від складу букету. Не хвилюйтеся, з букетом іде візитівка-інструкція з терміном придатності та порадами щодо 'приготування' букету"
      />
      <FaqItem
        question="ЧИ МОЖНО ПРИНЕСТИ СВОЮ ПЛЯШКУ АЛКОГОЛЮ ДО БУКЕТУ?"
        answer="Так, можно!"
      />
      <FaqItem
        question="ЧИ ПОТРІБНО СТАВИТИ БУКЕТ У ВОДУ?"
        answer="Ні, квіти в букеті вже стоять у воді, в спеціальних колбах."
      />
      <FaqItem
        question="ЯКІ УМОВИ ЗБЕРІГАННЯ БУКЕТІВ?"
        answer="Найоптимальніша температура +6 - +10 градусів"
      />
      <FaqItem
        question="ЧИ БУДЕ БУКЕТ ЗАХИЩЕНО ВІД НАВКОЛИШНЬОГО СЕРИДОВИЩА?"
        answer="Так, майже всі букети ми упаковуємо в прозору плівку, від пилу та чужих дотиків. Фруктові букети та букети в виробничій упаковці (шоколад, батончики) не упаковуємо"
      />
      <FaqItem
        question="ЯК КРАЩЕ ТРАНСПОРТУВАТИ БУКЕТ?"
        answer="Наші букети не легкі при цьому дуже тендітні, бажано транспортувати букет в руках в вертикальному положенні або в спеціальних боксах (які можна купити у нас) в горизонтальному положенні можно транспортувати лише каскадні букети"
      />
    </ul>
  );
};

export default List;
