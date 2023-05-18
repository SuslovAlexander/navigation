import { FC } from "react";

import TBody from "./TBody/TBody";
import THead from "./THead/THead";
import { ITableProps } from "./ITableProps";

import styles from "./Table.module.css";

const Table: FC<ITableProps> = ({
  heading,
  product,
  selectedItems,
  tableData,
  onSelect,
  onSelectAll,
  onTrClick,
  idName,
}) => {
  return (
    <table className={styles.table}>
      <THead tableHeadData={heading} onSelectAll={onSelectAll} />
      <TBody
        product={product}
        onTrClick={onTrClick}
        selectedItems={selectedItems}
        tableBodyData={tableData}
        onSelect={onSelect}
        idName={idName}
      />
    </table>
  );
};

export default Table;
