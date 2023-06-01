import { FC } from "react";

import { IPTagProps } from "./IPTagProps";

import styles from "./PTag.module.css";

const PTag: FC<IPTagProps> = ({ size, children }) => {
  const getTagStyles = (tagSize: string): string => {
    switch (tagSize) {
      case "small":
        return styles.small;
      case "large":
        return styles.large;
      default:
        return styles.standart;
    }
  };

  const paragraphStyles = getTagStyles(size as string);

  return <p className={paragraphStyles}>{children}</p>;
};

export default PTag;
