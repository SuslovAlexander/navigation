import { FC } from "react";

import { IPTagProps } from "./IPTagProps";

import styles from "./PTag.module.css";

const PTag: FC<IPTagProps> = ({ size, children }) => {
  const paragraphStyles =
    size === "small"
      ? styles.small
      : size === "large"
      ? styles.large
      : styles.standart;

  return <p className={paragraphStyles}>{children}</p>;
};

export default PTag;
