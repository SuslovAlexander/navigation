import { FC } from "react";

import Button from "../UI/Button/Button";

import { IConfirmAlertProps } from "./IConfirmAlertProps";

import styles from "./ConfirmAlert.module.css";

const ConfirmAlert: FC<IConfirmAlertProps> = ({
  header,
  text,
  onConfirm,
  onCancel,
}) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.header}>{header}</p>
      <p className={styles.text}>{text}</p>
      <div className={styles.actions}>
        <Button onBtnClick={onConfirm}>Удалить</Button>
        <div className={styles.cancel} onClick={onCancel}>
          Отменить удаление
        </div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
