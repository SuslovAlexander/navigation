import { FC } from "react";

import { ReactComponent as Pencil } from "../../../../public/assets/images/edit.svg";

import { IEditButtonProps } from "./IEditButtonProps";

import styles from "./EditButton.module.css";

const EditButton: FC<IEditButtonProps> = ({ onRemove }) => {
  return (
    <button className={styles.btn} onClick={onRemove}>
      <Pencil />
    </button>
  );
};

export default EditButton;
