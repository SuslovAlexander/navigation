import { FC } from "react";

import TBody from "./TBody/TBody";
import THead from "./THead/THead";
import { ITableProps } from "./ITableProps";

import styles from "./Table.module.css";

const Table: FC<ITableProps> = ({
  heading,
  selectedItems = [],
  tableData = [],
  onSelect,
  onSelectAll,
  onTrClick = () => true,
  onRemove = () => true,
  onEdit = () => true,
  idName = "id",
  hasCheckbox = false,
  canBeDeleted = false,
  canBeEdit = false,
  emptyText = "Пусто",
  tdWidths = [],
  children,
}) => {
  return (
    <table className={styles.table}>
      <THead
        tableHeadData={heading}
        onSelectAll={onSelectAll}
        hasCheckbox={hasCheckbox}
        canBeDeleted={canBeDeleted}
        canBeEdit={canBeEdit}
        tdWidths={tdWidths}
      />
      {children && children}
      {!children && (
        <TBody
          onRemove={onRemove}
          onEdit={onEdit}
          onTrClick={onTrClick}
          selectedItems={selectedItems}
          tableData={tableData}
          onSelect={onSelect}
          idName={idName}
          hasCheckbox={hasCheckbox}
          canBeDeleted={canBeDeleted}
          canBeEdit={canBeEdit}
          emptyText={emptyText}
        />
      )}
    </table>
  );
};

export default Table;
