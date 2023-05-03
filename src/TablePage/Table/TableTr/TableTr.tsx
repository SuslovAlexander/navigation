import { FC } from "react";

import Checkbox from "../../Checkbox/Checkbox";
import RowTextItem from "../../Row/RowTextItem/RowTextItem";

import { ITableTrProps } from "./ITableTr";

import styles from "./TableTr.module.css";

const TableTr: FC<ITableTrProps> = ({ data, onTrClick }) => {
  const handleClick = ():void => {
    onTrClick();
  };
  return (
    <tr
      className={styles.tr}
      style={{ borderColor: "red" }}
      onClick={handleClick}
    >
      <td className={styles.td}>
        <Checkbox checked={false} id={data.email} onSelect={() => true} />
      </td>
      {Object.keys(data).map((keyName, i) => {
        if (keyName === "id") return;
        return (
          <td key={i}>
            <RowTextItem>{data[keyName]}</RowTextItem>
          </td>
        );
      })}
    </tr>
  );
};

export default TableTr;
