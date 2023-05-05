import { FC } from "react";

import { ICardProps } from "./ICardProps";

import styles from "./Card.module.css";

const Card: FC<ICardProps> = ({ children }) => {
  return <div className={styles.card}>{children}</div>;
};

export default Card;
