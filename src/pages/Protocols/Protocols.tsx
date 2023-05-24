import { FC, useEffect, useState } from "react";

import { RANDOM } from "../../helpers/random-id";
import { PROTOL_CATEGORY } from "../../mock/protocol_category.mock";
import { PROTOCOLS } from "../../mock/protocols.mock";
import CategoryPair from "../Categories/CategoryPair/CategoryPair";

const Protocols: FC = () => {
  const [categoryId, setCategoryId] = useState<string>();
  const [subCategoryId, setSubCategoryId] = useState<string>();
  const [categories, setCategories] = useState<any>();
  const [subcategories, setSubcategories] = useState<any>();

  const SUB_CATEGORY = PROTOCOLS.map((protocol) => {
    const res = { id: protocol.protocol_category.id, name: protocol.name };
    return res;
  });

  const handleClickCategory = (id: string): void => {
    if (id) setCategoryId(id);
  };

  const handleClickSubCategory = (id: string): void => {
    if (id) setSubCategoryId(id);
  };

  useEffect(() => {
    const showSubCat = SUB_CATEGORY.filter((sub: any) => sub.id === categoryId);
    if (showSubCat) {
      setSubcategories(showSubCat);
    }
  }, [categoryId]);

  useEffect(() => {
    setCategories(PROTOL_CATEGORY);
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

  const createCategory = (value: string): any => {
    const newCategory: any = {
      id: RANDOM.id,
      name: value,
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

  const handleOnEditCat = (val: any): void => {
    if (val.id.trim() === "") return;
    const hasInCategories = categories.find((item: any) => item.id === val.id);
    if (hasInCategories) {
      hasInCategories.name = val.name;
    }
  };

  const handleOnEditSubCat = (val: any): void => {
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

export default Protocols;
