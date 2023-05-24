import { FC, useEffect, useState } from "react";

import BrandList from "../../components/Brands/BrandList";
import BrandsHead from "../../components/PageHeads/BrandsHead/BrandsHead";
import Table from "../../components/UI/Table/Table";
import { BRANDS } from "../../mock/brands.mock";
import { IBrand } from "../../shared/interfaces/IProduct";

import styles from "./Brands.module.css";

const Brands: FC = () => {
  const [brands, setBrands] = useState<IBrand[] | []>([]);

  useEffect(() => {
    setBrands(BRANDS.data);
  }, []);

  const head = ["Логотип бренда", "Название бренда"];

  return (
    <div className={styles.wrap}>
      <BrandsHead />
      <Table
        emptyText="Здесь пока нет брендов"
        heading={head}
        idName="name"
        canBeDeleted={false}
        canBeEdit={false}
        hasCheckbox={false}
        firsTrWidth="162px"
      >
        <BrandList brands={brands} />
      </Table>
    </div>
  );
};

export default Brands;
