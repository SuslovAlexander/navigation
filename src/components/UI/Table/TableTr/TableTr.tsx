import { FC } from "react";

import { ReactComponent as Pencil } from "../../../../public/assets/images/edit.svg";
import { ReactComponent as Trash } from "../../../../public/assets/images/trash.svg";
import RowTextItem from "../../../../TablePage/RowTextItem/RowTextItem";
import ActionBtn from "../../ActionBtn/ActionBtn";
import Checkbox from "../../Checkbox/Checkbox";

import { ITableTrProps } from "./ITableTrProps";

import styles from "./TableTr.module.css";

const TableTr: FC<ITableTrProps> = ({
  data,
  idName,
  selectedItems,
  hasCheckbox,
  canBeDeleted,
  canBeEdit,
  onTrClick,
  onSelect,
  onEdit,
  onRemove,
}) => {
  const handleClick = (): void => {
    if (onTrClick) {
      onTrClick(data[idName]);
    }
  };

  const handleSelect = (): void => {
    if (onSelect) {
      onSelect(data[idName]);
    }
  };

  const handleEditClick = (): void => {
    if (onEdit) {
      onEdit(data[idName]);
    }
  };

  const handleRemoveClick = (): void => {
    if (onRemove) {
      onRemove(data[idName]);
    }
  };

  const checked = selectedItems?.includes(data[idName]) ? true : false;

  return (
    <tr className={styles.tr}>
      {hasCheckbox && (
        <td className={styles.td}>
          <Checkbox
            checked={checked}
            id={data[idName]}
            onSelect={handleSelect}
          />
        </td>
      )}
      {Object.values(data).map((values, index) => {
        return (
          <td key={index} onClick={handleClick}>
            <RowTextItem>{values}</RowTextItem>
          </td>
        );
      })}
      {canBeEdit && (
        <td className={styles.edit}>
          <ActionBtn onClick={handleEditClick}>
            <Pencil />
          </ActionBtn>
        </td>
      )}
      {canBeDeleted && (
        <td className={styles.remove}>
          <ActionBtn onClick={handleRemoveClick}>
            <Trash />
          </ActionBtn>
        </td>
      )}
    </tr>
  );
};

export default TableTr;
