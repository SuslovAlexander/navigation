import { FC } from "react";

import SearchInput from "../../../../components/UI/SearchInput/SearchInput";
import { ReactComponent as Trash } from "../../../../public/assets/images/trash.svg";
import ProductList from "../../../Products/ProductList/ProductList";

import styles from "./Addition.module.css";

const Addition: FC<any> = ({ items, onClick }) => {
  if (!items.length) {
    return <p className={styles["action-add-disabled"]}>+ Добавить товар</p>;
  }
  return (
    <div className={styles.wrap}>
      <p className={styles["title-add"]}>Товары протокола</p>
      {items?.length && (
        <div className={styles.search}>
          <SearchInput placeholder="Поиск по товарам" variant="mark" />
          <Trash />
        </div>
      )}
      <ProductList products={items} onClick={onClick} />
      <p className={styles["action-add"]}>+ Добавить товар</p>
    </div>
  );
};

export default Addition;
