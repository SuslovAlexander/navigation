import { FC, useEffect, useState } from "react";

import { IFormValues } from "../../../../pages/Protocols/ActionProtocol/IActionProtocolProps";

import Field from "./Field";
import { IFormProps } from "./IFormProps";

import styles from "./Form.module.css";

const Form: FC<IFormProps> = ({
  config,
  dropdownList,
  images,
  onRemoveImg,
  onAddImage,
  onSetFormValues,
  values,
}) => {
  const [formValues, setFormValues] = useState<IFormValues>(values);
  const [dropdowns, setDropdowns] = useState<any>({});

  useEffect(() => {
    const drops = {};
    dropdownList.forEach((item) => {
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
        const Component = item.component;
        return (
          <Field title={item.title} key={item.id} style={item.fieldStyle}>
            <Component
              {...item.inputProps}
              options={dropdowns[item.field]}
              images={images}
              onRemoveImg={onRemoveImg}
              onAddImage={onAddImage}
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
