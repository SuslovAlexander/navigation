import { FC, useEffect, useState } from "react";

import { CATEGORY } from "../../mock/categoty.mock";
import { SUB_CATEGORY } from "../../mock/sub_category.mock";
import {
  CATEGORY_TEXT,
  SUBCATEGORY_TEXT,
} from "../../shared/constants/category-text-ui";
import { ICategoriesItem } from "../../shared/interfaces/ICategoriesItem";
import { ICategoryItem } from "../../shared/interfaces/ICategoryItem";
import { IItem } from "../../shared/interfaces/IItem";
import { RANDOM } from "../../shared/utils/random-id";

import CategoryPair from "./CategoryPair/CategoryPair";
import { TEditParams } from "./EditCategoryItem/IEditCategoryProps";

const Categories: FC = () => {
  const [categories, setCategories] = useState<ICategoryItem[]>(CATEGORY);
  const [activeCategory, setActiveCategory] = useState<ICategoryItem>();
  const [subcategories, setSubcategories] =
    useState<ICategoriesItem[]>(SUB_CATEGORY);
  const [filteredSubcategories, setFilteredSubcategories] = useState<
    ICategoriesItem[]
  >([]);
  const [categoryId, setCategoryId] = useState<string>();
  const [subCategoryId, setSubCategoryId] = useState<string>();

  useEffect(() => {
    const filtered = subcategories.filter(
      (subcategory) => subcategory?.catalog_product?.id === categoryId
    );
    setFilteredSubcategories(filtered);
    const clickedCategory = categories.find(
      (category) => category.id === categoryId
    );
    setActiveCategory(clickedCategory);
  }, [categoryId, subCategoryId, categories, subcategories]);

  const handleCategoryClick = (id: string): void => {
    setCategoryId(id);
  };

  const createCategory = (value: string): ICategoriesItem => {
    const newCategory: ICategoriesItem = {
      id: RANDOM.id,
      name: value,
      position: 0,
      catalog_product: {
        id: categoryId,
      },
    };
    return newCategory;
  };

  const handleAddCategory = (value: string): void => {
    if (value.trim() === "") return;
    const newCategory = { id: RANDOM.id, name: value, position: 0 };
    setCategories((prev) => [...prev, newCategory]);
  };

  const handleRemoveCategory = (id: string): void => {
    const updatedCategories = categories.filter(
      (category) => category.id !== id
    );
    setCategories(updatedCategories);
  };

  const handleRemoveProtocol = (id: string): void => {
    const updateProtocols = subcategories.filter(
      (subcategory) => subcategory.id !== id
    );
    setSubcategories(updateProtocols);
  };

  const handleClickSubCategory = (id: string): void => {
    if (id) {
      setSubCategoryId(id);
    }
  };

  const handleAddSubCategory = (val: string): void => {
    if (val.trim() === "") {
      return;
    }
    const categoryToAdd = createCategory(val);
    setSubcategories([categoryToAdd, ...subcategories]);
  };

  const handleEditCategory = (data: IItem): void => {
    const targetCategory = categories.find(
      (category) => category.id === data.id
    );
    if (targetCategory) {
      targetCategory.name = data.name;
    }
  };

  const handleOnEditSubCat = (val: TEditParams): void => {
    if (val.id.trim() === "") {
      return;
    }
    const hasInCategories = subcategories.find((item) => item.id === val.id);
    if (hasInCategories) {
      hasInCategories.name = val.name;
    }
  };

  return (
    <CategoryPair
      categoryId={activeCategory?.id}
      subCategoryId={subCategoryId}
      categories={categories}
      handleAddCategory={handleAddCategory}
      handleClickCategory={handleCategoryClick}
      handleOnEditCat={handleEditCategory}
      handleRemoveFromCat={handleRemoveCategory}
      textUiLeft={CATEGORY_TEXT}
      subcategories={filteredSubcategories}
      handleAddSubCategory={handleAddSubCategory}
      handleClickSubCategory={handleClickSubCategory}
      handleOnEditSubCat={handleOnEditSubCat}
      handleRemoveFromSubCat={handleRemoveProtocol}
      textUiRight={SUBCATEGORY_TEXT}
      hasInputs={{ first: true, second: true }}
    />
  );
};

export default Categories;
