import { FC, useEffect, useState } from "react";

import { RANDOM } from "../../helpers/random-id";
import { CATEGORY } from "../../mock/categoty.mock";
import { SUB_CATEGORY } from "../../mock/sub_category.mock";
import { TCategory } from "../../shared/types/TCategory";

import CategoryPair from "./CategoryPair/CategoryPair";
import { TEditParams } from "./EditCategoryItem/IEditCategoryProps";

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
    <CategoryPair
      categories={categories}
      categoryId={categoryId}
      handleAddCategory={handleAddCategory}
      handleAddSubCategory={handleAddSubCategory}
      handleClickCategory={handleClickCategory}
      handleClickSubCategory={handleClickSubCategory}
      handleOnEditCat={handleOnEditCat}
      handleOnEditSubCat={handleOnEditSubCat}
      handleRemoveFromCat={handleRemoveFromCat}
      handleRemoveFromSubCat={handleRemoveFromSubCat}
      subCategoryId={subCategoryId}
      subcategories={subcategories}
    />
  );
};

export default Categories;
