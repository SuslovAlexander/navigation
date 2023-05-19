import { FC } from "react";

import RowTextItem from "../../../../TablePage/RowTextItem/RowTextItem";
import Checkbox from "../../Checkbox/Checkbox";

import { ITableTrProps } from "./ITableTr";

import styles from "./TableTr.module.css";

const TableTr: FC<ITableTrProps> = ({
  selectedItems,
  data,
  onTrClick,
  onSelect,
  idName,
  hasCheckbox,
}) => {
  const handleClick = (): void => {
    onTrClick();
    // onTrClick(data[idName]);
    //do something when cell is clicked
  };

  const checked = selectedItems.includes(data[idName]) ? true : false;

  return (
    <tr className={styles.tr} style={{ borderColor: "red" }}>
      {hasCheckbox && (
        <td className={styles.td}>
          <Checkbox
            checked={checked}
            id={data[idName]}
            onSelect={(id) => onSelect(id)}
          />
        </td>
      )}
      {Object.values(data).map((values, i) => {
        if (typeof values === "object") return;
        return (
          <td key={i} onClick={handleClick}>
            <RowTextItem>{values}</RowTextItem>
          </td>
        );
      })}
    </tr>
  );
};

export default TableTr;
