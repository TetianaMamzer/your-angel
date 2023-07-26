import ListNavigation from "../../share/listNavigation/listNavigation";
import ButtonBasket from "../../share/buttonBasket/ButtonBasket";
import ContactsPhones from "../../share/contactsPhones/ContactsPhones";
import ListSocialIcons from "../../share/listSocialIcons/listSocialIcons";
import styles from "./MobileMenu.module.scss";

const MobileMenu = ({ setShowModal }) => {
  const handleClickOnLink = (e) => {
    if (e.target.hasAttribute("href")) {
      setShowModal(false);
    }
  };
  return (
    <div className={styles.mobileMenu} onClick={handleClickOnLink}>
      <ListNavigation view="menu" />
      <ButtonBasket view="menu" />
      <ContactsPhones view="menu" />
      <ListSocialIcons size={30} view="menu" />
    </div>
  );
};

export default MobileMenu;
