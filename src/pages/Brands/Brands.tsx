import { FC, useEffect, useState } from "react";

import BrandList from "../../components/Brands/BrandList";
import BrandsHead from "../../components/PageHeads/BrandsHead/BrandsHead";
import Table from "../../components/UI/Table/Table";
import { BRANDS } from "../../mock/brands.mock";
import { IBrand } from "../../shared/interfaces/IProduct";
import { RANDOM } from "../../shared/utils/random-id";

import styles from "./Brands.module.css";

const Brands: FC = () => {
  const [brands, setBrands] = useState<IBrand[] | []>([]);

  useEffect(() => {
    setBrands(BRANDS.data);
  }, []);

  const head = ["Логотип бренда", "Название бренда"];

  const handleRemove = (id: string): void => {
    const updatedBrands = brands.filter((brand) => brand.id !== id);
    setBrands(updatedBrands);
  };

  const addnewBrand = (brand: any): void => {
    const brandToAdd = { id: RANDOM.id, name: brand.name, icon: brand.icon };
    setBrands([brandToAdd, ...brands]);
  };

  return (
    <div className={styles.wrap}>
      <BrandsHead onAddBrand={addnewBrand} />
      <Table
        emptyText="Здесь пока нет брендов"
        heading={head}
        idName="name"
        canBeDeleted={false}
        canBeEdit={false}
        hasCheckbox={false}
        firsTrWidth="162px"
      >
        <BrandList brands={brands} onRemove={handleRemove} />
      </Table>
    </div>
  );
};

export default Brands;
