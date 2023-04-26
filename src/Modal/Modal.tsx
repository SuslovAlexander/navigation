import styles from "./Modal.module.css";
import { FC, useEffect } from "react";
import { IModalProps } from "./IModalProps";

const Modal: FC<IModalProps> = ({ active, setActive, children }) => {
  useEffect(() => {
    document.addEventListener("keydown", handleEsc, false);

    return () => {
      document.removeEventListener("keydown", handleEsc, false);
    };
  }, []);

  const handleEsc = (e: KeyboardEvent): void => {
    if (e.key === "Escape") {
      setActive(false);
    }
  };

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
