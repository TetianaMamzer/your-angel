import ListNavigation from "../../share/listNavigation/listNavigation";
import ButtonBasket from "../../share/buttonBasket/ButtonBasket";
import styles from "./MobileMenu.module.scss";

const MobileMenu = () => {
  return (
    <div className={styles.mobileMenu}>
      <ListNavigation view="menu" />
      <ButtonBasket view="menu" />
    </div>
  );
};

export default MobileMenu;
