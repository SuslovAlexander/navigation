import { FC, useEffect, useState } from "react";

import Button from "../../components/UI/Button/Button";
import Input from "../../components/UI/Input/Input";
import { CATEGORY } from "../../mock/categoty.mock";
import { SUB_CATEGORY } from "../../mock/sub_category.mock";
import { ReactComponent as Arrow } from "../../public/assets/images/arrow-right.svg";

import EditCategoryItem from "./EditCategoryItem/EditCategoryItem";
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

  return (
    <div className={styles.wrap}>
      <div className={styles["category-column"]}>
        <div className={styles.head}>
          <Input placeholder="Введите название категори" type="text" />
          <Button>Добавить категорию</Button>
          <div className={styles.title}>Название категории</div>
        </div>
        <ul className={styles.content}>
          <li>
            {categories?.map((category: any) => (
              <EditCategoryItem
                data={category}
                key={category.id}
                onEdit={console.log}
                onRemove={handleRemoveFromCat}
                onClick={handleClickCategory}
                isActive={category.id === categoryId ? true : false}
              />
            ))}
          </li>
        </ul>
        {!categories?.length && (
          <p className={styles.empty}>Здесь пока нет категорий</p>
        )}
      </div>
      <div className={styles.arrows}>
        <Arrow />
        <Arrow />
      </div>
      {!categoryId && <Placeholder text="Выберите категорию" />}
      {categoryId && (
        <div className={styles["category-column"]}>
          <div className={styles.head}>
            <Input placeholder="Введите название подкатегории" type="text" />
            <Button>Добавить подкатегорию</Button>
            <div className={styles.title}>Название подкатегории</div>
          </div>
          <ul className={styles.content}>
            <li>
              {subcategories?.map((subcategory: any) => (
                <EditCategoryItem
                  data={subcategory}
                  key={subcategory.id}
                  onEdit={(val) => {
                    const fake = val;
                  }}
                  onRemove={handleRemoveFromSubCat}
                  onClick={handleClickSubCategory}
                  isActive={subcategory.id === subCategoryId ? true : false}
                />
              ))}
            </li>
          </ul>
          {!subcategories?.length && categoryId && (
            <p className={styles.empty}>Здесь пока нет подкатегорий</p>
          )}
        </div>
      )}
    </div>
  );
};

export default Categories;
