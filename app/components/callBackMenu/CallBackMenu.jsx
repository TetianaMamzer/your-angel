import styles from "./callBackMenu.module.scss";

const CallBackMenu = () => {
  /* const handleClickOnLink = (e) => {
    if (e.target.hasAttribute("href")) {
      setShowModal(false);
    }
  }; */
  return (
    <div className={styles.callBackMenu}>
      <h1 className={styles.headline}>ВВЕДІТЬ НЕОБХІДНІ ДАНІ І З ВАМИ ЗВ’ЯЖУТЬСЯ ЗА 10 ХВИЛИН!</h1>
    </div>
  );
};

export default CallBackMenu;
