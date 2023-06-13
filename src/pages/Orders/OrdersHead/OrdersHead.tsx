import { FC, useState } from "react";

import SearchInput from "../../../components/UI/SearchInput/SearchInput";
import Pagination from "../../../TablePage/Pagination/Pagination";

import styles from "./OrdersHead.module.css";

const OrdersHead: FC<any> = ({
  tableData,
  setCurrentSlice,
  onSearch,
  onResetSearch,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleMarkClick = (): void => {
    setInputValue("");
    onResetSearch();
  };
  
  return (
    <div className={styles.wrap}>
      <div className={styles.input}>
        <SearchInput
          variant="cross"
          placeholder="Поиск"
          value={inputValue}
          onChange={setInputValue}
          handleMarkClick={handleMarkClick}
          handleSearch={onSearch}
        />
      </div>
      <div className={styles.actions}>
        <Pagination tableData={tableData} onSetSlice={setCurrentSlice} />
      </div>
    </div>
  );
};

export default OrdersHead;
