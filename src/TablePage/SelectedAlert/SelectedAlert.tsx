import { FC } from "react";

import { ReactComponent as Remove } from "../../public/assets/images/delete.svg";
import { ReactComponent as BtnRemove } from "../../public/assets/images/remove_bnt.svg";

import { ISelectedAlertProps } from "./ISelectedAlertProps";

import styles from "./SelectedAlert.module.css";

const SelectedAlert: FC<ISelectedAlertProps> = ({
  selectedAmount,
  isOpen,
  onClose,
  onDeleteRows,
}) => {
  if (!isOpen) {
    return <></>;
  }
  return (
    <div className={styles.alert}>
      <p>Количество выбранных позиций: {selectedAmount}</p>
      <button className={styles.btn}>
        <BtnRemove />
        <span onClick={onDeleteRows}>Удалить</span>
      </button>
      <div className={styles.remove} onClick={onClose}>
        <Remove />
      </div>
    </div>
  );
};

export default SelectedAlert;
