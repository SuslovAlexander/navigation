import { FC, useEffect, useState } from "react";

import PageFromPages from "./Actios/PageFromPages/PageFromPages";
import ShowPageAmount from "./Actios/ShowPageAmount/ShowPageAmount";
import TableBtn from "./Actios/TableBtn/TableBtn";
import TurnPage from "./Actios/TurnPage/TurnPage";
import SelectedAlert from "./SelectedAlert/SelectedAlert";
import Table from "./Table/Table";

import styles from "./TablePage.module.css";

const TablePage: FC<any> = ({ data }) => {
  const tableData = data.data; //весь массив
  const totalAmount = tableData.length; //количество элементов массива

  const [showAlert, setShowAlert] = useState<boolean>(true);

  const [showAmount, setShowAmount] = useState(1); // столько нужно отображать за раз

  const [currentSlice, setCurrentSlice] = useState<any[]>(tableData);
  const [currentPage, setCurrentPage] = useState(1);
  const [step, setStep] = useState(100);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(step);

  useEffect(() => {
    setCurrentSlice(tableData.slice(start, end));
  }, [start, end, step]);

  let pageAmount = 1;

  if (showAmount) pageAmount = showAmount;

  const handleNext = (): void => {
    setStart((prev) => prev + step);
    setEnd((prev) => prev + step);
    setCurrentPage((prev) => prev + 1);
  };

  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <ShowPageAmount amount={totalAmount} onSetAmount={setShowAmount} />
        <PageFromPages
          from={Math.ceil(totalAmount / pageAmount)}
          current={currentPage}
        />
        <div className={styles.actions}>
          <TurnPage direction="prev" onBtnClick={() => true} />
          <TurnPage direction="next" onBtnClick={handleNext} />
        </div>
      </div>
      <TableBtn>Добавить акцию</TableBtn>
      <Table tableData={currentSlice} />
      <div className={styles.popup}>
        <SelectedAlert
          points={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          isOpen={showAlert}
          onClose={() => setShowAlert(false)}
        />
      </div>
    </div>
  );
};

export default TablePage;
