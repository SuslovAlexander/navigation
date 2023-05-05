import { FC } from "react";

import { IHTagProps } from "./IHTagProps";

import styles from "./HTag.module.css";

const HTag: FC<IHTagProps> = ({ tag, children }) => {
  const Tag = tag;
  return <Tag className={styles.heading}>{children}</Tag>;
};

export default HTag;
