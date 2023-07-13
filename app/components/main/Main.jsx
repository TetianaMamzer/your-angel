import style from "./main.module.scss";
import Container from "@/app/share/container/Container";

const Main = () => {

  return (
    <section className={style.section}>
      <Container>
        <div className={style.wrapper}>
         <h1 className={style.title}>
            Готові букети для придбання прямо зараз
         </h1>
         <button>ЛОКАЦІЇ</button>
        </div>
      </Container>
    </section>
  );
};

export default Main;
