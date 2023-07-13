"use client";
import style from "./Header.module.scss";
import Container from "../../share/container/Container";
import Image from "next/image";
import img from "../../../public/img/container/main-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";

const Header = () => {
  const screenWidth = window.screen.width;
  console.log(screenWidth);

  return (
    <header className={style.header}>
      <Container>
        <div className={style.headerContainer}>
          <Image src={img} alt="Main logo" className={style.mainLogo} />
          <p className={`${style.mainText} ${style.mainText_name}`}>
            Майстерня їстівних букетів “Your Angel”
          </p>
          <p className={`${style.mainText} ${style.mainText_delivery}`}>
            Кур'єрськая доставка по Полтаві
          </p>
          <p className={style.timeForWork}>пн-пт 9:00-19:00 сб-вс 9:00-18:00</p>
          <button className={style.buttonCallMe}>ПЕРЕДЗВОНІТЬ МЕНІ</button>
          <GiHamburgerMenu className={style.iconMenu} />
        </div>
      </Container>
    </header>
  );
};

export default Header;
