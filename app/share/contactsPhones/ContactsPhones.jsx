import styles from "./ContactsPhones.module.scss";

const ContactsPhones = ({ view }) => {
  let style;

  switch (view) {
    case "header":
      style = styles.contactsHeader;

      break;

    case "footer":
      style = styles.contactsFooter;

      break;

    case "menu":
      style = styles.contactsMenu;

      break;

    default:
      style = "";
  }

  return (
    <div className={style}>
      <p className={styles.contact1}>+380 67 957 8784</p>
      <p className={styles.contact2}>+380 99 144 2079</p>
    </div>
  );
};

export default ContactsPhones;
