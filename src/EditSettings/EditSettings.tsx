import { FC } from "react";

import Button from "../components/UI/Button/Button";
import Input from "../components/UI/Input/Input";
import Select from "../components/UI/Select/Select";
import { SELECT_VALUES } from "../shared/constants/select-values";

import ItemEdit from "./ItemEdit/ItemEdit";

import styles from "./EditSettings.module.css";

const EditSettings: FC = () => {
  const handleFake = (): boolean => {
    return true;
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={false} size="static" onBtnClick={handleFake}>
          Удалить
        </Button>
        <Button size="static" onBtnClick={handleFake}>
          Сохранить
        </Button>
      </div>
      <div className={styles.content}>
        <ItemEdit title="Начисление кешбека с покупки">
          <Input type="text" placeholder="20%" />
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
