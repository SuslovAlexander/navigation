import { FC } from "react";

import TBody from "./TBody/TBody";
import THead from "./THead/THead";
import { ITableProps } from "./ITableProps";

import styles from "./Table.module.css";

const Table: FC<ITableProps> = ({
  heading,
  selectedItems,
  tableData,
  onSelect,
  onSelectAll,
  onTrClick,
  idName,
  hasCheckbox,
}) => {
  return (
    <table className={styles.table}>
      <THead
        tableHeadData={heading}
        onSelectAll={onSelectAll}
        hasCheckbox={hasCheckbox}
      />
      <TBody
        onTrClick={onTrClick}
        selectedItems={selectedItems}
        tableBodyData={tableData}
        onSelect={onSelect}
        idName={idName}
        hasCheckbox={hasCheckbox}
      />
    </table>
  );
};

export default Table;
