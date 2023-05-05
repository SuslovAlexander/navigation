import { FC, useEffect, useState } from "react";

import Button from "../components/UI/Button/Button";
import Table from "../components/UI/Table/Table";

import PageFromPages from "./Actios/PageFromPages/PageFromPages";
import ShowPageAmount from "./Actios/ShowPageAmount/ShowPageAmount";
import TurnPage from "./Actios/TurnPage/TurnPage";
import SelectedAlert from "./SelectedAlert/SelectedAlert";
import { ITablePageProps, TtableData } from "./ITablePageProps";

import styles from "./TablePage.module.css";

const TablePage: FC<ITablePageProps> = ({ data }) => {
  const [tableData, setTableData] = useState(data.data);
  const [showAmount, setShowAmount] = useState<number>(1);
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState<number>(showAmount);
  const [currentSlice, setCurrentSlice] = useState<TtableData>(tableData);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const totalAmount = tableData.length;
  const fromPages = Math.ceil(totalAmount / showAmount);

  const [toggleSelectAll, setToggleSelectAll] = useState(true);

  useEffect(() => {
    setEnd(showAmount);
  }, [showAmount]);

  useEffect(() => {
    setCurrentSlice(tableData.slice(start, end));
  }, [tableData, start, end]);

  useEffect(() => {
    if (!selected.length) setShowAlert(false);
  }, [selected]);

  const handleDelete = (): void => {
    const updatedTableData = tableData.filter(
      (item: Record<string, any>) => !selected.includes(item.email)
    );
    setSelected([]);
    setTableData(updatedTableData);
    setShowAlert(false);
  };

  const handleNext = (): void => {
    if (currentPage === fromPages) return;
    setStart((prev) => prev + showAmount);
    setEnd((prev) => prev + showAmount);
    setCurrentPage((prev) => prev + 1);
  };

  const handlePrev = (): void => {
    if (currentPage === 1) return;
    setStart((prev) => prev - showAmount);
    setEnd((prev) => prev - showAmount);
    setCurrentPage((prev) => prev - 1);
  };

  const handleSelect = (val: string): void => {
    let updatedSelected = [...selected];
    if (!updatedSelected.includes(val)) {
      updatedSelected.push(val);
    } else {
      updatedSelected = updatedSelected.filter((item) => item !== val);
    }
    setSelected(updatedSelected);
    setShowAlert(true);
  };

  const handleToggleSelectAll = (): void => {
    setShowAlert(!showAlert);
    setToggleSelectAll(!toggleSelectAll);
    setSelectAll(!selectAll);
    const updatedSelected = toggleSelectAll
      ? tableData.map((item: any) => item.email)
      : [];
    setSelected(updatedSelected);
  };
  

  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <ShowPageAmount amount={totalAmount} onSetAmount={setShowAmount} />
        <PageFromPages from={fromPages} current={currentPage} />
        <div className={styles.actions}>
          <TurnPage direction="prev" onBtnClick={handlePrev} />
          <TurnPage direction="next" onBtnClick={handleNext} />
        </div>
      </div>
      <Button>Добавить акцию</Button>
      <Table
        selectedItems={selected}
        tableData={currentSlice}
        onSelect={handleSelect}
        onSelectAll={handleToggleSelectAll}
      />
      <div className={styles.popup}>
        <SelectedAlert
          onDeleteRows={handleDelete}
          selectedAmount={selected.length}
          isOpen={showAlert}
          onClose={() => setShowAlert(false)}
        />
      </div>
    </div>
  );
};

export default TablePage;
