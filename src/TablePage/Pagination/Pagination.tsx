import { FC, useEffect, useState } from "react";

import PageFromPages from "../Actios/PageFromPages/PageFromPages";
import ShowPageAmount from "../Actios/ShowPageAmount/ShowPageAmount";
import TurnPage from "../Actios/TurnPage/TurnPage";

import { IPageActionsProps } from "./IPaginatioProps";

import styles from "./Pagination.module.css";

const Pagination: FC<IPageActionsProps> = ({ tableData, onSetSlice }) => {
  const [showAmount, setShowAmount] = useState<number>(10);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState<number>(showAmount);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const totalAmount = tableData.length;

  const fromPages = Math.ceil(totalAmount / showAmount);

  useEffect(() => {
    setEnd(showAmount);
  }, [showAmount]);

  useEffect(() => {
    onSetSlice(tableData.slice(start, end));
  }, [tableData, start, end]);

  const handleNext = (): void => {
    if (currentPage === fromPages) {
      return;
    }
    setStart((prev) => prev + showAmount);
    setEnd((prev) => prev + showAmount);
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = (): void => {
    if (currentPage === 1) {
      return;
    }
    setStart((prev) => prev - showAmount);
    setEnd((prev) => prev - showAmount);
    setCurrentPage((prev) => prev - 1);
  };

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

export default Pagination;
