import { FC } from "react";

import { IEmptyParagraphProps } from "./IEmptyParagraphProps";

import styles from "./EmptyParagraph.module.css";

const EmptyParagraph: FC<IEmptyParagraphProps> = ({ text }) => {
  return <p className={styles.empty}>{text}</p>;
};

export default EmptyParagraph;
