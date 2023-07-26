import styles from "./listNavigation.module.scss";

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

const ListNavigation = ({ view }) => {
  let styleList;
  let styleItem;

  switch (view) {
    case "screen":
      styleList = styles.navigationListScreen;
      styleItem = styles.navigationItemScreen;
      break;

    case "menu":
      styleList = styles.navigationListMenu;
      styleItem = styles.navigationItemMenu;
      break;

    default:
      styleList = "";
      styleItem = "";
  }

  return (
    <ul className={styleList}>
      {navigations.map((item) => {
        return (
          <li key={item.id} className={styleItem}>
            <a href={`#${item.href}`}>{item.name}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default ListNavigation;
