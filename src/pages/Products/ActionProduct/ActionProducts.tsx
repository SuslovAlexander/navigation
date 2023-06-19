import { FC } from "react";

import ProductFeatures from "../../../components/Products/ProductFeatures/ProductFeatures";
import ProductTags from "../../../components/Products/ProductTags/TagsBlock";
import Button from "../../../components/UI/Button/Button";
import Form from "../../../components/UI/Form/Field/Form";
import { BRAND_LIST, CATEGORY_LIST } from "../../../mock/brand-list";
import { PRODUCTS_CONFIG } from "../config/products-config";

import styles from "./ActionProducts.module.css";

const ActionProducts: FC<any> = ({
  formData,
  onSetFormValue,
  onSaveAndClose,
  onSave,
  images,
  onAddImage,
  tags,
  features,
  onRemoveImg,
  onRemoveFeature,
  OnAddFeature,
  onRemoveTag,
  onAddTag,
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.actions}>
        <Button highlighted={false} size="static" onClick={onSave}>
          Сохранить
        </Button>
        <Button size="static" onClick={onSaveAndClose}>
          Сохранить и закрыть
        </Button>
      </div>
      <div className={styles.form}>
        <Form
          config={PRODUCTS_CONFIG}
          dropdownList={[BRAND_LIST, CATEGORY_LIST]}
          images={images}
          onRemoveImg={onRemoveImg}
          onSetFormValues={onSetFormValue}
          onAddImage={onAddImage}
          values={formData}
        />
      </div>
      <ProductFeatures
        features={features}
        onRemoveFeature={onRemoveFeature}
        onAddFeature={OnAddFeature}
      />
      <ProductTags
        maxTags={120}
        title="Тэги товаров"
        tags={tags}
        onRemoveTag={onRemoveTag}
        onAddTag={onAddTag}
      />
    </div>
  );
};
export default ActionProducts;
