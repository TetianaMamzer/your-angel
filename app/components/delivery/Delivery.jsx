import Container from "@/app/share/container/Container";
import Image from "next/image";
import css from "./delivery.module.scss";

const Delivery = () => {
  return (
    <section id="delivery" className={css.deliverySection}>
      <Container>
        <div className={css.deliveryMainContainer}>
          <h2 className={css.deliveryTitle}>ДОСТАВКА</h2>
          <div className={css.deliveryImgContainer}>
            <Image />
          </div>
          <div className={css.deliveryAlignWrapper}>
            <div className={css.deliveryTextWrapper}>
              <p className={css.deliveryText}>
                Доставка у межах Полтави (з 7:00-20:00):
              </p>
              <ul className={css.deliveryList}>
                <li className={css.deliveryListItem}>7:00 - 7:59 - 350 грн</li>
                <li className={css.deliveryListItem}>
                  8:00 - 8:59 - 200-250 грн
                </li>
                <li className={css.deliveryListItem}>
                  9:00-18:29 - 70-150 грн
                </li>
                <li className={css.deliveryListItem}>
                  18:30-20:00 - 250-350 грн
                </li>
              </ul>
            </div>
            <div className={css.deliveryTextWrapper}>
              <p className={css.deliveryText}>Доставка за межами міста:</p>
              <ul className={css.deliveryList}>
                <li className={css.deliveryListItem}>
                  Relax Park Verholy - 350 грн
                </li>
                <li className={css.deliveryListItem}>м-н Садовий -100 грн</li>
                <li className={css.deliveryListItem}>
                  Гожули,Рибці,Розсошенці,Горбанівка,Щербані,Супрунівка,Н.Млини
                  - 150-250 грн
                </li>
              </ul>
              <p className={css.deliveryAdditionalInfo}>
                *Уточнюйте вартість доставки по телефону або в
                вайбері\телеграммі +380991442079.
              </p>
            </div>
          </div>
          <div className={css.deliveryNoteWrapper}>
            <ul className={css.deliveryNote}>
              <li className={css.deliveryNoteItem}>
                *Доставка за межами червоної лінії (як на фото зліва) вважається
                за містом і прораховується індивідуально.
              </li>
              <li className={css.deliveryNoteItem}>
                *Ранкові доставки оформлюємо до 19:00.
              </li>
              <li className={css.deliveryNoteItem}>
                *Замовлення прийняті після 19:00 оброблюється на наступний день.
              </li>
              <li className={css.deliveryNoteItem}>
                *Доставка в звичайні дні здійснюється протягом 2-х годин після
                оплати.
              </li>
              <li className={css.deliveryNoteItem}>
                *Проміжок доставки в святкові дні (14 лютого, 8 березня, День
                матері) складає 1-3 години в звязку з великою зайнятістю.
              </li>
            </ul>
          </div>
          <div className={css.deliveryImgContainer}>
            <Image />
          </div>
          <div>
            <p className={css.deliveryText}>
              Доставку Україною здійснюємо за допомогою Нової пошти за рахунок
              замовника.
            </p>
            <p className={css.deliveryText}>
              Уточнюйте які види букетів ми можемо відправити поштою за номером:
            </p>
            <p className={css.deliveryText}>
              +38 099 144 20 79 або +380 67 957 87 84
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Delivery;
