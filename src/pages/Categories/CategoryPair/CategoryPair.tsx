import { FC } from "react";

import { ReactComponent as Arrow } from "../../../public/assets/images/arrow-right.svg";
import Category from "../Category/Category";
import Placeholder from "../Placeholder/Placeholder";

import { ICategoryPair } from "./ICategoryPairProps";

import styles from "./CategoryPair.module.css";

const CategoryPair = <T,>({
  categoryId,
  categories,
  handleAddCategory,
  handleClickCategory,
  handleRemoveFromCat,
  handleOnEditCat,
  subCategoryId,
  subcategories = null,
  handleAddSubCategory,
  handleRemoveFromSubCat,
  handleClickSubCategory,
  handleOnEditSubCat,
  textUiLeft,
  textUiRight,
  hasInputs,
  onBtnClick,
}: ICategoryPair<T>): JSX.Element => {

  return (
    <div className={styles.wrap}>
      <Category
        itemId={categoryId}
        items={categories}
        onHandleBlure={handleAddCategory}
        onHandleClick={handleClickCategory}
        onRemove={handleRemoveFromCat}
        onEdit={handleOnEditCat}
        textUi={textUiLeft}
        hasInput={hasInputs.first}
      />
      <div className={styles.arrows}>
        <Arrow />
        <Arrow />
      </div>
      {!subcategories?.length && <Placeholder text="Выберите категорию" />}
      {subcategories?.length && (
        <Category
          itemId={subCategoryId}
          items={subcategories}
          onHandleBlure={handleAddSubCategory}
          onHandleClick={handleClickSubCategory}
          onRemove={handleRemoveFromSubCat}
          onEdit={handleOnEditSubCat}
          textUi={textUiRight}
          hasInput={hasInputs.second}
          onBtnClick={onBtnClick}
        />
      )}
    </div>
  );
};

export default CategoryPair;
