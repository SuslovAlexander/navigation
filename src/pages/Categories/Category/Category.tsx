import { FC, useState } from "react";

import Button from "../../../components/UI/Button/Button";
import EmptyParagraph from "../../../components/UI/EmptyParagraph/EmptyParagraph";
import Input from "../../../components/UI/Input/Input";
import EditCategoryItem from "../EditCategoryItem/EditCategoryItem";

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
  changeable,
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  const handleAction = (): void => {
    setInputValue("");
    if (!onBtnClick) return;
    if (hasInput) {
      onBtnClick(inputValue);
    } else {
      onBtnClick();
    }
  };

  return (
    <div className={styles["category-column"]}>
      <div className={styles.head}>
        {hasInput && (
          <Input
            value={inputValue}
            onChange={setInputValue}
            type="text"
            onInputBlur={onHandleBlure}
            placeholder={textUi.inputText}
          />
        )}
        <Button onClick={handleAction}>{textUi.buttonCatText}</Button>
        <div className={styles.title}>{textUi.titleCatText}</div>
      </div>
      <ul className={styles.content}>
        <li>
          {items ? (
            items.map((category: any) => (
              <EditCategoryItem
                changeable={changeable}
                data={category}
                key={category.id}
                onEdit={onEdit}
                onRemove={onRemove}
                onClick={() => onHandleClick(category.id)}
                isActive={category.id === itemId ? true : false}
              />
            ))
          ) : (
            <></>
          )}
        </li>
      </ul>
      {!items?.length && <EmptyParagraph text={textUi.emptyCatText} />}
    </div>
  );
};

export default Category;
