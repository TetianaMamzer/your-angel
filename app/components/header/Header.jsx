"use client";
import style from "./Header.module.scss";
import Container from "../../share/container/Container";
import Image from "next/image";
import imgDesktop from "../../../public/img/container/main-logo-desktop.png";
import { GiHamburgerMenu } from "react-icons/gi";
import ListSocialIcons from "../../share/listSocialIcons/listSocialIcons";
import ListNavigation from "../../share/listNavigation/listNavigation";
import { useEffect, useState } from "react";
import Modal from "../modal/Modal";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const showModalMenu = () => {
    console.log("open Modal");
    setShowModal(true);
  };

  return (
    <header className={style.header}>
      <Container>
        {showModal ? <Modal /> : null}
        {screenWidth === 0 && <p>loading</p>}
        {screenWidth > 0 && screenWidth <= 767 && (
          <div className={style.headerContainer}>
            <Image
              src={imgDesktop}
              alt="Main logo"
              className={style.mainLogo}
            />
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
            <GiHamburgerMenu
              className={style.iconMenu}
              onClick={showModalMenu}
            />
          </div>
        )}
        {screenWidth > 767 && (
          <div className={style.headerContainer}>
            <div className={style.mainInfo}>
              <div className={style.infoAndTimeWork}>
                <p className={`${style.mainText} ${style.mainText_name}`}>
                  Майстерня їстівних букетів “Your Angel”
                </p>
                <p className={`${style.mainText} ${style.mainText_delivery}`}>
                  Кур'єрська доставка по Полтаві
                </p>
                <p className={style.timeForWork}>
                  пн-пт 9:00-19:00 сб-вс 9:00-18:00
                </p>
              </div>
              <div className={style.logoAndButton}>
                <Image
                  src={imgDesktop}
                  alt="Main logo"
                  className={style.mainLogo}
                />
                {screenWidth < 1200 && (
                  <button className={style.buttonCallMe}>
                    ПЕРЕДЗВОНІТЬ МЕНІ
                  </button>
                )}
              </div>
              <div className={style.contactsAndBasket}>
                <ListSocialIcons size={screenWidth < 1200 ? 30 : 48} />
                <p className={style.contacts}>
                  <p className={style.contact1}>+380 67 957 8784</p>
                  <p className={style.contact2}>+380 99 144 2079</p>
                </p>
                {screenWidth < 1200 && (
                  <button className={style.buttonBasket}>КОШИК</button>
                )}
                {screenWidth >= 1200 && (
                  <button className={style.buttonCallMe}>
                    ПЕРЕДЗВОНІТЬ МЕНІ
                  </button>
                )}
              </div>
            </div>
            <div className={style.navigation}>
              <ListNavigation />
              {screenWidth >= 1200 && (
                <button className={style.buttonBasket}>КОШИК</button>
              )}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
