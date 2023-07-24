import style from "./listNavigation.module.scss";

const navigations = [
  {
    id: 1,
    href: "search",
    name: "ШВИДКИЙ ПОШУК",
  },
  {
    id: 2,
    href: "masters",
    name: "МАЙСТЕР-КЛАСИ",
  },
  {
    id: 3,
    href: "reviews",
    name: "ВІДГУКИ",
  },
  {
    id: 4,
    href: "faqs",
    name: "ЧАСТІ ПИТАННЯ",
  },
  {
    id: 5,
    href: "delivery",
    name: "ДОСТАВКА",
  },
];

const ListNavigation = () => {
  return (
    <ul className={style.listNavigation}>
      {navigations.map((item) => {
        return (
          <li key={item.id} className={style.navigationItem}>
            <a href={`#${item.href}`}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default ListNavigation;
