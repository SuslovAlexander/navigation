import { FC } from "react";

import { SELECT_VALUES } from "../shared/constants/select-values";

import Button from "./Button/Button";
import ItemEdit from "./ItemEdit/ItemEdit";

import styles from "./EditSettings.module.css";

const hadleFake = (): boolean => {
  return true;
};
const EditSettings: FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button isActive={false} onBtnClick={hadleFake}>
          Удалить
        </Button>
        <Button isActive={true} onBtnClick={hadleFake}>
          Сохранить
        </Button>
      </div>
      <div className={styles.content}>
        <ItemEdit
          variant={"text"}
          title={"Начисление кешбека с покупки"}
          placeholder={"20%"}
        />
        {SELECT_VALUES.map((item) => {
          return (
            <ItemEdit
              key={item.title}
              variant={"dropdown"}
              title={item.title}
              values={item.select}
            />
          );
        })}
      </div>
    </div>
  );
};

export default EditSettings;
