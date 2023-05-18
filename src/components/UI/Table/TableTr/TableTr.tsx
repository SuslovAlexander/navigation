import { FC } from "react";

import { leaveUsedValues } from "../../../../helpers/lead-data-to-correct";
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
}) => {
  const handleClick = (): void => {
    onTrClick(data[idName]);

    //do something when cell is clicked
  };

  const checked = selectedItems.includes(data[idName]) ? true : false;

  return (
    <tr className={styles.tr} style={{ borderColor: "red" }}>
      <td className={styles.td}>
        <Checkbox
          checked={checked}
          id={data[idName]}
          onSelect={(id) => onSelect(id)}
        />
      </td>
      {Object.keys(data).map((keyName, i) => {
        if (typeof data[keyName] === "object") return;
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
