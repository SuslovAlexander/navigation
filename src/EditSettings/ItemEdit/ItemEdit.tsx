import styles from "./ItemEdit.module.css";
import Select from "../Select/Select";
import Input from "../Input/Input";
import { FC } from "react";
import { IItemEditprops, VariantEnum } from "./IItemEditProps";

const ItemEdit: FC<IItemEditprops> = ({
  variant,
  placeholder,
  title,
  values,
}) => {
  return (
    <div className={styles.wrap}>
      <p className={styles.title}>{title}</p>
      {variant === VariantEnum.Text && <Input placeholder={placeholder} />}
      {variant === VariantEnum.Dropdown && <Select values={values} />}
    </div>
  );
};

export default ItemEdit;
