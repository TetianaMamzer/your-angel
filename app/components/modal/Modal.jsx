"use client";

import { useRef, useState, useEffect } from "react";
import { createPortal } from "react-dom";

export default function Modal({ children }) {
  const ref = useRef(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    ref.current = document.querySelector("#portal");
    setMounted(true);
  }, []);

  return mounted ? createPortal(<>{children}</>, document.body) : null;
}
