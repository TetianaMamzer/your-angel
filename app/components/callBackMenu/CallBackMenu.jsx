"use client";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import styles from "./callBackMenu.module.scss";

const CallBackMenu = ({ setShowModal }) => {
  const CallBackSchema = Yup.object().shape({
    name: Yup.string().required("Будь ласка, введіть Ваше ім'я"),
    phone: Yup.string().required("Будь ласка, введіть Ваш контактний телефон"),
    email: Yup.string(),
  });

  const submitForm = (values, actions) => {
    actions.resetForm();
    setShowModal(false);
  };

  return (
    <div className={styles.callBackMenu}>
      <h1 className={styles.headline}>
        ВВЕДІТЬ НЕОБХІДНІ ДАНІ І З ВАМИ ЗВ’ЯЖУТЬСЯ ЗА 10 ХВИЛИН!
      </h1>
      <Formik
        initialValues={{ name: "", phone: "", email: "" }}
        validationSchema={CallBackSchema}
        onSubmit={submitForm}
      >
        <Form className={styles.form}>
          <label className={styles.label}>
            <Field name="name" className={styles.input} placeholder="ІМ'Я" />
            <p className={styles.nessesaryField}>*це обов’язкове поле</p>
            {/* <ErrorMessage
              name="name"
              render={(message) => (
                <div className={styles.errorValidation}>{message}</div>
              )}
            /> */}
          </label>
          <label className={styles.label}>
            <Field
              name="phone"
              className={`${styles.input} ${styles.inputPhone}`}
              placeholder="ТЕЛЕФОН (098 76 54 321)"
            />
            <p className={styles.nessesaryField}>*це обов’язкове поле</p>
            {/* <ErrorMessage
              name="phone"
              render={(message) => (
                <div className={styles.errorValidation}>{message}</div>
              )}
            /> */}
          </label>
          <label className={styles.label}>
            <Field
              name="email"
              className={styles.input}
              placeholder="ЕЛ. ПОШТА"
            />
            <p className={styles.nessesaryField}></p>
            {/* <ErrorMessage
              name="email"
              render={(message) => (
                <div className={styles.errorValidation}>{message}</div>
              )}
            /> */}
          </label>
          <button type="submit" className={styles.submit}>
            ЗАМОВИТИ
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default CallBackMenu;
