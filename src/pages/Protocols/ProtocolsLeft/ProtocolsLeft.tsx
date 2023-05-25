import { FC } from "react";

import EditCategoryItem from "../../Categories/EditCategoryItem/EditCategoryItem";

import Head from "./Head.tsx/Head";

import styles from "./ProtocolsLeft.module.css";

const ProtocolsLeft: FC<any> = ({
  textUi,
  onHandleBlure,
  items,
  handleEdit,
  onRemove,
  onHandleClick,
  itemId,
  onHandleAdd,
  hasInput = true,
}) => {
  return (
    <div className={styles.wrap}>
      <Head
        onHandleBlure={onHandleBlure}
        textUi={textUi}
        onHandleClick={onHandleAdd} //show modal
        hasInput={hasInput}
      />
      <div className={styles.body}>
        <ul className={styles.content}>
          <li>
            {items?.map((category: any) => (
              <EditCategoryItem
                data={category}
                key={category.id}
                onEdit={handleEdit}
                onRemove={onRemove}
                onClick={onHandleClick}
                isActive={category.id === itemId ? true : false}
              />
            ))}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProtocolsLeft;
