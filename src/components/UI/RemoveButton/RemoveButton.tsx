import { FC } from "react";

import { ReactComponent as Trash } from "../../../public/assets/images/trash.svg";

import { IRemoveButtonProps } from "./IRemoveButtomProps";

import styles from "./RemoveButton.module.css";

const RemoveButton: FC<IRemoveButtonProps> = ({ onRemove }) => {
  return (
    <button className={styles.btn} onClick={onRemove}>
      <Trash />
    </button>
  );
};

export default RemoveButton;
