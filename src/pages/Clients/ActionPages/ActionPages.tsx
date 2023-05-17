import { FC } from "react";

import PageFromPages from "../../../TablePage/Actios/PageFromPages/PageFromPages";
import ShowPageAmount from "../../../TablePage/Actios/ShowPageAmount/ShowPageAmount";
import TurnPage from "../../../TablePage/Actios/TurnPage/TurnPage";

import styles from "./ActionPages.module.css";

const ActionPages: FC<any> = ({
  totalAmount,
  setShowAmount,
  fromPages,
  currentPage,
  handlePrev,
  handleNext,
}) => {
  return (
    <div className={styles.wrap}>
      <ShowPageAmount amount={totalAmount} onSetAmount={setShowAmount} />
      <PageFromPages from={fromPages} current={currentPage} />
      <div className={styles.actions}>
        <TurnPage direction="prev" onBtnClick={handlePrev} />
        <TurnPage direction="next" onBtnClick={handleNext} />
      </div>
    </div>
  );
};

export default ActionPages;
