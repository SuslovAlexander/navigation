import { FC, useEffect, useState } from "react";

import Button from "../components/UI/Button/Button";
import SearchInput from "../components/UI/SearchInput/SearchInput";
import Table from "../components/UI/Table/Table";
import { IProduct } from "../shared/interfaces/IProduct";

import PageActions from "./PageActions/PageActions";
import SelectedAlert from "./SelectedAlert/SelectedAlert";
import { ITablePageProps, TtableData } from "./ITablePageProps";

import styles from "./TablePage.module.css";

const TablePage: FC<ITablePageProps> = ({ data }) => {
  const [tableData, setTableData] = useState(data.data);

  const [currentSlice, setCurrentSlice] = useState<TtableData>(tableData);
  const [selected, setSelected] = useState<string[]>([]);
  const [selectAll, setSelectAll] = useState<boolean>(false);
  const [showAlert, setShowAlert] = useState<boolean>(false);
  const totalAmount = tableData.length;
  const [toggleSelectAll, setToggleSelectAll] = useState(true);

  const [productToEdit, setProductToEdit] = useState<IProduct | null>(null);


  useEffect(() => {
    if (!selected.length) setShowAlert(false);
  }, [selected]);

  const handleDelete = (): void => {
    const updatedTableData = tableData.filter(
      (item: Record<string, any>) => !selected.includes(item.id)
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
      ? tableData.map((item: any) => item.id)
      : [];
    setSelected(updatedSelected);
  };

  const handleFindProduct = (id: string) => {
    let product = null;
    if (tableData) {
      product = tableData.find((item: any) => item.id === id);
    }
    setProductToEdit(product);
  };

  if (!totalAmount) return <h1>Empty!</h1>;

  const handleSlice = (slice: number[]): void => {
    const [star, en]: number[] = slice;
    setCurrentSlice(tableData.slice(star, en));
   // console.log("index of start: ",star, "index of end: ",en);
  };

  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <div className={styles.search}>
          <SearchInput placeholder="Поиск по товарам" />
        </div>
        <PageActions length={totalAmount} onSetSlice={handleSlice} />
      </div>
      <Button>Добавить акцию</Button>
      <Table
        product={productToEdit}
        selectedItems={selected}
        tableData={currentSlice}
        onSelect={handleSelect}
        onSelectAll={handleToggleSelectAll}
        onTrClick={handleFindProduct}
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
