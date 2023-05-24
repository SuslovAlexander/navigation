import { FC } from "react";
import { Link } from "react-router-dom";

import Button from "../UI/Button/Button";
import PTag from "../UI/PTag/PTag";

import { IConfirmAlertProps } from "./IConfirmAlertProps";

import styles from "./ConfirmAlert.module.css";

const ConfirmAlert: FC<IConfirmAlertProps> = ({ header, text }) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.header}>{header}</p>
      <p className={styles.text}>{text}</p>
      <div className={styles.actions}>
        <Button>Удалить</Button>
        <div className={styles.cancel}>Отменить удаление</div>
      </div>
    </div>
  );
};

export default ConfirmAlert;
