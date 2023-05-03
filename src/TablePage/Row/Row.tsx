import { FC } from "react";

import Checkbox from "../Checkbox/Checkbox";

import RowTextItem from "./RowTextItem/RowTextItem";
import { IRowProps } from "./IRowProps";

import styles from "./Row.module.css";

const Row: FC<IRowProps> = ({
  category,
  subcategory,
  brand,
  products,
  cashback,
  active,
  selected,
  id,
  onSelect,
}) => {
  return (
    <div className={`${styles.row} ${active ? styles.active : ""}`}>
      <Checkbox checked={selected} id={id} onSelect={onSelect} />
      <RowTextItem>{category}</RowTextItem>
      <RowTextItem>{subcategory}</RowTextItem>
      <RowTextItem>{brand}</RowTextItem>
      <RowTextItem>{products}</RowTextItem>
      <RowTextItem>{cashback}</RowTextItem>
    </div>
  );
};

export default Row;
