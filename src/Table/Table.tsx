import { FC } from "react";

import NextBtn from "./Actios/NextBtn/NextBtn";
import PageFromPages from "./Actios/PageFromPages/PageFromPages";
import PrevBtn from "./Actios/PrevBtn/PrevBtn";
import ShowPageAmount from "./Actios/ShowPageAmount/ShowPageAmount";
import TableBtn from "./Actios/TableBtn/TableBtn";
import Row from "./Row/Row";
import SelectedAlert from "./SelectedAlert/SelectedAlert";

import styles from "./Table.module.css";

const Table: FC = () => {
  return (
    <div className={styles.table}>
      <div className={styles.head}>
        <ShowPageAmount amount={10} />
        <PageFromPages from={2} />
        <div className={styles.actions}>
          <PrevBtn />
          <NextBtn />
        </div>
      </div>
      <TableBtn>Добавить акцию</TableBtn>
      <div className={styles.body}>
        <Row
          selected={true}
          category="Категория"
          subcategory="Подкатегория"
          brand="Бренд"
          products="Товары"
          cashback="Кешбек"
          active={true}
        />
        <Row
          selected={false}
          category="Very long string - contains too match characters"
          subcategory="Скрабы"
          brand="Academie"
          products="Крем"
          cashback="20%"
        />
        <Row
          selected={false}
          category="Эстетический уход"
          subcategory="Скрабы"
          brand="Academie"
          products="Крем"
          cashback="20%"
        />
        <Row
          selected={false}
          category="Эстетический уход"
          subcategory="Скрабы"
          brand="Academie"
          products="Крем"
          cashback="20%"
        />
        <Row
          selected={false}
          category="Эстетический уход"
          subcategory="Скрабы"
          brand="Academie"
          products="Крем"
          cashback="20%"
        />
        <Row
          selected={false}
          category="Эстетический уход"
          subcategory="Скрабы"
          brand="Academie"
          products="Крем"
          cashback="20%"
        />
        <Row
          selected={false}
          category="Эстетический уход"
          subcategory="Скрабы"
          brand="Academie"
          products="Крем"
          cashback="20%"
        />
      </div>
      <div className={styles.popup}>
        <SelectedAlert points={[1, 2, 3, 5]} />
      </div>
    </div>
  );
};

export default Table;
