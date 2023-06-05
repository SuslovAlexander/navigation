import { FC } from "react";

import ActionBtn from "../../../components/UI/ActionBtn/ActionBtn";
import { ReactComponent as Trash } from "../../../public/assets/images/trash.svg";

import { IProductItemProps } from "./IProductItemProps";

import styles from "./ProductItem.module.css";

const ProductItem: FC<IProductItemProps> = ({
  firstName,
  lastName,
  onClick,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.item}>{firstName}</div>
      <div className={styles.item}>{lastName}</div>
      <ActionBtn onClick={onClick}>
        <Trash />
      </ActionBtn>
    </div>
  );
};

export default ProductItem;
