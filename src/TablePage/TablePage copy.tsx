import { FC, useState } from "react";
import { table } from "console";

import PageFromPages from "./Actios/PageFromPages/PageFromPages";
import ShowPageAmount from "./Actios/ShowPageAmount/ShowPageAmount";
import TableBtn from "./Actios/TableBtn/TableBtn";
import TurnPage from "./Actios/TurnPage/TurnPage";
import SelectedAlert from "./SelectedAlert/SelectedAlert";
import Table from "./Table/Table";

import styles from "./TablePage.module.css";

const TablePage: FC<any> = ({ data }) => {
  const tableData = data.data;
  const totalAmount = tableData.length;

  const [selected, setSelected] = useState<string[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(true);
  const [showAmount, setShowAmount] = useState(1); // столько нужно отображать за раз
  const [start, setStart] = useState<number>(0); // тут я смещаю начало следующего среза данных для таблицы
  const [currentPage, setCurrentPage] = useState(1);
  let pageAmount = 1;

  if (showAmount) pageAmount = showAmount;

  const showTableDataSlice = tableData.slice(start, showAmount);
  console.log(start, showAmount);

  const handleSelected = (id: string): void => {
    const temp = [...selected];
    temp.push(id);
    setSelected([...temp]);
  };

  const handlePrevPage = () => {
    return true;
  };

  const handleNextPage = () => {
    setStart((prev) => prev + 1);
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
          <TurnPage direction="prev" onBtnClick={handlePrevPage} />
          <TurnPage direction="next" onBtnClick={handleNextPage} />
        </div>
      </div>
      <TableBtn>Добавить акцию</TableBtn>
      <Table tableData={showTableDataSlice} />
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
