import { FC } from "react";

import { DirectionEnum, ITurnPageProps } from "./ITurnPageProps";

import styles from "./TurnPage.module.css";

const TurnPage: FC<ITurnPageProps> = ({ direction, onBtnClick }) => {
  return (
    <button
      onClick={onBtnClick}
      className={`${styles.btn} ${
        direction === DirectionEnum.Prev ? styles.prev : ""
      }`}
    />
  );
};

export default TurnPage;
