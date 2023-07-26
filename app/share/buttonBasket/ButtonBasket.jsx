import styles from "./ButtonBasket.module.scss";

const ButtonBasket = ({ view }) => {
  let style;

  switch (view) {
    case "screen":
      style = styles.buttonBasketScreen;

      break;

    case "menu":
      style = styles.buttonBasketMenu;

      break;

    default:
      style = "";
  }

  return <button className={style}>КОШИК</button>;
};

export default ButtonBasket;
