import { FC } from "react";

import Placeholder from "../../pages/Categories/Placeholder/Placeholder";

import Brand from "./Brand/Brand";
import { IBrandListProps } from "./IBrandListProps";

import styles from "./BrandList.module.css";

const BrandList: FC<IBrandListProps> = ({ brands, onRemove }) => {
  if (!brands?.length) {
    return (
      <div className={styles.placeholder}>
        <Placeholder text="Здесь пока нет брендов" />;
      </div>
    );
  } else {
    return (
      <div className={styles.wrap}>
        {brands?.map((brand: any) => (
          <Brand
            url={brand.icon}
            text={brand.name}
            id={brand.id}
            key={brand.id}
            onRemove={onRemove}
          />
        ))}
      </div>
    );
  }
};

export default BrandList;
