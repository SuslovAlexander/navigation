import { FC, useEffect, useState } from "react";

import Table from "../components/UI/Table/Table";

import PageActions from "./PageActions/PageActions";
import SelectedAlert from "./SelectedAlert/SelectedAlert";
import { ITablePageProps, TtableData } from "./ITablePageProps";

import styles from "./TablePage.module.css";

const TablePage: FC<ITablePageProps> = ({
  tableBody,
  tableHeading,
  idName,
  hasCheckbox,
  onAction,
}) => {
  const [tableData, setTableData] = useState(tableBody);

  const [currentSlice, setCurrentSlice] = useState<TtableData>([]);

  const [selected, setSelected] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const [toggleSelectAll, setToggleSelectAll] = useState(true);

  useEffect(() => {
    if (!selected.length) {
      setShowAlert(false);
    }
  }, [selected]);

  const handleDelete = (): void => {
    const updatedTableData = tableData.filter(
      (item: Record<string, any>) => !selected.includes(item[idName])
    );
    setSelected([]);
    setTableData(updatedTableData);
    setShowAlert(false);
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
      ? tableData.map((item: Record<string, any>) => item[idName])
      : [];
    setSelected(updatedSelected);
  };

  return (
    <>
      <div className={styles.table}>
        <PageActions tableData={tableData} onSetSlice={setCurrentSlice} />
        <Table
          heading={tableHeading}
          tableData={currentSlice}
          idName={idName}
          selectedItems={selected}
          onTrClick={onAction}
          onSelect={handleSelect}
          onSelectAll={handleToggleSelectAll}
          hasCheckbox={hasCheckbox}
          emptyText="Здесь пока нет товаров"
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
    </>
  );
};

export default TablePage;
