import style from "./faq.module.scss";
import Title from "@/app/share/title/Title";
import List from "./List";
import Container from "@/app/share/container/Container";

const Faq = () => {
  return (
    <section id="faqs" className={style.wrapper}>
      <Container>
        <div className={style.faq}>
          <Title text="ЧАСТІ ПИТАННЯ" light />
          <div className={style.faq__wrapper}>
            <div className={style.faq__group}>
              <List />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Faq;
