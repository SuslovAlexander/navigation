import { FC } from "react";

import { RANDOM } from "../../helpers/random-id";
import Placeholder from "../../pages/Categories/Placeholder/Placeholder";

import Brand from "./Brand/Brand";

import styles from "./BrandList.module.css";

const BrandList: FC<any> = ({ brands, onRemove }) => {
  if (!brands?.length)
    return (
      <div className={styles.placeholder}>
        <Placeholder text="Здесь пока нет брендов" />;
      </div>
    );
  return (
    <div className={styles.wrap}>
      {brands?.map((brand: any) => (
        <Brand
          url={brand.icon}
          text={brand.name}
          id={brand.id}
          key={RANDOM.id}
          onRemove={onRemove}
        />
      ))}
    </div>
  );
};

export default BrandList;
