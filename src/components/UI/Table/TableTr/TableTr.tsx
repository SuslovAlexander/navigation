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
}) => {
  const handleClick = (val: string): void => {
    onTrClick();
    //do something when cell is clicked
  };

  const checked = selectedItems.includes(data.email) ? true : false;

  return (
    <tr className={styles.tr} style={{ borderColor: "red" }}>
      <td className={styles.td}>
        <Checkbox
          checked={checked}
          id={data.email}
          onSelect={(id) => onSelect(id)}
        />
      </td>
      {Object.keys(data).map((keyName, i) => {
        return (
          <td key={i} onClick={() => handleClick(data[keyName])}>
            <RowTextItem>{data[keyName]}</RowTextItem>
          </td>
        );
      })}
    </tr>
  );
};

export default TableTr;
