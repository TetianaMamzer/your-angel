import styles from "./confirmCallBack.module.scss";

const ConfirmCallBack = ({ children }) => {
  return (
    <div className={styles.confirmCallBack}>
      {children}
      <p className={styles.message}>
        ВАША ЗАЯВКА ПРИЙНЯТА! <br />
        ВАМ ЗАТЕЛЕФОНУЮТЬ <br />
        ПРОТЯГОМ 10 ХВИЛИН В РОБОЧІ ГОДИНИ! <br />
        ГАРНОГО ДНЯ!
      </p>
    </div>
  );
};

export default ConfirmCallBack;
