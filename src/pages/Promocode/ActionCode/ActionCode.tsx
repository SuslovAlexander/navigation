import { FC } from "react";

import Button from "../../../components/UI/Button/Button";
import Form from "../../../components/UI/Form/Field/Form";
import { PROMOCODES_CONFIG } from "../config/promocodes-config";

import { IActionCodeProps } from "./IActionCodeProps";

import styles from "./ActionCode.module.css";

const ActionCode: FC<IActionCodeProps> = ({
  formData,
  onSetFormValue,
  onConfirm,
  onRemove,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={false} size="static" onClick={onRemove}>
          Удалить
        </Button>
        <Button size="static" onClick={onConfirm}>
          Сохранить
        </Button>
      </div>
      <div className={styles.form}>
        <Form
          config={PROMOCODES_CONFIG}
          dropdownList={[]}
          onSetFormValues={onSetFormValue}
          values={formData}
        />
      </div>
    </div>
  );
};
export default ActionCode;
