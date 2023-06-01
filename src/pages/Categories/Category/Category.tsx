import { FC } from "react";

import Button from "../../../components/UI/Button/Button";
import EmptyParagraph from "../../../components/UI/EmptyParagraph/EmptyParagraph";
import Input from "../../../components/UI/Input/Input";
import EditCategoryItem from "../EditCategoryItem/EditCategoryItem";
import { TEditParams } from "../EditCategoryItem/IEditCategoryProps";

import { ICategoryProps } from "./ICategoryProps";

import styles from "./Category.module.css";

const Category: FC<ICategoryProps> = ({
  onHandleBlure,
  onRemove,
  onHandleClick,
  onEdit,
  items,
  itemId,
  textUi,
  hasInput,
  onBtnClick,
}) => {
  const handleEdit = (val: TEditParams): void => {
    onEdit(val);
  };

  const handleAction = (): void => {
    if (!hasInput) {
      onBtnClick();
    }
  };

  return (
    <div className={styles["category-column"]}>
      <div className={styles.head}>
        {hasInput && (
          <Input
            placeholder={textUi.inputText}
            type="text"
            onInputBlur={onHandleBlure}
          />
        )}
        <Button onClick={handleAction}>{textUi.buttonCatText}</Button>
        <div className={styles.title}>{textUi.titleCatText}</div>
      </div>
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
      {!items?.length && <EmptyParagraph text={textUi.emptyCatText} />}
    </div>
  );
};

export default Category;
