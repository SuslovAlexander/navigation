import { FC, useState } from "react";

import Button from "../../../components/UI/Button/Button";
import SearchInput from "../../../components/UI/SearchInput/SearchInput";
import Pagination from "../../../TablePage/Pagination/Pagination";
import Tabs from "../Tabs/Tabs";

import { ISeminarsHeadProps } from "./ISeminarsHeadProps";

import styles from "./SeminarsHead.module.css";

const SeminarsHead: FC<ISeminarsHeadProps> = ({
  tableData,
  setCurrentSlice,
  onSearch,
  onResetSearch,
  onSetActiveTab,
  onAddSeminar,
  activeTab,
  hasBtn,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleMarkClick = (): void => {
    setInputValue("");
    onResetSearch();
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.top}>
        <div className={styles.tabs}>
          <Tabs activeTab={activeTab} onSetActiveTab={onSetActiveTab} />
        </div>
        <div className={styles.right}>
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
      </div>
      {hasBtn && <Button onClick={onAddSeminar}>Добавить семинар</Button>}
    </div>
  );
};

export default SeminarsHead;
