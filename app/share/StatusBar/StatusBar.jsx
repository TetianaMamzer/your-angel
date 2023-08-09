import style from "./StatusBar.module.scss";

const StatusBar = ({ activeIndex, totalItems }) => {
  const dots = Array.from({ length: totalItems }, (_, index) => (
    <span
      key={index}
      className={`${style.dot} ${index === activeIndex ? style.active : ""}`}
    ></span>
  ));

  return <div className={style.statusBar}>{dots}</div>;
};

export default StatusBar;
