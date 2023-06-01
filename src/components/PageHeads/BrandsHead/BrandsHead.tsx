import { FC, useState } from "react";

import { ReactComponent as Clip } from "../../../public/assets/images/clip.svg";
import { IBrand } from "../../../shared/interfaces/IProduct";
import { RANDOM } from "../../../shared/utils/random-id";
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";
import Note from "../../UI/Note/Note";

import styles from "./BrandsHead.module.css";

const BrandsHead: FC<any> = ({ onAddBrand }) => {
  const [inputName, setInputName] = useState<string>("");
  const [clearInput, setClearInput] = useState<boolean>(false);

  const createBrand = (): IBrand => {
    const brand: IBrand = { id: RANDOM.id, name: inputName, icon: "test" };
    return brand;
  };

  const handleAddBrand = (): void => {
    const newBrand = createBrand();
    onAddBrand(newBrand);
    setClearInput(true);
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.action}>
        <Input
          type="text"
          placeholder="Введите название бренда"
          onChange={(name) => setInputName(name)}
          isClear={clearInput}
        />
      </div>
      <div className={styles.vertical}>
        <Input
          type="text"
          variant="link"
          iconImg={<Clip />}
          placeholder="Загрузите логотип бренда"
          isClear={clearInput}
        />
        <Note>Размер логотипа 500*500 px PNG, JPG, JPEG</Note>
      </div>
      <div className={styles.action}>
        <Button onClick={handleAddBrand}>Добавить бренд</Button>
      </div>
    </div>
  );
};

export default BrandsHead;
