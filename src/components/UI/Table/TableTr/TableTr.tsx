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
  const handleClick = (): void => {
    onTrClick(data.id);

    //do something when cell is clicked
  };

  const checked = selectedItems.includes(data.id) ? true : false;

  return (
    <tr className={styles.tr} style={{ borderColor: "red" }}>
      <td className={styles.td}>
        <Checkbox
          checked={checked}
          id={data.id}
          onSelect={(id) => onSelect(id)}
        />
      </td>
      {Object.keys(data).map((keyName, i) => {
        if (typeof data[keyName] === "object") return;
        if (keyName !== "name") {
          if (keyName !== "codeFrom1C") return;
        }

        return (
          <td key={i} onClick={handleClick}>
            <RowTextItem>{data[keyName]}</RowTextItem>
          </td>
        );
      })}
    </tr>
  );
};

export default TableTr;
