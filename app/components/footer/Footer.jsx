import style from "./Footer.module.scss";
import Container from "../../share/container/Container";
import Image from "next/image";
import img from "../../../public/img/container/main-logo.png";
// import { GiHamburgerMenu } from "react-icons/gi";

const Footer = () => {
  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footerContainer}>
          <div className={style.div1}>
            <p className={`${style.mainText} ${style.mainText_name}`}>
              Майстерня їстівних букетів “Your Angel”
            </p>
            <p className={`${style.mainText} ${style.mainText_delivery}`}>
              Кур'єрськая доставка по Полтаві
            </p>
          </div>
          <div className={style.div2}>
            <Image src={img} alt="Main logo" className={style.mainLogo} />
            <button className={style.buttonOrderBuqet}>ЗАМОВИТИ БУКЕТ</button>
          </div>
          <div className={style.div3}>
            <p className={style.contacts}>+380 67 957 8784 +380 99 144 2079</p>
            <p className={style.timeForWork}>
              пн-пт 9:00-19:00 сб-вс 9:00-18:00
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
