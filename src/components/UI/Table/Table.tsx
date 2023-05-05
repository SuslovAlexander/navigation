import { FC } from "react";

import TBody from "./TBody/TBody";
import THead from "./THead/THead";
import { ITableProps } from "./ITableProps";

import styles from "./Table.module.css";

const Table: FC<ITableProps> = ({
  selectedItems,
  tableData,
  onSelect,
  onSelectAll,
}) => {
  const tableHeading = Object.entries(tableData[0]);

  return (
    <table className={styles.table}>
      <THead tableHeadData={tableHeading} onSelectAll={onSelectAll} />
      <TBody
        selectedItems={selectedItems}
        tableBodyData={tableData}
        onSelect={onSelect}
      />
    </table>
  );
};

export default Table;
