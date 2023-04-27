import { FC, useEffect } from "react";

import { IModalProps } from "./IModalProps";

import styles from "./Modal.module.css";

const Modal: FC<IModalProps> = ({ active, setActive, children }) => {
  const handleEsc = (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      setActive(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEsc, false);

    return () => {
      document.removeEventListener("keydown", handleEsc, false);
    };
  }, []);

  return (
    <div
      className={`${styles.modal} ${active ? styles.active : ""}`}
      onClick={() => setActive(false)}
    >
      <div className={styles.content} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
