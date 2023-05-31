import React, { FC, useEffect, useState } from "react";
import { useCallback } from "react";

import Button from "../../components/UI/Button/Button";

import Field from "./Field/Field";
import { CONFIG } from "./TEMP/config";

import styles from "./Seminars.module.css";

//////////////////////////types/////////////////////////
interface IDropdown {
  name: string;
  options: string[];
}
type TDropdowns = Record<string, IDropdown>;
//////////////////////////types/////////////////////////

const Seminars = () => {
  const [formValues, setFormValues] = useState<any>({});

  const [dropdowns, setDropdowns] = useState<TDropdowns>({});

  useEffect(() => {
    setDropdowns({
      brands: {
        name: "brands",
        options: ["first", "second", "third"],
      },
      category: {
        name: "category",
        options: ["one", "two", "three"],
      },
    });
  }, []);

  const handleChange = (value: string, field: string): void => {
    setFormValues((prev: any) => {
      return { ...prev, [field]: value };
    });
  };

  return (
    <div className={styles.wrap}>
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
      <Button onClick={() => console.table(formValues)}>Check It!</Button>
    </div>
  );
};

export default Seminars;
