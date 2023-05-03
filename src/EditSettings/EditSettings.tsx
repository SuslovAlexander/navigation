import { FC } from "react";

import { SELECT_VALUES } from "../shared/constants/select-values";

import Button from "./Button/Button";
import Input from "./Input/Input";
import ItemEdit from "./ItemEdit/ItemEdit";
import Select from "./Select/Select";

import styles from "./EditSettings.module.css";

const EditSettings: FC = () => {
  const handleFake = (): boolean => {
    return true;
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button onBtnClick={handleFake}>Удалить</Button>
        <Button onBtnClick={handleFake}>Сохранить</Button>
      </div>
      <div className={styles.content}>
        <ItemEdit title="Начисление кешбека с покупки">
          <Input placeholder="20%" />
        </ItemEdit>

        {SELECT_VALUES.map((item) => {
          return (
            <ItemEdit title={item.title} key={item.title}>
              <Select values={item.select} />
            </ItemEdit>
          );
        })}
      </div>
    </div>
  );
};

export default EditSettings;
