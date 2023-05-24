import { FC } from "react";

import { ReactComponent as Clip } from "../../../public/assets/images/clip.svg";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Note from "../../UI/Note/Note";

import styles from "./BrandsHead.module.css";

const BrandsHead: FC = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.action}>
        <Input type="text" placeholder="Введите название бренда" />
      </div>
      <div className={styles.vertical}>
        <Input
          type="text"
          variant="link"
          iconImg={<Clip />}
          placeholder="Загрузите логотип бренда"
        />
        <Note>Размер логотипа 500*500 px PNG, JPG, JPEG</Note>
      </div>
      <div className={styles.action}>
        <Button>Добавить бренд</Button>
      </div>
    </div>
  );
};

export default BrandsHead;
