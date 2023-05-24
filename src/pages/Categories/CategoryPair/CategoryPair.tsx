import { FC } from "react";

import { ReactComponent as Arrow } from "../../../public/assets/images/arrow-right.svg";
import {
  CATEGORY_TEXT,
  SUBCATEGORY_TEXT,
} from "../../../shared/constants/category-text-ui";
import Category from "../Category/Category";
import Placeholder from "../Placeholder/Placeholder";

import { ICategoryPair } from "./ICategoryPairProps";

import styles from "./CategoryPair.module.css";

const CategoryPair: FC<ICategoryPair> = ({
  categoryId,
  categories,
  handleAddCategory,
  handleClickCategory,
  handleRemoveFromCat,
  handleOnEditCat,
  subCategoryId,
  subcategories,
  handleAddSubCategory,
  handleRemoveFromSubCat,
  handleClickSubCategory,
  handleOnEditSubCat,
}) => {
  return (
    <div className={styles.wrap}>
      <Category
        itemId={categoryId}
        items={categories}
        onHandleBlure={handleAddCategory}
        onHandleClick={handleClickCategory}
        onRemove={handleRemoveFromCat}
        onEdit={handleOnEditCat}
        textUi={CATEGORY_TEXT}
      />
      <div className={styles.arrows}>
        <Arrow />
        <Arrow />
      </div>
      {!categoryId && <Placeholder text="Выберите категорию" />}
      {categoryId && (
        <Category
          itemId={subCategoryId}
          items={subcategories}
          onHandleBlure={handleAddSubCategory}
          onHandleClick={handleClickSubCategory}
          onRemove={handleRemoveFromSubCat}
          onEdit={handleOnEditSubCat}
          textUi={SUBCATEGORY_TEXT}
        />
      )}
    </div>
  );
};

export default CategoryPair;
