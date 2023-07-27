"use client";

import { AiOutlineCloseCircle } from "react-icons/ai";
import styles from "./ModalWindow.module.scss";
import { useEffect } from "react";

export default function ModalWindow({
  setShowModal,
  setShowCallBackMenu,
  children,
}) {
  useEffect(() => {
    const closeModal = (e) => {
      if (
        e.target.getAttribute("class")?.includes("backdrop") ||
        e.code === "Escape"
      ) {
        setShowModal(false);
        setShowCallBackMenu(false);
      }
    };

    const body = document.querySelector("body");
    body.style.overflow = "hidden";
    window.addEventListener("click", closeModal);
    window.addEventListener("keydown", closeModal);
    return () => {
      window.removeEventListener("keydown", closeModal);
      window.removeEventListener("click", closeModal);
      body.style.overflow = "auto";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setShowModal]);

  return (
    <div className={styles.backdrop}>
      <AiOutlineCloseCircle
        className={styles.closeModalIcon}
        onClick={() => {
          setShowModal(false);
        }}
      />
      <div className={styles.modal}>{children}</div>
    </div>
  );
}
