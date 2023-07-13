"use client";
import style from "./Header.module.scss";
import Container from "../../share/container/Container";
import Image from "next/image";
import img from "../../../public/img/container/main-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import ListSocialIcons from "../../share/listSocialIcons/listSocialIcons";
import ListNavigation from "../../share/listNavigation/listNavigation";

const Header = () => {
  const screenWidth = window.screen.width;
  console.log(screenWidth);

  if (screenWidth > 480) {
    console.log("sdsdsdsd");
  }
  return (
    <header className={style.header}>
      <Container>
        {screenWidth <= 480 && (
          <div className={style.headerContainer}>
            <Image src={img} alt="Main logo" className={style.mainLogo} />
            <p className={`${style.mainText} ${style.mainText_name}`}>
              Майстерня їстівних букетів “Your Angel”
            </p>
            <p className={`${style.mainText} ${style.mainText_delivery}`}>
              Кур'єрськая доставка по Полтаві
            </p>
            <p className={style.timeForWork}>
              пн-пт 9:00-19:00 сб-вс 9:00-18:00
            </p>
            <button className={style.buttonCallMe}>ПЕРЕДЗВОНІТЬ МЕНІ</button>
            <GiHamburgerMenu className={style.iconMenu} />
          </div>
        )}
        {screenWidth > 480 && screenWidth <= 768 && (
          <div className={style.headerContainer}>
            <div className={style.mainInfo}>
              <div className={style.infoAndTimeWork}>
                <p className={`${style.mainText} ${style.mainText_name}`}>
                  Майстерня їстівних букетів “Your Angel”
                </p>
                <p className={`${style.mainText} ${style.mainText_delivery}`}>
                  Кур'єрськая доставка по Полтаві
                </p>
                <p className={style.timeForWork}>
                  пн-пт 9:00-19:00 сб-вс 9:00-18:00
                </p>
              </div>
              <div className={style.logoAndButton}>
                <Image src={img} alt="Main logo" className={style.mainLogo} />
                <button className={style.buttonCallMe}>
                  ПЕРЕДЗВОНІТЬ МЕНІ
                </button>
              </div>
              <div className={style.contactsAndBasket}>
                <ListSocialIcons />
                <p className={style.contacts}>
                  +380 67 957 8784 +380 99 144 2079
                </p>
                <button className={style.buttonBasket}>КОШИК</button>
              </div>
            </div>
            <ListNavigation />
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;