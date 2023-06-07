import { FC, useEffect, useState } from "react";

import Button from "../../../components/UI/Button/Button";
import Field from "../../../components/UI/Form/Field/Field";
import { BRANDS } from "../../../mock/brands.mock";
import { CONFIG } from "../configs/config";

import Addition from "./Addition/Addition";
import { IActionProtocolProps } from "./IActionProtocolProps";

import styles from "./ActionProtocol.module.css";

const ActionProtocol: FC<IActionProtocolProps> = ({
  onAddProtocol,
  onRemoveProducts,
  onEditProtocol,
  formData,
  products,
}) => {
  const [formValues, setFormValues] = useState<any>(formData);
  const [dropdowns, setDropdowns] = useState<any>({});

  useEffect(() => {
    const ops = BRANDS.data.map((item) => item.name);
    const drops = {
      brand: {
        name: "brand",
        options: ops,
      },
    };
    setDropdowns(drops);
  }, []);

  const handleChange = (value: string, field: string): void => {
    setFormValues((prev: any) => {
      return { ...prev, [field]: value };
    });
  };

  const handleActionProtocol = (): void => {
    if (formData.name) {
      onEditProtocol(formValues);
    } else {
      onAddProtocol(formValues);
    }
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={true} size="flex" onClick={handleActionProtocol}>
          Сохранить
        </Button>
      </div>
      <div className={styles.content}>
        {CONFIG.map((item) => {
          const Component: any = item.component;
          return (
            <Field title={item.title} key={item.id}>
              <Component
                {...item.inputProps}
                options={dropdowns[item.field]?.options}
                value={formValues[item.field]}
                onChange={(val: string) => handleChange(val, item.field)}
              />
            </Field>
          );
        })}
      </div>
      <Addition items={products} onClick={onRemoveProducts} />
    </div>
  );
};

export default ActionProtocol;
