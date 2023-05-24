import { FC } from "react";

import { RANDOM } from "../../helpers/random-id";

import Brand from "./Brand/Brand";

import styles from "./BrandList.module.css";

const BrandList: FC<any> = ({ brands }) => {
  return (
    <div className={styles.wrap}>
      {brands?.map((brand: any) => (
        <Brand
          url={brand.icon}
          text={brand.name}
          id={brand.id}
          key={RANDOM.id}
        />
      ))}
    </div>
  );
};

export default BrandList;
