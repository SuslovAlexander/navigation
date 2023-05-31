import { FC } from "react";

import { ITextareaProps } from "./ITextareaProps";

import styles from "./Textarea.module.css";

const Textarea: FC<ITextareaProps> = ({
  placeholder,
  value,
  onChange,
  disabled,
}) => {
  return (
    <textarea
      tabIndex={0}
      onChange={(e) => onChange(e.target.value)}
      className={styles.textarea}
      placeholder={placeholder}
      value={value}
      disabled={disabled}
    />
  );
};

export default Textarea;
