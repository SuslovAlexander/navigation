import { FC } from "react";

import TBody from "./TBody/TBody";
import THead from "./THead/THead";
import { ITableProps } from "./ITableProps";

import styles from "./Table.module.css";

const Table: FC<ITableProps> = ({
  product,
  selectedItems,
  tableData,
  onSelect,
  onSelectAll,
  onTrClick,
}) => {
  let tableHeading = Object.entries(tableData[0]).map((item) => {
    const heading = [];
    if (item[0] === "name") heading.push("Название");
    if (item[0] === "codeFrom1C") heading.push("Артикул");

    return heading;
  });
  tableHeading = tableHeading.filter((val) => val.length);

  return (
    <table className={styles.table}>
      <THead tableHeadData={tableHeading} onSelectAll={onSelectAll} />
      <TBody
        product={product}
        onTrClick={onTrClick}
        selectedItems={selectedItems}
        tableBodyData={tableData}
        onSelect={onSelect}
      />
    </table>
  );
};

export default Table;
