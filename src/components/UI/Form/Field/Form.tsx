import { FC, useEffect, useState } from "react";

import Field from "./Field";

import styles from "./Form.module.css";

const Form: FC<any> = ({ config, dropdownList, onSetFormValues, values }) => {
  const [formValues, setFormValues] = useState<Record<string, string>>(values);
  const [dropdowns, setDropdowns] = useState<any>({});

  useEffect(() => {
    const drops = {};
    dropdownList.forEach((item: any) => {
      //@ts-ignore
      drops[item.name] = item.options;
    });
    setDropdowns(drops);
  }, []);

  useEffect(() => {
    onSetFormValues(formValues);
  }, [formValues]);

  const handleChange = (value: string, field: string): void => {
    setFormValues((prev: any) => {
      return { ...prev, [field]: value };
    });
  };

  return (
    <div className={styles.wrap}>
      {config.map((item: any) => {
        const Component: any = item.component;
        return (
          <Field title={item.title} key={item.id} style={item.fieldStyle}>
            <Component
              {...item.inputProps}
              options={dropdowns[item.field]}
              value={formValues[item.field]}
              onChange={(val: string) => handleChange(val, item.field)}
            />
          </Field>
        );
      })}
    </div>
  );
};

export default Form;
