import Button from "./Button/Button";
import styles from "./EditSettings.module.css";
import ItemEdit from "./ItemEdit/ItemEdit";
import { SELECT_VALUES } from "../shared/constants/select-values";

const EditSettings = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button isActive={false} onBtnClick={() => {}}>
          Удалить
        </Button>
        <Button isActive={true} onBtnClick={() => {}}>
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
