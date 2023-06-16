import { FC } from "react";

import Button from "../../../components/UI/Button/Button";
import Form from "../../../components/UI/Form/Field/Form";
import { PAY_TYPE } from "../../../mock/pay-type";
import { ORDER_CONFIG } from "../config/order-form-config";

import { IActionOrderProps } from "./IActionOrderProps";

import styles from "./ActionOrder.module.css";

const ActionOrder: FC<IActionOrderProps> = ({
  total,
  formData,
  onSetFormValues,
  onConfirm,
  onCancel, 
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={false} onClick={onCancel}>
          Закрыть
        </Button>
        <Button highlighted={true} onClick={onConfirm}>
          Подтвердить
        </Button>
      </div>
      <Form
        config={ORDER_CONFIG}
        dropdownList={[PAY_TYPE]}
        onSetFormValues={onSetFormValues}
        values={formData}
      />
      <div className={styles.total}>
        <span>Итого:</span>
        <span>{total} &#8381;</span>
      </div>
    </div>
  );
};

export default ActionOrder;
