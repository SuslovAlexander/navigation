import { FC, useEffect, useState } from "react";

import Button from "../../../components/UI/Button/Button";
import Field from "../../../components/UI/Form/Field/Field";
import { BRANDS } from "../../../mock/brands.mock";
import { TDropdowns } from "../../../shared/types/TDropdowns";
import { CONFIG } from "../configs/config";

import { IAddProtocolProps } from "./IAddProtocolProps";

import styles from "./AddProtocol.module.css";

const AddProtocol: FC<IAddProtocolProps> = ({
  onAddProtocol,
  protocolData,
}) => {
  const [formValues, setFormValues] = useState<any>({ protocolData });
  const [dropdowns, setDropdowns] = useState<any>({});

  useEffect(() => {
    const ops = BRANDS.data.map((item) => item.name);
    const drops = {
      brands: {
        name: "brands",
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

  const handleAddProtocol = (): void => {
    //logic to create protocol object
    onAddProtocol(formValues);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={true} size="flex" onClick={handleAddProtocol}>
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
        <div className={styles.addition}>
          <p className={styles["title-add"]}>Товары протокола</p>
          <p className={styles["action-add"]}>+ Добавить товар</p>
        </div>
      </div>
    </div>
  );
};

export default AddProtocol;
