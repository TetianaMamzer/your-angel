import style from "./listSocialIcons.module.scss";
import Image from "next/image";
import instagram from "../../../public/img/iconsSocial/icon-instagram.png";
import facebook from "../../../public/img/iconsSocial/icon-facebook.png";
import telegram from "../../../public/img/iconsSocial/icon-telegram.png";
import youtube from "../../../public/img/iconsSocial/icon-youtube.png";
import viber from "../../../public/img/iconsSocial/icon-viber.png";

const icons = [
  {
    id: 1,
    src: instagram,
  },
  {
    id: 2,
    src: youtube,
  },
  {
    id: 3,
    src: facebook,
  },
  {
    id: 4,
    src: telegram,
  },
  {
    id: 5,
    src: viber,
  },
];

const ListSocialIcons = ({ size = "30" }) => {
  return (
    <ul className={style.listIcons}>
      {icons.map((icon) => {
        return (
          <li key={icon.id}>
            <Image
              src={icon.src}
              width={size}
              height={size}
              alt="social media icon"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ListSocialIcons;
