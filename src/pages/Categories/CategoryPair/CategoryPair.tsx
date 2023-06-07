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
  changeableSub,
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
      {!categoryId && <Placeholder text="Выберите категорию" />}
      {categoryId && (
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
          changeable={changeableSub}
        />
      )}
    </div>
  );
};

export default CategoryPair;
