import style from "./Header.module.scss";
import Container from "../../share/container/Container";
import Image from "next/image";
import img from "../../../public/img/container/main-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerContainer}>
          <Image src={img} alt="Main logo" className={style.mainLogo} />
          <h1 className={style.mainText}>
            <span className={style.firstPartPhrase}>
              Майстерня їстівних букетів
            </span>
            <span>“Your Angel”</span>
          </h1>
          <p className={style.mainText}>Кур'єрськая доставка по Полтаві</p>
          <p className={style.text}>пн-пт 9:00-19:00</p>
          <p className={style.text}>сб-вс 9:00-18:00</p>
          <button className={style.buttonCallMe}>ПЕРЕДЗВОНІТЬ МЕНІ</button>
          <GiHamburgerMenu className={style.iconMenu} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
