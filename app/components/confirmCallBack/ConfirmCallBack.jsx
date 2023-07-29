import styles from "./confirmCallBack.module.scss";

const ConfirmCallBack = () => {
  return (
    <p className={styles.message}>
      ВАША ЗАЯВКА ПРИЙНЯТА! <br />
      ВАМ ЗАТЕЛЕФОНУЮТЬ <br />
      ПРОТЯГОМ 10 ХВИЛИН В РОБОЧІ ГОДИНИ! <br />
      ГАРНОГО ДНЯ!
    </p>
  );
};

export default ConfirmCallBack;
