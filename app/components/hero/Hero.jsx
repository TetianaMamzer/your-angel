import style from "./Hero.module.scss";
import Container from "@/app/share/container/Container";

const Hero = () => {
  const location = "https://goo.gl/maps/ZJZfS61p7HjnXdkG7";

  return (
    <section className={style.section}>
      <Container>
        <div className={style.wrapper}>
          <h1 className={style.title}>
            Готові букети для придбання прямо зараз
          </h1>
          <a
            href={location}
            target="_blank"
            rel="noreferrer"
            className={style.buttonLocation}
          >
            локації
          </a>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
