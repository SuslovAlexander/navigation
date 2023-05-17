import { FC } from "react";

import { ITextareaProps } from "./ITextareaProps";

import styles from "./Textarea.module.css";

const Textarea: FC<ITextareaProps> = ({ placeholder, value }) => {
  return (
    <textarea
      className={styles.textarea}
      placeholder={placeholder}
      defaultValue={value}
    ></textarea>
  );
};

export default Textarea;
