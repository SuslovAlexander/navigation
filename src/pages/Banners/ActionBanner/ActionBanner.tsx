import { FC, useState } from "react";

import Button from "../../../components/UI/Button/Button";
import Field from "../../../components/UI/Form/Field/Field";
import { CONFIG } from "../configs/config";

import styles from "./ActionBanner.module.css";

const ActionBanner: FC<any> = ({ formData }) => {
  const [formValues, setFormValues] = useState<any>(formData);

  const handleChange = (value: string, field: string): void => {
    setFormValues((prev: any) => {
      return { ...prev, [field]: value };
    });
  };
  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={false} size="static" onClick={() => true}>
          Удалить
        </Button>
        <Button size="static" onClick={() => true}>
          Сохранить
        </Button>
      </div>
      {CONFIG.map((item) => {
        const Component: any = item.component;
        return (
          <Field title={item.title} key={item.id}>
            <Component
              {...item.inputProps}
              value={formValues[item.field]}
              onChange={(val: string) => handleChange(val, item.field)}
            />
          </Field>
        );
      })}
    </div>
  );
};

export default ActionBanner;
