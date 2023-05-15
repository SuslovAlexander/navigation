import { FC } from "react";

import { INoteProps } from "./INoteProps";

import styles from "./Note.module.css";

const Note: FC<INoteProps> = ({ children }) => {
  return <p className={styles.note}>{children}</p>;
};

export default Note;
