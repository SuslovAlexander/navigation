import { FC, useEffect, useState } from "react";

import PageFromPages from "../Actios/PageFromPages/PageFromPages";
import ShowPageAmount from "../Actios/ShowPageAmount/ShowPageAmount";
import TurnPage from "../Actios/TurnPage/TurnPage";

import { IPageActionsProps } from "./IPageActionsProps";

import styles from "./PageActions.module.css";

const PageActions: FC<IPageActionsProps> = ({ length, onSetSlice }) => {
  const [currentSlice, setCurrentSlice] = useState<any>([0, 1]);
  const [displayItems, setDisplayItems] = useState<number>(10);
  const [from, setFrom] = useState<number>(1);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const val = Math.ceil(length / displayItems);
    setFrom(val);
    onSetSlice(currentSlice);
  }, [displayItems, currentSlice]);

  const handleNext = (): void => {
    const startSlice = currentSlice[0] + displayItems;
    const endSlice = currentSlice[1] + displayItems;
    setCurrentSlice([startSlice, endSlice]);
    setCurrentPage((prev) => prev + 1);
  };
  const handlePrev = (): void => {
    const startSlice = currentSlice[0] - displayItems;
    const endSlice = currentSlice[1] - displayItems;
    setCurrentSlice([startSlice, endSlice]);
    setCurrentPage((prev) => prev - 1);
  };

  return (
    <div className={styles.wrap}>
      <ShowPageAmount
        amount={length}
        onSetAmount={(val: number) => setDisplayItems(val)}
      />
      <PageFromPages from={from} current={currentPage} />
      <div className={styles.actions}>
        <TurnPage direction="prev" onBtnClick={handlePrev} />
        <TurnPage direction="next" onBtnClick={handleNext} />
      </div>
    </div>
  );
};

export default PageActions;
