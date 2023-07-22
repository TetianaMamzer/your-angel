import style from "./listNavigation.module.scss";

const navigations = [
  {
    id: 1,
    name: "ШВИДКИЙ ПОШУК",
  },
  {
    id: 2,
    name: "МАЙСТЕР-КЛАСИ",
  },
  {
    id: 3,
    name: "ВІДГУКИ",
  },
  {
    id: 4,
    name: "ЧАСТІ ПИТАННЯ",
  },
  {
    id: 5,
    name: "ДОСТАВКА",
  },
];

const ListNavigation = () => {
  return (
    <ul className={style.listNavigation}>
      {navigations.map((item) => {
        return (
          <li key={item.id} className={style.navigationItem}>
            <p>{item.name}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default ListNavigation;
