import style from "./lesson.module.scss";
import Title from "@/app/share/title/Title";
import Link from "next/link";
import YouTubeVideo from "./youtube";
import Container from "@/app/share/container/Container";

const Lesson = () => {
  const videoId = "YEVskFzq_L0";
  return (
    <section id="masters" className={style.wrapper}>
      <Container>
        <div className={style.lesson}>
          <Title text="МАЙСТЕР - КЛАСИ" light />
          <div className={style.lesson__wrapper}>
            <div className={style.lesson__video}>
              <YouTubeVideo videoId={videoId} />
            </div>
            <div className={style.lesson__group}>
              <ul>
                <li className={style.lesson__item}>
                  - святкові тематичні майстер класи
                </li>
                <li className={style.lesson__item}>
                  - корпоративні майстер класи
                </li>
                <li className={style.lesson__item}>
                  - групове навчання food флористиці{" "}
                </li>
                <li className={style.lesson__item}>
                  - індивідуальне навчання food флористиці
                </li>
                <li className={style.lesson__item}>
                  - безкоштовні <Link href="">майстер класи</Link>
                </li>
                <li className={style.lesson__item}>
                  - блокнот-шпаргалка food флориста
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Lesson;
