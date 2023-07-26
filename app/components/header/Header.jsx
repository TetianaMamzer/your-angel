"use client";
import styles from "./Header.module.scss";
import Container from "../../share/container/Container";
import Image from "next/image";
import imgDesktop from "../../../public/img/container/main-logo-desktop.png";
import { GiHamburgerMenu } from "react-icons/gi";
import ListSocialIcons from "../../share/listSocialIcons/listSocialIcons";
import ListNavigation from "../../share/listNavigation/listNavigation";
import { useEffect, useState } from "react";
import ModalWindow from "../modalWindow/ModalWindow";
import MobileMenu from "../mobileMenu/MobileMenu";
import ButtonBasket from "../../share/buttonBasket/ButtonBasket";
import ContactsPhones from "../../share/contactsPhones/ContactsPhones";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  const showModalMenu = () => {
    setShowModal(true);
  };

  return (
    <header className={styles.header}>
      <Container>
        {showModal ? (
          <ModalWindow setShowModal={setShowModal}>
            <MobileMenu setShowModal={setShowModal} />
          </ModalWindow>
        ) : null}
        {screenWidth === 0 && <p>loading</p>}
        {screenWidth > 0 && screenWidth <= 767 && (
          <div className={styles.headerContainer}>
            <Image
              src={imgDesktop}
              alt="Main logo"
              className={styles.mainLogo}
            />
            <p className={`${styles.mainText} ${styles.mainText_name}`}>
              Майстерня їстівних букетів “Your Angel”
            </p>
            <p className={`${styles.mainText} ${styles.mainText_delivery}`}>
              Кур'єрськая доставка по Полтаві
            </p>
            <p className={styles.timeForWork}>
              пн-пт 9:00-19:00 сб-вс 9:00-18:00
            </p>
            <button className={styles.buttonCallMe}>ПЕРЕДЗВОНІТЬ МЕНІ</button>
            <GiHamburgerMenu
              className={styles.iconMenu}
              onClick={showModalMenu}
            />
          </div>
        )}
        {screenWidth > 767 && (
          <div className={styles.headerContainer}>
            <div className={styles.mainInfo}>
              <div className={styles.infoAndTimeWork}>
                <p className={`${styles.mainText} ${styles.mainText_name}`}>
                  Майстерня їстівних букетів “Your Angel”
                </p>
                <p className={`${styles.mainText} ${styles.mainText_delivery}`}>
                  Кур'єрська доставка по Полтаві
                </p>
                <p className={styles.timeForWork}>
                  пн-пт 9:00-19:00 сб-вс 9:00-18:00
                </p>
              </div>
              <div className={styles.logoAndButton}>
                <Image
                  src={imgDesktop}
                  alt="Main logo"
                  className={styles.mainLogo}
                />
                {screenWidth < 1200 && (
                  <button className={styles.buttonCallMe}>
                    ПЕРЕДЗВОНІТЬ МЕНІ
                  </button>
                )}
              </div>
              <div className={styles.contactsAndBasket}>
                <ListSocialIcons size={screenWidth < 1200 ? 30 : 48} />
                <ContactsPhones view="header" />
                {screenWidth < 1200 && <ButtonBasket view="screen" />}
                {screenWidth >= 1200 && (
                  <button className={styles.buttonCallMe}>
                    ПЕРЕДЗВОНІТЬ МЕНІ
                  </button>
                )}
              </div>
            </div>
            <div className={styles.navigation}>
              <ListNavigation view="screen" />
              {screenWidth >= 1200 && <ButtonBasket view="screen" />}
            </div>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Header;
