"use client";
import style from "./Footer.module.scss";
import Container from "../../share/container/Container";
import Image from "next/image";
import img from "../../../public/img/container/main-logo.png";
import { useEffect, useState } from "react";
import ListSocialIcons from "../../share/listSocialIcons/listSocialIcons";
import ContactsPhones from "../../share/contactsPhones/ContactsPhones";
const Footer = () => {
  const [screenWidth, setScreenWidth] = useState(0);
  useEffect(() => {
    setScreenWidth(window.innerWidth);
  }, []);

  return (
    <footer className={style.footer}>
      <Container>
        <div className={style.footerContainer}>
          <div className={style.div1}>
            <p className={`${style.mainText} ${style.mainText_name}`}>
              Майстерня їстівних букетів “Your Angel”
            </p>
            <p className={`${style.mainText} ${style.mainText_delivery}`}>
              Кур'єрська доставка по Полтаві
            </p>
            {screenWidth > 767 && screenWidth < 1200 && (
              <p className={`${style.mainText} ${style.mainText_politics}`}>
                Політика конфіденційності
              </p>
            )}
            {screenWidth >= 1200 && (
              <p className={style.timeForWork}>
                пн-пт 9:00-19:00 сб-вс 9:00-18:00
              </p>
            )}
          </div>
          <div className={style.div2}>
            <Image src={img} alt="Main logo" className={style.mainLogo} />
            <button className={style.buttonOrderBuqet}>ЗАМОВИТИ БУКЕТ</button>
          </div>
          <div className={style.div3}>
            <ContactsPhones view="footer" />
            {screenWidth < 1200 && (
              <p className={style.timeForWork}>
                пн-пт 9:00-19:00 сб-вс 9:00-18:00
              </p>
            )}
            {screenWidth >= 1200 && <ListSocialIcons size="60" />}
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
