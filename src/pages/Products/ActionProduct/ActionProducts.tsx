import { FC } from "react";

import Images from "../../../components/Products/Images/Images";
import Button from "../../../components/UI/Button/Button";
import Form from "../../../components/UI/Form/Field/Form";
import { BRAND_LIST } from "../../../mock/brand-list";
import { PRODUCTS_CONFIG } from "../config/products-config";

import Test from "./Test";

import styles from "./ActionProducts.module.css";

const ActionProducts: FC<any> = ({
  formData,
  onSetFormValue,
  onSaveAndClose,
  onSave,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={false} size="static" onClick={onSave}>
          Сохранить
        </Button>
        <Button size="static" onClick={onSaveAndClose}>
          Сохранить и закрыть
        </Button>
      </div>
      <div className={styles.form}>
        <Form
          config={PRODUCTS_CONFIG}
          dropdownList={[BRAND_LIST]}
          onSetFormValues={onSetFormValue}
          values={formData}
        />
{/*         <Images urlList={["sdsd", "ffdf", "dfdfI"]} /> */}
      </div>
    </div>
  );
};
export default ActionProducts;
