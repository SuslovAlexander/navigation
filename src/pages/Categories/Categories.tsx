import { FC, useEffect, useState } from "react";

import { RANDOM } from "../../helpers/random-id";
import { CATEGORY } from "../../mock/categoty.mock";
import { SUB_CATEGORY } from "../../mock/sub_category.mock";
import { ReactComponent as Arrow } from "../../public/assets/images/arrow-right.svg";
import {
  CATEGORY_TEXT,
  SUBCATEGORY_TEXT,
} from "../../shared/constants/category-text-ui";
import { TCategory } from "../../shared/types/TCategory";

import Category from "./Category/Category";
import { TEditParams } from "./EditCategoryItem/IEditCategoryProps";
import Placeholder from "./Placeholder/Placeholder";

import styles from "./Categories.module.css";

const Categories: FC = () => {
  const [categoryId, setCategoryId] = useState<string>();
  const [subCategoryId, setSubCategoryId] = useState<string>();
  const [categories, setCategories] = useState<any>();
  const [subcategories, setSubcategories] = useState<any>();

  const handleClickCategory = (id: string): void => {
    if (id) setCategoryId(id);
  };

  const handleClickSubCategory = (id: string): void => {
    if (id) setSubCategoryId(id);
  };

  useEffect(() => {
    const showSubCat = SUB_CATEGORY.filter(
      (sub) => sub.catalog_product.id === categoryId
    );
    if (showSubCat) {
      setSubcategories(showSubCat);
    }
  }, [categoryId]);

  useEffect(() => {
    setCategories(CATEGORY);
  }, []);

  const handleRemoveFromCat = (id: string): void => {
    const updCategories = categories.filter(
      (category: any) => category.id !== id
    );
    setCategories(updCategories);
    setCategoryId("");
  };

  const handleRemoveFromSubCat = (id: string): void => {
    const updCategories = subcategories.filter(
      (category: any) => category.id !== id
    );
    setSubcategories(updCategories);
    setSubCategoryId("");
  };

  const createCategory = (value: string): TCategory => {
    const newCategory: TCategory = {
      id: RANDOM.id,
      name: value,
      position: 0,
    };
    return newCategory;
  };

  const handleAddCategory = (val: string): void => {
    if (val.trim() === "") return;
    const categoryToAdd = createCategory(val);
    setCategories([categoryToAdd, ...categories]);
  };

  const handleAddSubCategory = (val: string): void => {
    if (val.trim() === "") return;
    const categoryToAdd = createCategory(val);
    setSubcategories([categoryToAdd, ...subcategories]);
  };

  const handleOnEditCat = (val: TEditParams): void => {
    if (val.id.trim() === "") return;
    const hasInCategories = categories.find((item: any) => item.id === val.id);
    if (hasInCategories) {
      hasInCategories.name = val.name;
    }
  };

  const handleOnEditSubCat = (val: TEditParams): void => {
    if (val.id.trim() === "") return;
    const hasInCategories = subcategories.find(
      (item: any) => item.id === val.id
    );
    if (hasInCategories) {
      hasInCategories.name = val.name;
    }
  };

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

export default Categories;
