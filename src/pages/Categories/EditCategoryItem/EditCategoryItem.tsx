import { FC, useEffect, useState } from "react";

import Input from "../../../components/UI/Input/Input";
import { ReactComponent as Edit } from "../../../public/assets/images/edit.svg";
import { ReactComponent as Remove } from "../../../public/assets/images/trash.svg";
import RowTextItem from "../../../TablePage/RowTextItem/RowTextItem";

import { IEditCategoryProps } from "./IEditCategoryProps";

import styles from "./EditCategoryItem.module.css";

const EditCategoryItem: FC<IEditCategoryProps> = ({
  data,
  isActive,
  onRemove,
  onEdit,
  onClick,
}) => {
  const [editable, setEditable] = useState<boolean>(false);

  const handleEdit = (): void => {
    setEditable(!editable);
  };

  const handleClick = (): void => {
    if (onClick) onClick(data.id);
  };

  const handleClickEdit = (): void => {
    if (onEdit) onEdit(data.id);
    handleEdit();
  };

  const handleClickRemove = (): void => {
    if (onRemove) onRemove(data.id);
  };

  return (
    <div className={styles.wrap} style={isActive ? { color: "#BD68CA" } : {}}>
      <div className={styles.text} onClick={handleClick}>
        {editable && <Input type="text" placeholder={data.name} />}
        {!editable && <RowTextItem>{data.name}</RowTextItem>}
      </div>
      <div className={styles.actions}>
        <div className={styles.action} onClick={handleClickEdit}>
          <Edit />
        </div>
        <div className={styles.action} onClick={handleClickRemove}>
          <Remove />
        </div>
      </div>
    </div>
  );
};

export default EditCategoryItem;
