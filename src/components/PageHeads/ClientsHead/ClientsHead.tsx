import { FC, useState } from "react";

import Pagination from "../../../TablePage/Pagination/Pagination";
import SearchInput from "../../UI/SearchInput/SearchInput";

import { IClientsHeadProps } from "./IClientsHeadProps";

import styles from "./ClientsHead.module.css";

const ClientsHead: FC<IClientsHeadProps> = ({
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

export default ClientsHead;
